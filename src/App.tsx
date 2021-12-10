import GlobalStyle from "./styles/global";

import Input from "./components/Input";
import Button from "./components/Button";

import { useState } from "react";
import { Content, Container } from "./style";

import api from "./services/api";
import VerifyAddress from "./components/VerifyAddress";

interface AddressDataProps {
  formattedAddress: string;
}

function App() {
  const [addressData, setAddressData] = useState<AddressDataProps>();
  const [streetName, setStreetName] = useState<string>('');
  const [postalCode, setPostalCode] = useState<string>('');
  const [city, setCity] = useState<string>('');

  const handleUserAddressSubmit = async () => {
    try {
      const formData = new URLSearchParams();
      formData.append('streetName', streetName)
      formData.append('postalCode', postalCode)
      formData.append('city', city)

      const { data } = await api.post("/getAddress", formData);

      setAddressData(data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleUserResponseSubmit = async (wasValid: boolean) => {
    try {
      await api.get(`/valitadeAddress?wasValid=${wasValid}`);

      alert('Tudo ok, obrigado 👊')
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Container>
      <Content>
        <Input inputType="text" handleChangeText={(e) => setStreetName(e) }placeholderText="Nome da Rua" />
        <Input inputType="text" handleChangeText={(e) => setPostalCode(e) }placeholderText="CEP/Código postal" />
        <Input inputType="text" handleChangeText={(e) => setCity(e)}placeholderText="Cidade" />

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
      <GlobalStyle />
    </Container>
  );
}
export default App;
