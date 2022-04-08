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
                  <p data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease"  data-aos-delay="600">Soy Desarrollador Frontend junior pero mis ganas de aprender y hacer bien mi trabajo son cosas que me motivan cada día para ser mejor y amar lo que hago. <br />Mis conocimientos de programación y desarrollo todavía son limitadas, pero cada día aprendo e investigo sobre las tecnologías más utilizadas y mis ganas de aprender son mayores cada día.</p>
                  <Button data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease"  data-aos-delay="800" href={CV} target="_blank" rel="noopener noreferrer" download="CV-JhonRengifo.pdf">Descargar CV</Button>

                  <h2 data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease"  data-aos-delay="1000">Habilidades</h2>
                  <Row>
                    <h3 data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease"  data-aos-delay="1100">Programacion</h3>
                      <Col sm><img data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease"  data-aos-delay="400" src={bash} alt="Bash" /> </Col>
                      <Col sm><img data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease"  data-aos-delay="600" src={js} alt="Javascript" /></Col>
                      <Col sm><img data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease"  data-aos-delay="800" src={py} alt="Python" /></Col>
                      <Col sm><img data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease"  data-aos-delay="1000" src={ptsql} alt="Postgresql" /></Col>
                      <Col sm><img data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease"  data-aos-delay="1200" src={reac} alt="React" /></Col>
                      <Col sm><img data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease"  data-aos-delay="1400" src={git} alt="Git" /></Col>
                      <Col sm><img data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease"  data-aos-delay="1600" src={html} alt="HTML" /></Col>
                    <h3 data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease"  data-aos-delay="1000" >Diseño</h3>
                      <Col sm><img data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease"  data-aos-delay="400" src={ds} alt="3ds Max" /></Col>
                      <Col sm><img data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease"  data-aos-delay="600" src={boot} alt="Bootstrap" /></Col>
                      <Col sm><img data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease"  data-aos-delay="800" src={css} alt="CSS" /></Col>
                      <Col sm><img data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease"  data-aos-delay="1000" src={photo} alt="PhotoShop" /></Col>
                      <Col sm><img data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease"  data-aos-delay="1200" src={figma} alt="Figma" /></Col>

                  </Row>
                </Col>
          </Row>
        </Container>
    </div>
  );
}
