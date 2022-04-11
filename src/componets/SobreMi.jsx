import React, { useEffect} from "react";
import AOS from 'aos';
import CV from './docs/CV.pdf'
import "aos/dist/aos.css";
import "./styles/SobreMi.css";
import "bootstrap/dist/css/bootstrap.css";
import { Row,Col,Container,Button} from 'react-bootstrap';
import ds from './img/3ds.svg';
import bash from './img/bash.svg'
import boot from './img/bootstrap.svg';
import css from './img/css.svg';
import git from './img/git.svg';
import html from './img/html.svg';
import js from './img/js.svg';
import py from './img/python.svg';
import ptsql from './img/postgresql.svg';
import reac from './img/react.svg'
import photo from './img/photoshop.svg'
import figma from './img/figma.svg'

export function SobreMi() {
  useEffect(() => {
    AOS.init();
    AOS.refresh(); 
  }, []);
    
  return (
    <div>
        <Container>
          <Row className="justify-content-md-center">

                <Col md="auto" className='text'>                  
                   <h1 data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease"  data-aos-delay="400"> Sobre Mi</h1>
                  <p data-aos="fade-up" data-aos-duration="300" data-aos-easing="ease"  data-aos-delay="600"> Desarrollador Frontend junior pero mis ganas de aprender y hacer bien mi trabajo son cosas que me motivan cada día para ser mejor y amar lo que hago. <br />Mis conocimientos de programación y desarrollo todavía son limitadas pero mi ambicion de aprender y superarme cada dias son mas grandes</p>
                  <Button data-aos="fade-up" data-aos-duration="300" data-aos-easing="ease"  data-aos-delay="800" href={CV} target="_blank" rel="noopener noreferrer" download="CV-JhonRengifo.pdf" variant="outline-dark"
  
                  >Descargar CV</Button>

                  <h2 data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease"  data-aos-delay="1000">Habilidades</h2>
                  <Row>
                    <h3 data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease"  data-aos-delay="300">Programacion</h3>
                      <Col xs={6} md={4}><img data-hint="Bash" data-aos="fade-up" data-aos-duration="400" data-aos-easing="ease"  data-aos-delay="400"  src={bash} alt="Bash" /> </Col>
                      <Col xs={6} md={4}><img data-aos="fade-up" data-aos-duration="400" data-aos-easing="ease"  data-aos-delay="500" src={js} alt="Javascript" /></Col>
                      <Col xs={6} md={4}><img data-aos="fade-up" data-aos-duration="400" data-aos-easing="ease"  data-aos-delay="600" src={py} alt="Python" /></Col>
                      <Col xs={6} md={4}><img data-aos="fade-up" data-aos-duration="400" data-aos-easing="ease"  data-aos-delay="700" src={ptsql} alt="Postgresql" /></Col>
                      <Col xs={6} md={4}><img data-aos="fade-up" data-aos-duration="400" data-aos-easing="ease"  data-aos-delay="800" src={reac} alt="React" /></Col>
                      <Col xs={6} md={4}><img data-aos="fade-up" data-aos-duration="400" data-aos-easing="ease"  data-aos-delay="900" src={git} alt="Git" /></Col>
                      <Col xs={6} md={4}><img data-aos="fade-up" data-aos-duration="400" data-aos-easing="ease"  data-aos-delay="1000" src={html} alt="HTML" /></Col>
                    <h3 data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease"  data-aos-delay="300" >Diseño</h3>
                      <Col xs={6} md={4}><img data-aos="fade-up" data-aos-duration="400" data-aos-easing="ease"  data-aos-delay="400" src={ds} alt="3ds Max" /></Col>
                      <Col xs={6} md={4}><img data-aos="fade-up" data-aos-duration="400" data-aos-easing="ease"  data-aos-delay="500" src={boot} alt="Bootstrap" /></Col>
                      <Col xs={6} md={4}><img data-aos="fade-up" data-aos-duration="400" data-aos-easing="ease"  data-aos-delay="600" src={css} alt="CSS" /></Col>
                      <Col xs={6} md={4}><img data-aos="fade-up" data-aos-duration="400" data-aos-easing="ease"  data-aos-delay="700" src={photo} alt="PhotoShop" /></Col>
                      <Col xs={6} md={4}><img data-aos="fade-up" data-aos-duration="400" data-aos-easing="ease"  data-aos-delay="800" src={figma} alt="Figma" /></Col>

                  </Row>
                </Col>
          </Row>
        </Container>
    </div>
  );
}
