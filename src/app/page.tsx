'use client';
import { useState, createContext, Dispatch, SetStateAction } from 'react';

import styles from './page.module.css'
import { metadata } from './layout'

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

  return (
    <main className={styles.main}>
      <Container className="mb-4">
        <h1 className="my-4">{metadata.title}</h1>
        <h2 className="mb-4 mt-3">説明</h2>
        <p>{metadata.description}</p>
      </Container>
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
