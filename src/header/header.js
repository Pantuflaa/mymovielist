import React ,{ Component } from 'react';

import '../App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {NavDropdown, NavItem, NavLink} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'



class Header extends Component {
    constructor (props){
        super(props)
        this.state={
            valor:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.buscar = this.buscar.bind(this);

    }
    async buscar (event){
        const axios = require('axios');
        let string=""
        let nombre=this.state.valor.split(" ")
        let newName=""
        if(nombre.length> 1){
            nombre.forEach(element => {
                newName= newName + element + '+'
            });
            newName = newName.substring(0, newName.length - 1);
        }
        else{
            newName=nombre
        }
        const response = await axios.get('https://api.themoviedb.org/3/search/movie?api_key=466c19159235f9ce92fe9604a953aba2&query='+newName)
        console.log("response")
        console.log(response)
        if(response.data.results.length != 0){
            if(response.data.results[0].id!=undefined){
                window.location.href="http://localhost:3000/"+response.data.results[0].id
            }
        }
        else{
            alert("Movie not found");
        }
        
        
       
    }
    handleChange (event) {
        this.setState({valor: event.target.value})
    }
    render (){
    return ( 
   
        <Navbar className=" color3" expand="lg">
        <Navbar.Brand href="/">
            <img src="https://media.discordapp.net/attachments/315005339613265923/689333380378001508/logito.png?width=475&height=475" width="100" height="100" alt=""/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className=" mr-auto ml-auto">
                <InputGroup className="mb-0">
                    <FormControl
                    placeholder=""
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={this.handleChange}
                    
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={this.buscar}>Buscar</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Nav>
            <Form inline><Button variant="warning" className="md" disabled>Registrate</Button>{' '}</Form>  
            <Form inline> <Button variant="outline-danger" disabled>Logeate</Button>{' '}</Form>  
        </Navbar.Collapse>
        </Navbar>
    );
    }
}
export default Header;