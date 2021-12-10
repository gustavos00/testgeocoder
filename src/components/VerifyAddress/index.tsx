import * as Styles from "./styles";

import Text from "../Text/index";
import YesButton from "../YesButton/index";
import NoButton from "../NoButton/index";

interface VerifyAddressProps {
  formattedAddress: string;
  handleUserResponseSubmit: (wasValid: boolean) => void;
}

function VerifyAddress({
  formattedAddress,
  handleUserResponseSubmit,
}: VerifyAddressProps) {
  return (
    <Styles.Container>
      <Text placeholder={"Endereço/Morada:"} text={formattedAddress} />
      <Text placeholder={"Este é o seu endereço/morada?"} />

      <Styles.ButtonsContainer>
      <YesButton handleSubmit={() => handleUserResponseSubmit(true)} />
      <NoButton handleSubmit={() => handleUserResponseSubmit(false)} />
      </Styles.ButtonsContainer>
    </Styles.Container>
  );
}

export default VerifyAddress;
