import React, { Component } from 'react'; 
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const axios = require('axios');
class Recomended extends Component {
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
    <Carousel className="carr3" activeIndex={this.state.index} onSelect={this.handleSelect}>
      <Carousel.Item>
        <Container>
            <Row>
                <Col>
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
                </Col>
                <Col>
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
                </Col>
                <Col>
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
                </Col>
            </Row>
        </Container>
        

      </Carousel.Item>
      <Carousel.Item>
    <Container>
        <Row>
            <Col>
                <img    
                    className="d-block carr img-responsive"
                    src={"https://image.tmdb.org/t/p/w1280/" +this.state.movies[1]["backdrop_path"]}
                    alt="Second slide img-responsive"
                    id = "reco"
                />
                <Carousel.Caption>
                    <h3>{this.state.movies[1]["title"]}</h3>
                    <p>{this.state.movies[1][ "vote_average"]+"/10"}</p>
                </Carousel.Caption>
            </Col>
            <Col>
                <img
                    className="d-block carr img-responsive"
                    src={"https://image.tmdb.org/t/p/w1280/" +this.state.movies[1]["backdrop_path"]}
                    alt="Second slide img-responsive"
                    id = "reco"
                />
                <Carousel.Caption>
                    <h3>{this.state.movies[1]["title"]}</h3>
                    <p>{this.state.movies[1][ "vote_average"]+"/10"}</p>
                </Carousel.Caption>
            </Col>
            <Col>
                <img
                    className="d-block carr img-responsive"
                    src={"https://image.tmdb.org/t/p/w1280/" +this.state.movies[1]["backdrop_path"]}
                    alt="Second slide img-responsive"
                    id = "reco"
                />
                <Carousel.Caption>
                    <h3>{this.state.movies[1]["title"]}</h3>
                    <p>{this.state.movies[1][ "vote_average"]+"/10"}</p>
                </Carousel.Caption>
            </Col>
        </Row>
    </Container>
    </Carousel.Item>
    <Carousel.Item>
        <Container>
            <Row>
                <Col>
                    <img
                        className="d-block carr img-responsive"
                        src={"https://image.tmdb.org/t/p/w1280/" +this.state.movies[2]["backdrop_path"]}
                        alt="Third slide"
                        id = "reco"
                    />
                    <Carousel.Caption>
                        <h3>{this.state.movies[2]["title"]}</h3>
                        <p>{this.state.movies[2][ "vote_average"]+"/10"}</p>
                    </Carousel.Caption>
                </Col>
                <Col>
                    <img
                        className="d-block carr img-responsive"
                        src={"https://image.tmdb.org/t/p/w1280/" +this.state.movies[2]["backdrop_path"]}
                        alt="Third slide"
                        id = "reco"
                    />
                    <Carousel.Caption>
                        <h3>{this.state.movies[2]["title"]}</h3>
                        <p>{this.state.movies[2][ "vote_average"]+"/10"}</p>
                    </Carousel.Caption>
                </Col>
                <Col>
                    <img
                        className="d-block carr img-responsive"
                        src={"https://image.tmdb.org/t/p/w1280/" +this.state.movies[2]["backdrop_path"]}
                        alt="Third slide"
                        id = "reco"
                    />
                    <Carousel.Caption>
                        <h3>{this.state.movies[2]["title"]}</h3>
                        <p>{this.state.movies[2][ "vote_average"]+"/10"}</p>
                    </Carousel.Caption>
                </Col>
            </Row>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
}
}

//render(<ControlledCarousel />);

export default Recomended;