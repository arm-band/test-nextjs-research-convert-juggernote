'use client';
import styles from './page.module.css'
import { metadata } from './layout'

import Container from 'react-bootstrap/Container';
import Wrapper from './components/Wrapper';

export default function Home() {
  return (
    <main className={styles.main}>
      <Container className="mb-4">
        <h1 className="my-4">{metadata.title}</h1>
        <h2 className="mb-4 mt-3">説明</h2>
        <p>{metadata.description}</p>
      </Container>
      <div className={styles.description}>
        <Wrapper />
      </div>
    </main>
  )
}
