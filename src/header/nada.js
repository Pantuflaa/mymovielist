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







(
    <div>
        <Container fluid>
            <Row className = "color2">
                <Col className = "text">
                    <span className = "title">{this.state.estandar.data.title} </span><span className = "year">({this.state.estandar.data.release_date.split("-")[0]})</span>
                </Col>
                <Col>    
                    <img
                        id = "star"
                        height = "50px"
                        width = "50px"
                        className="mr-3"
                        src="https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png"
                        alt="Generic placeholder"
                    />                         
                </Col>
                <Col>
                    <span className = "rate">{this.state.estandar.data.vote_average}/10</span>
                    <br></br>
                    <span className = "cont">{this.state.estandar.data.vote_count}</span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img
                        id = "movie"
                        className="mr-3"
                        src={"https://image.tmdb.org/t/p/w500/"+this.state.estandar.data.poster_path}
                        alt="Generic placeholder"
                    />
                </Col>
                <Col>
                    <Row>
                        <Media.Body className = "text">
                            <p className = "color3" id = "rcorners1" >
                                {this.state.estandar.data.overview}           
                            </p>
                                <p align = "left"> 
                                    <strong> Director: </strong> 
                                    {this.state.directore.map(
                                         (director) => director.name+" "
                                    )}
                                     <br /> 
                                    <strong> Writers: </strong> 
                                    {this.state.escritore.map(
                                         (escritor) => escritor.name+" "
                                    )}
                                     <br /> 
                                    <strong> Stars: </strong> 
                                    {this.state.actore.map(
                                         (actor) => actor.name+" "
                                    )}
                                     <br /> 
                                </p>
                        </Media.Body>
                    </Row>
                    <Row>
                        <Col>
                            <video id = "video" width="400" controls>
                                <source src="https://www.youtube.com/watch?v=rZD6nMlC3tE" type="video/ogg"/>
                                Your browser does not support HTML5 video.
                            </video>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                
            </Row>
        </Container>
    </div>
)

(
    <div>
        <Container fluid>
            <Row className = "color2">
                <Col className = "text">
                    <span className = "title">{this.state.estandar[0].title} </span><span className = "year">({this.state.estandar[0]["release_date"].split("-")[0]})</span>
                </Col>
                <Col>    
                    <img
                        id = "star"
                        height = "50px"
                        width = "50px"
                        className="mr-3"
                        src="https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png"
                        alt="Generic placeholder"
                    />                         
                </Col>
                <Col>
                    <span className = "rate">{this.state.estandar[0].vote_average}/10</span>
                    <br></br>
                    <span className = "cont">{this.state.estandar[0].vote_count}</span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img
                        id = "movie"
                        className="mr-3"
                        src={"https://image.tmdb.org/t/p/w500/"+this.state.estandar[0].poster_path}
                        alt="Generic placeholder"
                    />
                </Col>
                <Col>
                    <Row>
                        <Media.Body className = "text">
                            <p className = "color3" id = "rcorners1" >
                                {this.state.estandar[0].overview}           
                            </p>
                                <p align = "left"> 
                                    <strong> Director: </strong> 
                                    {this.state.directore.map(
                                         (director) => director.name+" "
                                    )}
                                     <br /> 
                                    <strong> Writers: </strong> 
                                    {this.state.escritore.map(
                                         (escritor) => escritor.name+" "
                                    )}
                                     <br /> 
                                    <strong> Stars: </strong> 
                                    {this.state.actore.map(
                                         (actor) => actor.name+" "
                                    )}
                                     <br /> 
                                </p>
                        </Media.Body>
                    </Row>
                    <Row>
                        <Col>
                            <video id = "video" width="400" controls>
                                <source src="https://www.youtube.com/watch?v=rZD6nMlC3tE" type="video/ogg"/>
                                Your browser does not support HTML5 video.
                            </video>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                
            </Row>
        </Container>
    </div>
);


<InputGroup size="md">
<FormControl
placeholder="Buscar"

aria-describedby="basic-addon2"
maxLength={255}
onChange={this.handleChange}
value= {this.state.valor}

/>
<InputGroup.Append>
    <Button variant="outline-success" onClick={this.buscar}>Buscar</Button>
</InputGroup.Append>
</InputGroup>