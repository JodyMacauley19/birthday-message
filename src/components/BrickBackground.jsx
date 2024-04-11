import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import BirthdayWords from './BirthdayWords';

const BrickBackground = () => {
  return (
    <Container fluid className='brick-background'>
        <Row>
            <Col><BirthdayWords/></Col>
        </Row>
    </Container>
  )
}

export default BrickBackground;
