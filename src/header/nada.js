<nav className="navbar navbar-expand-lg navbar-dark color3">
<a className="navbar-brand md" href="#">
<img src="https://media.discordapp.net/attachments/315005339613265923/689333380378001508/logito.png?width=475&height=475" width="125" height="125" alt=""/>
</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">

   
    <div className="nav-item input-group mb-3 form-inline my-3 mm md2">
        <input type="text" className="form-control" placeholder="Buscar" aria-label="Recipient's username" aria-describedby="button-addon2"/>
        <div className="input-group-append">
            <button className="btn btn-outline-success " type="button" id="button-addon2">Buscar</button>
        </div>
    </div>


<div className="palito"/>
<ul className="navbar-nav mr-auto">
<li className="nav-item active">

<button type="button" className="btn btn-outline-danger md">Iniciar sesion</button>
</li>

<li className="nav-item">
<button type="button" className="btn btn-warning">Registrate</button>
</li>
</ul>
</div>
</nav>







<Navbar className=" color3">
<Navbar.Brand href="#home">
    <img src="https://media.discordapp.net/attachments/315005339613265923/689333380378001508/logito.png?width=475&height=475" width="100" height="100" alt=""/>
</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav" >
<Nav className="mr-auto">

 <InputGroup className="mb-3">
    <FormControl
    placeholder="Buscar"
    aria-label="Recipient's username"
    aria-describedby="basic-addon2"
    />
 <InputGroup.Append>
    <Button variant="outline-success">Buscar</Button>
 </InputGroup.Append>
</InputGroup>
   <NavLink><NavItem inline><Button variant="warning" className="justify-content-end">Registrate</Button>{' '}</NavItem> </NavLink> 
   <NavLink><NavItem inline> <Button variant="outline-danger">Logeate</Button>{' '}</NavItem></NavLink> 
    
</Nav>

</Navbar.Collapse>
</Navbar>

  
<Navbar className=" color3">
<Navbar.Brand href="#home">
    <img src="https://media.discordapp.net/attachments/315005339613265923/689333380378001508/logito.png?width=475&height=475" width="100" height="100" alt=""/>
</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav" >
    <Nav className="mr-auto">
    <InputGroup size="md">
        <FormControl
        placeholder="Buscar"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
            <Button variant="outline-success">Buscar</Button>
        </InputGroup.Append>
    </InputGroup>
    </Nav>
    <Form inline><Button variant="warning" >Registrate</Button>{' '}</Form>  
    <Form inline> <Button variant="outline-danger">Logeate</Button>{' '}</Form>  
</Navbar.Collapse>
</Navbar>