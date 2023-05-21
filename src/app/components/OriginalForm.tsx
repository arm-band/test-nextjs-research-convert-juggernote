import { useContext, useRef } from 'react';
import { OriginalText } from './Wrapper';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function OriginalForm(props: { name: string, head: string, muted: string }) {
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const orgText = useContext(OriginalText);
  const handleClickSend = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const type= typeof e.currentTarget?.name === 'string' ? e.currentTarget?.name : 'standard';
    const text = typeof inputRef.current?.value === 'string' ? inputRef.current?.value : '';
    orgText?.setType(type);
    orgText?.setText(text);
  }

  return (
    <Form name={props.name}>
      <h3 className="mb-4 mt-3">{props.head}</h3>
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
