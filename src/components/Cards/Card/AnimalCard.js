import React, { useState, useEffect } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import API from '../../API/API';
import "./AnimalCard.css"

const AnimalCard = (props) => {

  const [base64, setBase64] = useState();
  let animalid = props.animal.animalId;

  useEffect(() => {
    API.get(`api/Photos/PhotoByAnimalId/${animalid}`)
    .then(({data}) => {
      setBase64(data.bytes);
    })
    .catch((error) => console.error(error));
  }, []);

    return (
        <Card style={{ width: '18rem' }} className='m-2 animalCard'>
          <Card.Img variant="top" src={`data:image/png;base64,${base64}`} className='animalCardImg'/>
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