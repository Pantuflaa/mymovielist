import React from 'react';

import './App.css';

import Header from './header/header.js';
//import ControlledCarousel from './carrusel/carrusel.js'
//import PeliculasHandler from './Bottom/PeliculasHandler.js'
import Movie from './movie/movie';
import Recomended from './recomended/recomended';
//import Container from 'react-bootstrap/Container'

function App() {
  return (
    <div className="App color1 ">
      <div className="container-fluid">
        <Header></Header>
        <Movie></Movie>
      </div>
      <ControlledCarousel></ControlledCarousel>
      <br></br>
      <PeliculasHandler></PeliculasHandler>
      <br></br> 
      <Recomended></Recomended>
     
    </div>
  );
}
/*<ControlledCarousel></ControlledCarousel>
      <PeliculasHandler></PeliculasHandler>*/
export default App;