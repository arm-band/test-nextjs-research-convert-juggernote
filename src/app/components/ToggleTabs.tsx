import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import OriginalForm from './OriginalForm';

function ToggleTabs() {
    return (
      <Tabs
        defaultActiveKey="standard"
        id="toggle-tab"
        className="mb-3"
      >
        <Tab eventKey="standard" title="standard">
          <OriginalForm
            name="standard"
            head="通常テキスト"
            muted="通常の Markdown テキストとして変換します。"
          />
        </Tab>
        <Tab eventKey="mfn" title="mfn">
          <OriginalForm
            name="mfn"
            head="WordPress"
            muted="WordPress の Modern Footnotes を想定したテキストに変換します。"
          />
        </Tab>
        <Tab eventKey="print" title="print">
          <OriginalForm
            name="print"
            head="印刷用"
            muted="印刷を想定した Markdown テキストとして変換します。"
          />
        </Tab>
      </Tabs>
    );
}

export default ToggleTabs;
