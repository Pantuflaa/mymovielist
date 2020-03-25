import React, { Component } from 'react'; 
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav';
import Spinner from 'react-bootstrap/Spinner'

const axios = require('axios');
class Recomended extends Component {
  state = {
    index :0,
     movies:undefined
  }

  handleSelect = (selectedIndex, e) => {
    this.setState({index:selectedIndex});
  };

  async componentDidMount () {
      let number = this.props.peli.split("/")[1]
      const response = await axios.get('https://api.themoviedb.org/3/movie/'+number+'/similar?api_key=466c19159235f9ce92fe9604a953aba2&language=es&page=1')
    const aux=[];
    let i =0;
    for(i= 0; i< 9; i++){
       aux.push(response["data"]["results"][i])
    }
    this.setState({movies:aux});
  };

  render () {
    return (this.state.movies===undefined|| this.state.movies[0]===undefined|| this.state.movies[1]===undefined|| this.state.movies[2]===undefined|| this.state.movies[3]===undefined|| this.state.movies[4]===undefined|| this.state.movies[5]===undefined|| this.state.movies[6]===undefined|| this.state.movies[7]===undefined|| this.state.movies[8]===undefined) ? 
    (
        <div>
            <Spinner animation="border" role="status">
            </Spinner>
            <span className="text"> Loading...</span>
        </div>) :
    (
    <div className = "space">
        <Row>
            <Col></Col>
            <Col xs = {9}>
                <Nav defaultActiveKey="/home" as="ul" className='color2 '>  
                    <span className="dorado center" id = "popular">Related Movies</span>
                </Nav> 
            </Col>
            <Col></Col>
        </Row>
        <Carousel className="carr3" activeIndex={this.state.index} onSelect={this.handleSelect}>
            <Carousel.Item>
                <Container>
                    <Row>
                        <Col>
                        <a href={this.state.movies[0].id}>
                            <img
                                className="d-block carr img-responsive"
                                src={"https://image.tmdb.org/t/p/w1280/" +this.state.movies[0]["backdrop_path"]}
                                alt="First slide"
                                id = "reco"
                            />
                        
                            <Carousel.Caption>
                                <h3>{this.state.movies[0]["title"]}</h3>
                                <p>{this.state.movies[0][ "vote_average"]+"/10"}</p>
                            </Carousel.Caption>
                        </a>  
                        </Col>
                        <Col>
                        <a href={this.state.movies[1].id}>
                            <img
                                className="d-block carr img-responsive"
                                src={"https://image.tmdb.org/t/p/w1280/" +this.state.movies[1]["backdrop_path"]}
                                alt="First slide"
                                id = "reco"
                            />
                        
                            <Carousel.Caption>
                                <h3>{this.state.movies[1]["title"]}</h3>
                                <p>{this.state.movies[1][ "vote_average"]+"/10"}</p>
                            </Carousel.Caption>
                        </a>
                        </Col>
                        <Col>
                        <a href={this.state.movies[2].id}>
                            <img
                                className="d-block carr img-responsive"
                                src={"https://image.tmdb.org/t/p/w1280/" +this.state.movies[2]["backdrop_path"]}
                                alt="First slide"
                                id = "reco"
                            />
                            <Carousel.Caption>
                                <h3>{this.state.movies[2]["title"]}</h3>
                                <p>{this.state.movies[2][ "vote_average"]+"/10"}</p>
                            </Carousel.Caption>
                        </a>
                        </Col>
                    </Row>
                </Container>
                

            </Carousel.Item>
            <Carousel.Item>
                <Container>
                    <Row>
                        <Col>
                        <a href={this.state.movies[3].id}>
                            <img    
                                className="d-block carr img-responsive"
                                src={"https://image.tmdb.org/t/p/w1280/" +this.state.movies[3]["backdrop_path"]}
                                alt="Second slide img-responsive"
                                id = "reco"
                            />
                                <Carousel.Caption>
                                    <h3>{this.state.movies[3]["title"]}</h3>
                                    <p>{this.state.movies[3][ "vote_average"]+"/10"}</p>
                                </Carousel.Caption>
                        </a>
                        </Col>
                        <Col>
                        <a href={this.state.movies[4].id}>
                            <img
                                className="d-block carr img-responsive"
                                src={"https://image.tmdb.org/t/p/w1280/" +this.state.movies[4]["backdrop_path"]}
                                alt="Second slide img-responsive"
                                id = "reco"
                            />  
                            <Carousel.Caption>
                                <h3>{this.state.movies[4]["title"]}</h3>
                                <p>{this.state.movies[4][ "vote_average"]+"/10"}</p>
                            </Carousel.Caption>
                        </a>
                        </Col>
                        <Col>
                        <a href={this.state.movies[5].id}>
                            <img
                                className="d-block carr img-responsive"
                                src={"https://image.tmdb.org/t/p/w1280/" +this.state.movies[5]["backdrop_path"]}
                                alt="Second slide img-responsive"
                                id = "reco"
                            />  
                            <Carousel.Caption>
                                <span>    
                                    <h3>{this.state.movies[5]["title"]}</h3>
                                    <p>{this.state.movies[5][ "vote_average"]+"/10"}</p>
                                </span>
                            </Carousel.Caption>
                        </a>
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>
            <Carousel.Item>
                <Container>
                    <Row>
                        <Col>
                        <a href={this.state.movies[6].id}>
                            <img
                                className="d-block carr img-responsive"
                                src={"https://image.tmdb.org/t/p/w1280/" +this.state.movies[6]["backdrop_path"]}
                                alt="Third slide"
                                id = "reco"
                            />  
                            <Carousel.Caption>
                                <h3>{this.state.movies[6]["title"]}</h3>
                                <p>{this.state.movies[6][ "vote_average"]+"/10"}</p>
                            </Carousel.Caption>
                        </a>  
                        </Col>
                        <Col>
                        <a href={this.state.movies[7].id}>
                            <img
                                className="d-block carr img-responsive"
                                src={"https://image.tmdb.org/t/p/w1280/" +this.state.movies[7]["backdrop_path"]}
                                alt="Third slide"
                                id = "reco"
                            />
                            <Carousel.Caption>
                                <h3>{this.state.movies[7]["title"]}</h3>
                                <p>{this.state.movies[7][ "vote_average"]+"/10"}</p>
                            </Carousel.Caption>
                        </a>  
                        </Col>
                        <Col>
                        <a href={this.state.movies[8].id}>
                            <img
                                className="d-block carr img-responsive"
                                src={"https://image.tmdb.org/t/p/w1280/" +this.state.movies[8]["backdrop_path"]}
                                alt="Third slide"
                                id = "reco"
                            /> 
                            <Carousel.Caption>
                                <h3>{this.state.movies[8]["title"]}</h3>
                                <p>{this.state.movies[8][ "vote_average"]+"/10"}</p>
                            </Carousel.Caption>
                        </a>  
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}
}

//render(<ControlledCarousel />);

export default Recomended;