import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './header/header.js';
//import ControlledCarousel from './carrusel/carrusel.js'
//import Top from './top/top.js'
import Movie from './movie/movie';

function App() {
  return (
    <div className="App color1 ">
      <div className="container-fluid">
        <Header></Header>
      </div>
      <Movie></Movie>
    </div>

  )
}

export default App;
