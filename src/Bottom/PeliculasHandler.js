import React , { Component } from 'react';
import Pelicula from './carta.js';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavDropdown from 'react-bootstrap/NavDropdown';

const axios = require('axios');
class PeliculasHandler extends Component {
    state = {
        PeliculasPopular: [],
        PeliculasNuevas:[],
        PeliculasTop10:[]
    }
    async ObtenerPeliculasTOP10() {
        const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=466c19159235f9ce92fe9604a953aba2&language=es&page=1')
        let i= 0
        for(i=0 ; i<10; i++){
            this.state.PeliculasTop10.push(response["data"]["results"][i]);
        }
    }
    async ObtenerPeliculas () {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=466c19159235f9ce92fe9604a953aba2&language=es&page=1')
        let i= 0
        for(i=0 ; i<9; i++){
            this.state.PeliculasPopular.push(response["data"]["results"][i]);
        }
        console.log(this.state.PeliculasPopular)
        
    };
    render () {
        this.ObtenerPeliculas();
        return(
                <Container>
                    <Row>
                        <Col sm={8}>
                        <Nav defaultActiveKey="/home" as="ul" className='color2'>
                            <NavDropdown title="Dropdown" id="nav-dropdown">
                                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        </Col>
                        <Col sm={4}>sm=4</Col>
                     </Row>
                </Container>
            
        );
    }
}
export default PeliculasHandler;

