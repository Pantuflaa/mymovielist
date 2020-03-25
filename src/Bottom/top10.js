import React , { Component } from 'react';
import Pelicula from './carta.js';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardDeck from 'react-bootstrap/CardDeck';
import CardGroup from 'react-bootstrap/CardGroup';
import { CardColumns } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


const Top10 = (props) => {
    return(        
        <Card className="bg-dark text-white" style={{ height:'174px'}} >
        <a href={"/"+props.objetazo.id}>
        <Card.Img  src={"https://image.tmdb.org/t/p/w500/"+ props.objetazo["backdrop_path"]} alt="Card image" />
        <Card.ImgOverlay>
        <Card.Title>{props.objetazo["title"]}</Card.Title>
        <Card.Text>
           <div className="score"><span className="negro"> {props.objetazo["vote_average"]+"/10"}</span></div> 
        </Card.Text>
            <Card.Text>{props.objetazo["release_date"]}</Card.Text>
        </Card.ImgOverlay>
        </a>
        </Card>
    );
}

export default Top10;

















