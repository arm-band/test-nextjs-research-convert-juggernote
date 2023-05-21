import { useContext, Dispatch, SetStateAction } from 'react';
import { OriginalText } from '../page';
import Form from 'react-bootstrap/Form';

type Value = {
    text: string,
    setText: Dispatch<SetStateAction<string>>,
};

function OriginalForm(props: { name: string, head: string, muted: string }) {
  const orgText = useContext(OriginalText);
  const handleChangeTextarea = (e: React.ChangeEvent<HTMLInputElement>) => {
    orgText?.setText(e.target.value)
    console.log(orgText?.text)
  }

  return (
    <Form name={props.name}>
      <h2 className="mb-4 mt-3">{props.head}</h2>
      <Form.Group className="mb-3" controlId={props.name}>
        <Form.Label>変換前テキスト</Form.Label>
        <Form.Control
            as="textarea"
            rows={10}
            onChange={handleChangeTextarea}
        />
        <Form.Text className="text-muted">
            {props.muted}
        </Form.Text>
      </Form.Group>
    </Form>
  );
}

export default OriginalForm;
