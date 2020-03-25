import React from 'react';

import './App.css';

import Header from './header/header.js';
import ControlledCarousel from './carrusel/carrusel.js'
import PeliculasHandler from './Bottom/PeliculasHandler.js'

function App() {
  console.log(window.location.pathname); 
  console.log(window.location.href);
  const path = window.location.pathname;
  return path=="/"?( 
    <div className="App color1 ">
    <div className="container-fluid">
          <Header></Header>
    </div>
    <ControlledCarousel></ControlledCarousel>
    <br></br>
    <PeliculasHandler></PeliculasHandler> 
  </div>
  ) :"xd"

  
}

export default App;
