import { useContext } from 'react';
import { OriginalText } from '../page';
import Form from 'react-bootstrap/Form';

function ConvertedForm() {
  const orgText = useContext(OriginalText);

  switch (orgText?.type) {
    case 'mfn':
        // Modern Footnotes
        break;
    case 'print':
        // print
        break;
    default:
        // standard
        break;
  }

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
