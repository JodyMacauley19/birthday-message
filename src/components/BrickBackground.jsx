import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import BirthdayWords from './BirthdayWords';
import styles from '../styles/BrickBackground.module.css';

const BrickBackground = () => {
  return (
    <Container fluid className={styles['brick-background']}>
        <Row>
            <Col><BirthdayWords/></Col>
        </Row>
    </Container>
  )
}

export default BrickBackground;
