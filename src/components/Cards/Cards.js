import React, { useEffect } from 'react'
import { fetchAnimals } from '../../features/AnimalsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { CircularProgress } from '@mui/material'
import { Row, Col } from 'react-bootstrap'
import AnimalCard from './Card/AnimalCard'

const Cards = () => {

    const dispatch = useDispatch();
    const animals = useSelector(state => state.Animals.animals);

    useEffect(()=> {
        dispatch(fetchAnimals());
    },[dispatch])

  return (
    !animals.length ? <CircularProgress color="inherit" /> : (
      <Row xs={1} md={2} lg={3} xl={4} className="g-4 p-5">
      {animals.map((animal) => (
        <Col>
          <AnimalCard animal={animal}/>
        </Col>
      ))}
      </Row>
    )
  );
}

export default Cards