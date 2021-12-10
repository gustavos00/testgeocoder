import GlobalStyle from "./styles/global";

import Input from "./components/Input";
import Button from "./components/Button";

import { useState } from "react";
import { Content, Container } from "./style";

import api from "./services/api";
import VerifyAddress from "./components/VerifyAddress";
import Loading from "./components/Loading";

interface AddressDataProps {
  formattedAddress: string;
}

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [addressData, setAddressData] = useState<AddressDataProps>();
  const [streetName, setStreetName] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [city, setCity] = useState<string>("");

  const handleUserAddressSubmit = async () => {
    if (streetName) {
      if(postalCode) {
        try {
          setIsLoading(true);
          const formData = new URLSearchParams();
          formData.append("streetName", streetName);
          formData.append("postalCode", postalCode);
          formData.append("city", city);
  
          const { data } = await api.post("/getAddress", formData);
  
          setAddressData(data);
          setIsLoading(false);
        } catch (e) {
          console.log(e);
          alert("Não encontramos a sua morada, tente novamente.");
  
          setIsLoading(false);
        }
      } else {
        alert('Insira um CEP/CP')
      }
      
    } else {
      alert('Insira o nome de uma Rua');
    }
  };

  const handleUserResponseSubmit = async (wasValid: boolean) => {
    try {
      setIsLoading(true)
      await api.get(`/valitadeAddress?wasValid=${wasValid}`);

      setIsLoading(false);
      alert("Tudo ok, obrigado 👊");
    } catch (e) {
      setIsLoading(false)
      console.log(e);
    }
  };
  return (
    <Container>
      <Content>
        <Input
          inputType="text"
          handleChangeText={(e) => setStreetName(e)}
          placeholderText="Nome da Rua"
        />
        <Input
          inputType="text"
          handleChangeText={(e) => setPostalCode(e)}
          placeholderText="CEP/Código postal"
        />
        <Input
          inputType="text"
          handleChangeText={(e) => setCity(e)}
          placeholderText="Cidade"
        />

        <Button
          handleSubmit={() => handleUserAddressSubmit()}
          text={"Submeter"}
        />
      </Content>

      {addressData && (
        <>
          <Content>
            <VerifyAddress
              formattedAddress={addressData.formattedAddress}
              handleUserResponseSubmit={handleUserResponseSubmit}
            />
          </Content>
        </>
      )}

      {isLoading && <Loading />}
      <GlobalStyle />
    </Container>
  );
}
export default App;
