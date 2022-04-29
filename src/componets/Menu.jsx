import React from "react";
import "../Styles/styles.css";
import {
  faDAndD,
  faGitAlt,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
export function Menu() {
  const dragon = (
    <FontAwesomeIcon className="icon-styles" style={{color:'#C20114'}}icon={faDAndD}></FontAwesomeIcon>
  );
  const git = (
    <FontAwesomeIcon className="icon-styles" icon={faGitAlt}></FontAwesomeIcon>
  );
  const linked = (
    <FontAwesomeIcon
      className="icon-styles"
      icon={faLinkedinIn}
    ></FontAwesomeIcon>
  );
  const twitter = (
    <FontAwesomeIcon className="icon-styles" icon={faTwitter}></FontAwesomeIcon>
  );
  const style = {backdropFilter:'blur(3px)',FontWeight: "200" };
  return (
    <> 
      <Navbar fixed="top"  expand="lg"  variant="dark" style={style} >
        <Container fluid className="text" >
          <Navbar.Brand href="#home">{dragon} JhonR</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="me-auto" >
              <Nav.Link href="#features">Inicio</Nav.Link>
              <Nav.Link href="#about">Sobre Mi</Nav.Link>
              <Nav.Link href="#features">Proyectos</Nav.Link>
              <Nav.Link href="#pricing">Contacto</Nav.Link>
            </Nav>
            <hr className="hr-text"/>
            <Nav>
              <div className="social-media">
                <li>
                  <Nav.Link href="#deets">{git}</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#deets">{twitter}</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#memes">{linked}</Nav.Link>
                </li>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );

}


 