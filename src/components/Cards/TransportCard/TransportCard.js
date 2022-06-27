import React, { useState, useEffect } from 'react'
import { Card, ListGroup, Button } from 'react-bootstrap'

const TransportCard = (props) => {
    return (
        <Card style={{ width: '18rem' }} className='m-2 animalCard'>
          <Card.Body>
            <Card.Title>Cel: {props.transport.destination}</Card.Title>
            <Card.Text>Początek: {props.transport.startCity} </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{props.transport.description}</ListGroup.Item>
            <ListGroup.Item>{props.transport.animalsQuantity}</ListGroup.Item>
            <ListGroup.Item>{props.transport.animalId}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button href="#" variant="outline-warning" className='m-2'>Edit</Button>
            <Button href="#" variant="outline-danger" className='m-2'>Delete</Button>
          </Card.Body>
        </Card>
      );
}

export default TransportCard