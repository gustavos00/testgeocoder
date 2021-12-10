import * as Styles from './styles';

interface YesButtonProps {
  handleSubmit: () => void;
}

function YesButton({ handleSubmit }: YesButtonProps) {
  return (
    <Styles.Button onClick={handleSubmit}>
      Sim
    </Styles.Button>
  );
};

export default YesButton;
