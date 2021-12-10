import * as Styles from './styles';

interface TextProps {
  text?: string;
  placeholder: string
}

function Text({ text, placeholder }: TextProps) {
  return (
    <Styles.Container>
      <Styles.Placeholder>{placeholder}</Styles.Placeholder>
      <Styles.Text>{text}</Styles.Text>
    </Styles.Container>
  );
};

export default Text;
