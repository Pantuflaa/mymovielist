
import React from 'react';

import '../App.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



const Pelicula = (props) =>{

    return(
        <Card text='white' border="info" style={{ width: '230px', height:'36rem'}} className="color2">
        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/"+ props.objetito["poster_path"]}/>
        <Card.Body>
            <Card.Title>{props.objetito["title"]}</Card.Title>
            <Card.Text>
               {props.objetito["vote_average"]+"/10"}
            </Card.Text>
            <Button size="sm" variant="warning">Ver</Button>
            </Card.Body>
        </Card>
    );
}

export default Pelicula;