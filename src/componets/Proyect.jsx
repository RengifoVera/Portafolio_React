import React ,{useEffect} from 'react'
import {Row,Col,Container} from 'react-bootstrap';
import AOS from 'aos';
import pokedex from './img/pokedex.png'


import "./styles/SobreMi.css";
export function Proyect() {
  useEffect(() => {
		AOS.init();
		AOS.refresh(); 
	}, []);

  
  return (
      <div className='back-color'> 
        <Container>
          <Row className="justify-content-md-center">
            
          <h1 data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease" className='text' data-aos-delay="1000">Proyectos</h1>
                <Col md="auto" className='text img-card'>                  
                  <Row>
                    <Col xs={6} md={4}><img data-aos="fade-up" data-aos-duration="400" data-aos-easing="ease"  data-aos-delay="700" src={pokedex} alt="PhotoShop" /></Col>
                    <Col xs={6} md={4}><img data-aos="fade-up" data-aos-duration="400" data-aos-easing="ease"  data-aos-delay="800" src={pokedex} alt="Figma" /></Col>
                    <Col xs={6} md={4}><img data-aos="fade-up" data-aos-duration="400" data-aos-easing="ease"  data-aos-delay="800" src={pokedex} alt="Figma" /></Col>
                  </Row>
                </Col>
          </Row>
        </Container>
      </div>
  )
}
