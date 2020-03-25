import React,{ Component } from 'react';
import Media from 'react-bootstrap/Media'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../App.css';

const axios = require('axios');
class Movie extends Component{
        constructor (props){
            super(props)
            this.state={estandar:undefined,
                   actore:undefined,
                   escritore:undefined,
                   directore:undefined,
                    video:undefined
            }
        }
        
        async componentDidMount(){
            let number = this.props.pelicula.split("/")[1]
            const response = await axios.get("https://api.themoviedb.org/3/movie/"+number+"?api_key=466c19159235f9ce92fe9604a953aba2&language=es")
            console.log(response)
            let superaux = []
            superaux.push(response.data)
            console.log("MAMA")
            const response2 = await axios.get("https://api.themoviedb.org/3/movie/"+number+"/credits?api_key=466c19159235f9ce92fe9604a953aba2")
            const response3 = await axios.get("https://api.themoviedb.org/3/movie/"+number+"/videos?api_key=466c19159235f9ce92fe9604a953aba2&language=es")

            console.log(response2)
            let i=0;
            let actores=[];
            let escritores=[];
            let directores=[];
            for(i=0; i<3;i++){
                  actores.push(response2.data.cast[i])          
            }
            response2.data.crew.forEach(element => {
                if(element.department=="Writing"){
                    escritores.push(element)
                }
               else if(element.department=="Directing"){
                    directores.push(element)
                }
    
            });
            
            this.setState({
                estandar:superaux,
                actore:actores,
                escritore:escritores,
                directore:directores,
                video:response3.data.results
            })
            console.log("XDDDDDDDD")
            console.log(this.state.estandar[0].release_date)

        }
        render () {

            return (this.state.estandar===undefined) ?
            (<div>CARGANDO</div>) :
            ( <div>
                <Container fluid>
                    <Row className = "color2">
                        <Col className = "text">
                            <span className = "title">{this.state.estandar[0].title} </span><span className = "year">({this.state.estandar[0]["release_date"].split("-")[0]})</span>
                        </Col>
                        <Col>    
                            <img
                                id = "star"
                                height = "50px"
                                width = "50px"
                                className="mr-3"
                                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png"
                                alt="Generic placeholder"
                            />                         
                        </Col>
                        <Col>
                            <span className = "rate">{this.state.estandar[0].vote_average}/10</span>
                            <br></br>
                            <span className = "cont">{this.state.estandar[0].vote_count}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img
                                id = "movie"
                                className="mr-3"
                                src={"https://image.tmdb.org/t/p/w500/"+this.state.estandar[0].poster_path}
                                alt="Generic placeholder"
                            />
                        </Col>
                        <Col>
                            <Row>
                                <Media.Body className = "text">
                                    <p className = "color3" id = "rcorners1" >
                                        {this.state.estandar[0].overview}           
                                    </p>
                                        <p align = "left"> 
                                            <strong> Director: </strong> 
                                            {this.state.directore.map(
                                                 (director) => director.name+", "
                                            )}
                                             <br /> 
                                            <strong> Writers: </strong> 
                                            {this.state.escritore.map(
                                                 (escritor) => escritor.name+", "
                                            )}
                                             <br /> 
                                            <strong> Stars: </strong> 
                                            {this.state.actore.map(
                                                 (actor) => actor.name+", "
                                            )}
                                             <br /> 
                                        </p>
                                </Media.Body>
                            </Row>
                            <Row>
                                <Col>
                                <iframe id ="video" width="500" height="400" src={"https://www.youtube.com/embed/"+this.state.video[0].key} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        
                    </Row>
                </Container>
            </div>)
            
        }
    };
export default Movie;