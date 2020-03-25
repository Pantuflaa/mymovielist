
import React from 'react';

import '../App.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



const Pelicula = (props) =>{

    return(
        <Card text='white' border="info"  className="color2">
        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/"+ props.objetito["poster_path"]} alt="Responsive image"/>
        <Card.Body>
            <Card.Title>{props.objetito["title"].length > 21 ? props.objetito["title"].substr(0,20) + "..." : props.objetito["title"]}</Card.Title>
            <Card.Text>
               {props.objetito["vote_average"]+"/10"}
            </Card.Text>
            <Button href= {"/"+props.objetito.id} size="sm" variant="warning">Ver</Button>
            </Card.Body>
        </Card>
        
    );
}

export default Pelicula;