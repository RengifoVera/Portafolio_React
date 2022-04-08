import React from 'react'
import './styles/Menu.css'
import {faLinkedin,faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDragon} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Navbar , Container,Nav} from 'react-bootstrap'



export  function Menu() {

  const logo = <FontAwesomeIcon icon={faDragon} />

  const link = <FontAwesomeIcon icon={faLinkedin} />
  const git = <FontAwesomeIcon icon={faGithub} />


  return (
      <> 
           <Navbar collapseOnSelect expand="lg"  className='color-menu'>
            <Container>
            <Navbar.Brand className='titulos' href="#home">{logo} Jhon Rengifo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto titulos" variant="light" >
                  <Nav.Link href="#sobreMi">  Sobre Mi</Nav.Link>
                  <Nav.Link href="#proyectos">  Proyectos</Nav.Link>
                  <Nav.Link href='#contacto'>Contacto</Nav.Link>
              </Nav>
              <Nav className='titulos left'>
                <Nav.Link href="https://www.linkedin.com/in/jhon-rengifo-722273217/" target="_blank">{link} Linkedin</Nav.Link>
                <Nav.Link href="https://github.com/RengifoVera" target="_blank">{git} Github</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
      </>
  );
}

