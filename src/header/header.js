import React from 'react';

import '../App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {NavDropdown, NavItem, NavLink} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'



const Header = () =>{
    return ( 
   
        <Navbar className=" color3" expand="lg">
        <Navbar.Brand href="/">
            <img src="https://media.discordapp.net/attachments/315005339613265923/689333380378001508/logito.png?width=475&height=475" width="100" height="100" alt=""/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className=" mr-auto ml-auto">
            <Nav.Link>
            <InputGroup size="md">
                <FormControl
                placeholder="Buscar"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                maxLength={255}
                />
                <InputGroup.Append>
                    <Button variant="outline-success">Buscar</Button>
                </InputGroup.Append>
            </InputGroup>
            </Nav.Link>
            </Nav>
            <Form inline><Button variant="warning" className="md">Registrate</Button>{' '}</Form>  
            <Form inline> <Button variant="outline-danger">Logeate</Button>{' '}</Form>  
        </Navbar.Collapse>
        </Navbar>
    );
}
export default Header;