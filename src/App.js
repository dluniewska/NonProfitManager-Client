import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import AnimalForm from './components/AnimalForm/AnimalForm'
import Transports from './components/Transports/Transports';
import TransportForm from './components/TransportForm/TransportForm';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/addAnimal' element={<AnimalForm />} />
          <Route path='/transports' element={<Transports />} />
          <Route path='/addTransport' element={<TransportForm />} />
        </Routes>
    </div>
  );
}

export default App;
