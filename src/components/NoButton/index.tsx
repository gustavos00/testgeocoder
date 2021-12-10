import * as Styles from './styles';

interface NoButtonProps {
  handleSubmit: () => void;
}

function NoButton({ handleSubmit }: NoButtonProps) {
  return (
    <Styles.Button onClick={handleSubmit}>
      Não
    </Styles.Button>
  );
};

export default NoButton;
