import React from 'react';

import './App.css';

import Header from './header/header.js';
import ControlledCarousel from './carrusel/carrusel.js'
import PeliculasHandler from './Bottom/PeliculasHandler.js'

function App() {
  return (
    <div className="App color1 ">
      <div className="container-fluid">
            <Header></Header>
      </div>
      <ControlledCarousel></ControlledCarousel>
      <br></br>
      <PeliculasHandler></PeliculasHandler>

     
    </div>

  );
}

export default App;
