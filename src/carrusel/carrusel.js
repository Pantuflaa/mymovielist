import React, { Component } from 'react'; 

import '../App.css';

import Carousel from 'react-bootstrap/Carousel';



const axios = require('axios');
class ControlledCarousel extends Component {
  state = {
    index :0,
     movies:["xd", "xp","lol"]
  }

  handleSelect = (selectedIndex, e) => {
    this.setState({index:selectedIndex});
  };

  async componentDidMount () {
    const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=466c19159235f9ce92fe9604a953aba2&language=es&page=1')
    
    const aux=[];
    let i =0;
    for(i= 0; i< 3; i++){
       aux.push(response["data"]["results"][i])
    }
    this.setState({movies:aux});
   
    
  };

 

  
 

  render () {
    return (
    <Carousel className="carr2" activeIndex={this.state.index} onSelect={this.handleSelect}>
      <Carousel.Item>
        <a href ={this.state.movies[0].id}>
        <img
          className="d-block carr img-responsive"
          src={"https://image.tmdb.org/t/p/w1280/" +this.state.movies[0]["backdrop_path"]}
          alt="First slide"
         
        />
        <Carousel.Caption>
          <h3>{this.state.movies[0]["title"]}</h3>
          <p>{this.state.movies[0][ "vote_average"]+"/10"}</p>
        </Carousel.Caption>
      </a>  
      </Carousel.Item>
      <Carousel.Item>
        <a href = {this.state.movies[1].id}>
        <img
          className="d-block carr img-responsive"
          src={"https://image.tmdb.org/t/p/w1280/" +this.state.movies[1]["backdrop_path"]}
           alt="Second slide img-responsive"

        />
        <Carousel.Caption>
          <h3>{this.state.movies[1]["title"]}</h3>
          <p>{this.state.movies[1][ "vote_average"]+"/10"}</p>
        </Carousel.Caption>
      </a>  
      </Carousel.Item>
      <Carousel.Item>
        <a href = {this.state.movies[2].id}>
        <img
          className="d-block carr img-responsive"
          src={"https://image.tmdb.org/t/p/w1280/" +this.state.movies[2]["backdrop_path"]}
          alt="Third slide"
         
        />
        <Carousel.Caption>
          <h3>{this.state.movies[2]["title"]}</h3>
          <p>{this.state.movies[2][ "vote_average"]+"/10"}</p>
        </Carousel.Caption>
      </a>  
      </Carousel.Item>
    </Carousel>
  );
}
}

//render(<ControlledCarousel />);

export default ControlledCarousel;