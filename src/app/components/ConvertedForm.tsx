import { useContext, Dispatch, SetStateAction } from 'react';
import { OriginalText } from '../page';
import Form from 'react-bootstrap/Form';

type Value = {
    text: string,
    setText: Dispatch<SetStateAction<string>>,
};

function ConvertedForm() {
  const orgText = useContext(OriginalText);
  return (
    <Form name="converted">
      <h2 className="mb-4 mt-3">変換後テキスト</h2>
      <Form.Group className="mb-3" controlId="converted">
        <Form.Label>変換後テキスト</Form.Label>
        <Form.Control
            as="textarea"
            rows={10}
            value={orgText?.text}
            readOnly
        />
      </Form.Group>
    </Form>
  );
}

export default ConvertedForm;
