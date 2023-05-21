'use client';
import { useState, createContext, Dispatch, SetStateAction } from 'react';

import styles from './page.module.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToggleTabs from './components/ToggleTabs';
import ConvertedForm from './components/ConvertedForm';

type OrigText = {
    text: string,
    setText: Dispatch<SetStateAction<string>>,
    type: string,
    setType: Dispatch<SetStateAction<string>>,
};

export const OriginalText = createContext<OrigText | null>(null);

export default function Home() {
  const [text, setText] = useState('');
  const [type, setType] = useState('');
  const value: OrigText = {
    text,
    setText,
    type,
    setType,
  };
//  console.log(value.text)

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <OriginalText.Provider value={value}>
          <Container>
            <Row>
              <Col lg={6}>
                  <ToggleTabs />
              </Col>
              <Col lg={6}>
                  <ConvertedForm />
              </Col>
            </Row>
          </Container>
        </OriginalText.Provider>
      </div>
    </main>
  )
}
