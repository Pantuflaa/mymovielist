import React from 'react';

import './App.css';

import Header from './header/header.js';
import ControlledCarousel from './carrusel/carrusel.js'
import PeliculasHandler from './Bottom/PeliculasHandler.js'
import Movie from './movie/movie';
import Recomended from './recomended/recomended';
import Container from 'react-bootstrap/Container'

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
  ) : (
    <div className="App color1 ">
    <div className="container-fluid">
          <Header></Header>
    </div>
      <Movie pelicula = {path}></Movie>
      <Recomended peli = {path}></Recomended>
  </div>
   )

  
}
/*<ControlledCarousel></ControlledCarousel>
      <PeliculasHandler></PeliculasHandler>*/
export default App;