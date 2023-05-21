import { useContext, Dispatch, SetStateAction, useRef } from 'react';
import { OriginalText } from '../page';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

type Value = {
    text: string,
    setText: Dispatch<SetStateAction<string>>,
};

function OriginalForm(props: { name: string, head: string, muted: string }) {
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const orgText = useContext(OriginalText);
  const handleClickSend = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const text = typeof inputRef.current?.value === 'string' ? inputRef.current?.value : '';
    console.log(text)
    orgText?.setText(text);
    console.log(orgText?.text);
  }

  return (
    <Form name={props.name}>
      <h2 className="mb-4 mt-3">{props.head}</h2>
      <Form.Group className="mb-3" controlId={props.name}>
        <Form.Label>変換前テキスト</Form.Label>
        <Form.Control
            as="textarea"
            rows={10}
            ref={inputRef}
            defaultValue=""
        />
        <Form.Text className="text-muted">
            {props.muted}
        </Form.Text>
      </Form.Group>
      <Button
        variant="primary"
        name={props.name}
        type="submit"
        onClick={handleClickSend}
      >
        変換
      </Button>
    </Form>
  );
}

export default OriginalForm;
