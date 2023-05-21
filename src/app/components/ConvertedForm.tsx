import { useContext } from 'react';
import { OriginalText } from '../page';
import Form from 'react-bootstrap/Form';
import styles from '../page.module.css';


const convertStandard = (text: string): string => {
    const regex: RegExp = /\[jug\](.*?)\[\/jug\]/gi;
    // 脚注配列
    let footnotesArray: Array<string> = [];
    // 脚注配列 (スペースなし)
    let footnotesNoSpaceArray: Array<string> = [];
    const matchArray: Array<string> | null = text.match(regex) !== null ? text.match(regex) : [];
    for(const match of matchArray!) {
        // マッチした値から重複除去して脚注の配列を作成 (スペース除去した文字列で比較)
        const plainText: string = match.replace('[jug]', '').replace('[/jug]', '');
        const plainTextNoSpace: string = plainText.replace(/\s+/g, '');
        if(!footnotesNoSpaceArray.includes(plainTextNoSpace)) {
            footnotesArray.push(plainText);
            footnotesNoSpaceArray.push(plainTextNoSpace);
        }
    }
    // 変換
    let convertedText: string = text;
    let footnotesList: string = `

## 脚注

`;
    for(let i = 0; i < footnotesArray.length; i++) {
        // 作成した脚注の配列を逆に [jug]XXXXX[/jug] の文字列と比較して [i+1]XXXXX[/i+1] に変換
        const regexRef: RegExp = new RegExp('\\[jug\\]' + footnotesArray[i].replace(/[\\^$.*+?()[\]{}|]/g, '\\$&') + '\\[\\/jug\\]', 'gi');
        convertedText = convertedText.replace(regexRef, '[' + (i + 1).toString() + ']');
        footnotesList += `${i + 1}. ${footnotesArray[i]}
`;
    }
    convertedText += footnotesList;
    return convertedText;
}
const convertMFN = (text: string): string => {
    const mfnText: string = text.replace(/\[jug\]/gi, '[mfn]').replace(/\[\/jug\]/gi, '[/mfn]');
    return mfnText;
}
const convertPrint = (text: string): string => {
    const regex: RegExp = /\[jug\](.*?)\[\/jug\]/gi;
    // 脚注配列
    let footnotesArray: Array<string> = [];
    // 脚注配列 (スペースなし)
    let footnotesNoSpaceArray: Array<string> = [];
    const matchArray: Array<string> | null = text.match(regex) !== null ? text.match(regex) : [];
    for(const match of matchArray!) {
        // マッチした値から重複除去して脚注の配列を作成 (スペース除去した文字列で比較)
        const plainText: string = match.replace('[jug]', '').replace('[/jug]', '');
        const plainTextNoSpace: string = plainText.replace(/\s+/g, '');
        if(!footnotesNoSpaceArray.includes(plainTextNoSpace)) {
            footnotesArray.push(plainText);
            footnotesNoSpaceArray.push(plainTextNoSpace);
        }
    }
    // 変換
    let convertedText: string = text;
    let footnotesList: string = `

## 脚注

`;
    for(let i = 0; i < footnotesArray.length; i++) {
        // 作成した脚注の配列を逆に [jug]XXXXX[/jug] の文字列と比較して <sup>[i+1]XXXXX[/i+1]</sup> に変換
        const regexRef: RegExp = new RegExp('\\[jug\\]' + footnotesArray[i].replace(/[\\^$.*+?()[\]{}|]/g, '\\$&') + '\\[\\/jug\\]', 'gi');
        convertedText = convertedText.replace(regexRef, '<sup>[' + (i + 1).toString() + ']</sup>');
        footnotesList += `${i + 1}. ${footnotesArray[i]}
`;
    }
    convertedText += footnotesList;
    return convertedText;
}

function ConvertedForm() {
  const orgText = useContext(OriginalText);
  const orginalText: string | undefined = typeof orgText?.text !== 'undefined' ? orgText?.text : '';
  let convertedText: string = '';

  switch (orgText?.type) {
    case 'mfn':
        // Modern Footnotes
        convertedText = convertMFN(orginalText!);
        break;
    case 'print':
        // print
        convertedText = convertPrint(orginalText!);
        break;
    default:
        // standard
        convertedText = convertStandard(orginalText!);
        break;
  }

  return (
    <Form name="converted" className={styles.converted}>
      <h2 className="mb-4 mt-3">変換後テキスト</h2>
      <Form.Group className="mb-3" controlId="converted">
        <Form.Label>変換後テキスト</Form.Label>
        <Form.Control
            as="textarea"
            rows={10}
            value={convertedText}
            readOnly
        />
      </Form.Group>
    </Form>
  );
}

export default ConvertedForm;
