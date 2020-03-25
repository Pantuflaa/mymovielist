import React,{ useState } from 'react';
import Media from 'react-bootstrap/Media'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../App.css';

const Movie = () =>{
    return(
        <div>
            <Container fluid>
                <Row className = "color2">
                    <Col className = "text">
                        <span className = "title">1917 </span><span className = "year">(2019)</span>
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
                        <span className = "rate">8.5/10</span>
                        <br></br>
                        <span className = "cont">100</span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img
                            id = "movie"
                            className="mr-3"
                            src="https://www.uphe.com/sites/default/files/styles/scale__344w_/public/2020/02/1917_PosterArt.jpg?itok=iTpeF08o"
                            alt="Generic placeholder"
                        />
                    </Col>
                    <Col>
                        <Row>
                            <Media.Body className = "text">
                                <p className = "color3" id = "rcorners1" >
                                    April 6th, 1917. As a regiment assembles to wage war deep in enemy territory,
                                    two soldiers are assigned to race against time and deliver a message that 
                                    will stop 1,600 men from walking straight into a deadly trap.                   
                                </p>
                                    <p align = "left"> 
                                        <strong> Director: </strong> Sam Mendes <br /> 
                                        <strong> Writers: </strong> Sam Mendes, Krysty Wilson-Cairns <br /> 
                                        <strong> Stars: </strong> Dean-Charles Chapman, George MacKay, Daniel Mays | See full cast & crew <br /> 
                                    </p>
                            </Media.Body>
                        </Row>
                        <Row>
                            <Col>
                                <video id = "video" width="400" controls>
                                    <source src="https://www.youtube.com/watch?v=rZD6nMlC3tE" type="video/ogg"/>
                                    Your browser does not support HTML5 video.
                                </video>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    
                </Row>
            </Container>
        </div>
    )
};
export default Movie;