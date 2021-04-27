import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from './resources/logo.png';
import githubLogo from './resources/GitHub-Mark-Light-32px.png';
import {LinkContainer} from 'react-router-bootstrap';
import style from './result.module.css'



const header = () => {
    
    return(
    <Navbar style={{fontSize: 20,color: "grey"}} className={style.navBar}  variant="dark" >
    <Nav className="ml-auto">
    <LinkContainer to="/"> 
      <Nav.Link >ראשי</Nav.Link>
    </LinkContainer> 
    <LinkContainer to="/AboutTheProject"> 
      <Nav.Link >איך זה עובד</Nav.Link>
    </LinkContainer>   
    </Nav>
    
    <LinkContainer to="/">
      <Navbar.Brand className="me-auto">
        <img style={{marginBottom: 5}} src={logo}/>
      </Navbar.Brand>
    </LinkContainer>


    <Nav className="mr-auto">
    <LinkContainer to="/AboutUs"> 
      <Nav.Link >מי אנחנו</Nav.Link>
    </LinkContainer>
    <Nav.Link class="fa fa-search" href="https://github.com/SagKun/EihHamargash" icon={githubLogo} > גיטהאב</Nav.Link>
    <img style={{width: 32, height:32,marginTop:6}} src={githubLogo}/>
   
    </Nav>
  </Navbar>
  ) 
    
  }

export default header;