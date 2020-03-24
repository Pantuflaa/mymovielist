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
                    <Col className = "text" id = "synopsis">
                        <h1 >1917</h1>
                        <h6 >(2019)</h6> 
                        <div>
                            <img
                                id = "star"
                                height = "4%"
                                width = "4%"
                                className="mr-3"
                                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png"
                                alt="Generic placeholder"
                            />   
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Media>
                        <Col>
                            <img
                                id = "movie"
                                className="mr-3"
                                src="https://www.uphe.com/sites/default/files/styles/scale__344w_/public/2020/02/1917_PosterArt.jpg?itok=iTpeF08o"
                                alt="Generic placeholder"
                            />
                        </Col>
                        <Col xs = {9}>
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
                        </Col>
                    </Media>
                </Row>
            </Container>
        </div>
    )
};
export default Movie;