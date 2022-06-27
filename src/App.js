import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import AnimalForm from './components/AnimalForm/AnimalForm'

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/addAnimal' element={<AnimalForm />} />
        </Routes>
    </div>
  );
}

export default App;
