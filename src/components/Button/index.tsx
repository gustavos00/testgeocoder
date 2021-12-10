import * as Styles from './styles';

interface ButtonProps {
  text: string;
  handleSubmit: () => void;
}

function Button({ text, handleSubmit }: ButtonProps) {
  return (
    <Styles.Button onClick={handleSubmit}>
      {text}
    </Styles.Button>
  );
};

export default Button;
