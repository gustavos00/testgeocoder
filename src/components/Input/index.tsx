import * as Styles from './styles';

interface InputProps {
  placeholderText: string,
  inputType: string,
  handleChangeText: (e: string) => void
}

function Input({ placeholderText, inputType, handleChangeText }: InputProps) {
  return (
    <Styles.Input onChange={(e) => handleChangeText(e.target.value)} type={inputType} placeholder={placeholderText} />
  );
};

export default Input;
