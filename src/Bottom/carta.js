
import React from 'react';

import '../App.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



const Pelicula = (props) =>{

    return(
        <Card text='white' border="info" style={{ width: '15rem'}} className="color2">
        <Card.Img variant="top" src="https://media.discordapp.net/attachments/361618001243668492/690382846379950121/FB_IMG_1584670402868.jpg?width=488&height=475" />
        <Card.Body>
            <Card.Title>Título</Card.Title>
            <Card.Text>
               Someshit
            </Card.Text>
            <Button size="sm" variant="warning">Ver</Button>
            </Card.Body>
        </Card>
    );
}

export default Pelicula;