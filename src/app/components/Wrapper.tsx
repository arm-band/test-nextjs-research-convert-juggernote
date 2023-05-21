'use client';
import { useState, createContext, Dispatch, SetStateAction } from 'react';

import styles from '../page.module.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToggleTabs from './ToggleTabs';
import ConvertedForm from './ConvertedForm';

type OrigText = {
    text: string,
    setText: Dispatch<SetStateAction<string>>,
    type: string,
    setType: Dispatch<SetStateAction<string>>,
};

export const OriginalText = createContext<OrigText | null>(null);

function Wrapper() {
  const [text, setText] = useState('');
  const [type, setType] = useState('');
  const value: OrigText = {
    text,
    setText,
    type,
    setType,
  };

  return (
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
  )
}

export default Wrapper;
