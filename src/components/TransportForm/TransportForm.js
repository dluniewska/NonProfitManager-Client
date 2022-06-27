import React from 'react'
import { Form, Row, Col, Button, Container, Badge } from 'react-bootstrap'

const TransportForm = () => {
  return (
    <Container className='p-5 mt-3'>
      <h1>
        Dodaj transport <Badge bg="success">New</Badge>
      </h1>
      <Form className='m-5'>
        <Row className="mb-3">
          <Form.Group as={Col} align="start" controlId="formName">
            <Form.Label>Miejsce docelowe</Form.Label>
            <Form.Control placeholder="Cel" />
          </Form.Group>

          <Form.Group as={Col} align="start" controlId="formSpecies">
            <Form.Label>Miejsce odbioru</Form.Label>
            <Form.Control placeholder="Odbiór" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
        <Form.Group as={Col} align="start" controlId="transportQuantity">
            <Form.Label>Ilość zwierząt</Form.Label>
            <Form.Control placeholder="Ilość" />
          </Form.Group>

          <Form.Group as={Col} align="start" controlId="formSelectId">
            <Form.Label>Wybierz ID zwierząt</Form.Label>
            <Form.Select placeholder="ID">
              <option value="1">1 - Piggy</option>
              <option value="2">2 - Ratty</option>
              <option value="3">3 - Mousy </option>
              <option value="3">4 - Two rabbits </option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" align="start" controlId="formDetails">
          <Form.Label>Opis</Form.Label>
          <Form.Control as="textarea" placeholder="Details" />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button variant="outline-success" type="submit" size="lg">
            Zapisz
          </Button>
        </div>
      </Form>
    </Container>
  )
}

export default TransportForm