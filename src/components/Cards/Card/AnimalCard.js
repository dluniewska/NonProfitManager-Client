import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

const AnimalCard = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="favicon.png" width="200px" />
          <Card.Body>
            <Card.Title>{props.animal.name}</Card.Title>
            <Card.Text> {props.animal.age} </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{props.animal.species}</ListGroup.Item>
            <ListGroup.Item>{props.animal.details}</ListGroup.Item>
            <ListGroup.Item>{props.animal.quantity}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Delete</Card.Link>
            <Card.Link href="#">Edit</Card.Link>
          </Card.Body>
        </Card>
      );
}

export default AnimalCard