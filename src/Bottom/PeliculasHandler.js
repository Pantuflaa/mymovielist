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
import Top10 from './top10.js';


const axios = require('axios');
class PeliculasHandler extends Component {
    state = {
        PeliculasPopular: ["a","a","a","a","a","a","a","a","a","a"],
        PeliculasTop10:["a","a","a","a","a","a","a","a","a","a"]
    }
    async componentDidMount() {
        const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=466c19159235f9ce92fe9604a953aba2&language=es&page=1')
        let i= 0
        let aux= []
        for(i=0 ; i<10; i++){
           aux.push(response["data"]["results"][i]);
        }
        this.setState({PeliculasTop10:aux})
        const response2 = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=466c19159235f9ce92fe9604a953aba2&language=es&page=1')
        let i2= 0
        let aux2 = []
        for(i2=0 ; i2<9; i2++){
            aux2.push(response2["data"]["results"][i2]);
        }
        this.setState({PeliculasPopular:aux2})
        console.log(this.state.PeliculasPopular)
    }
    render () {
        return(
                <Container >
                    <Row >
                        <Col sm={8} className="color3">
                        <Nav defaultActiveKey="/home" as="ul" className='color3'>
                            <NavDropdown title="Dropdown" id="nav-dropdown">
                                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <CardColumns>
                        {this.state.PeliculasPopular.map(
                            ( pelicula ) => <Pelicula objetito = {pelicula} />
                        )}
                        </CardColumns>
                        </Col>
                        <Col sm={4}>
                        <Nav defaultActiveKey="/home" as="ul" className='color2'>  
                        <span className="dorado center">Top Rated Movies</span>
                        </Nav> 
                        {
                        this.state.PeliculasTop10.map(
                            ( elem ) => <Top10 objetazo = {elem} />
                        )}
                        
                        </Col>
                     </Row>
                </Container>
            
        );
    }
}
export default PeliculasHandler;

