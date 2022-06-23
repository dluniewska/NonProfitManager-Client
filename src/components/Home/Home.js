import React, { useEffect } from 'react'
import { fetchAnimals } from '../../features/AnimalsSlice'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {

    const dispatch = useDispatch();
    const animals = useSelector(state => state.Animals.animals);

    useEffect(()=> {
        dispatch(fetchAnimals());
    },[dispatch])

  return (
    <div>Home</div>
  )
}

export default Home