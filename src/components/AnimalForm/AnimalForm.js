import React from 'react'
import { Form, Row, Col, Button, Container, Badge } from 'react-bootstrap'

const AnimalForm = () => {
  return (
    <Container className='p-5 mt-3'>
      <h1>
        Add animals <Badge bg="success">New</Badge>
      </h1>
      <Form className='m-5'>
        <Row className="mb-3">
          <Form.Group as={Col} align="start" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Name" />
          </Form.Group>

          <Form.Group as={Col} align="start" controlId="formSpecies">
            <Form.Label>Species</Form.Label>
            <Form.Control placeholder="Species" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
        <Form.Group as={Col} align="start" controlId="formAge">
            <Form.Label>Age</Form.Label>
            <Form.Control placeholder="Age" />
          </Form.Group>

          <Form.Group as={Col} align="start" controlId="formQuantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control placeholder="Quantity" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" align="start" controlId="formDetails">
          <Form.Label>Details</Form.Label>
          <Form.Control as="textarea" placeholder="Details" />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button variant="outline-success" type="submit" size="lg">
            Save
          </Button>
        </div>
      </Form>
    </Container>
  )
}

export default AnimalForm