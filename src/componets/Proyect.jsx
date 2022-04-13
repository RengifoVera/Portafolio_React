import React ,{useEffect} from 'react'
import {Row,Col,Container} from 'react-bootstrap';
import AOS from 'aos';
import pokedex from './img/pokedex.jpg'


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

                <Col md="auto" >                  
                   <h1  className='text' data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease"  data-aos-delay="400">Proyectos</h1>
                  <Row className='img-card'>
                    <Col xs={6} md={4}><img data-aos="fade-up" data-aos-duration="400" data-aos-easing="ease"  data-aos-delay="800" src={pokedex} alt="Pokedex" /> 
                      <span><h6>Pokedex <p>Es una enciclopedia electrónica portátilque los entrenadores Pokémon llevan consigo para registrar automáticamente las fichas de todas las diversas especies Pokémon vistas y capturadas durante su viaje como entrenadores.</p></h6> </span>
                      </Col>
                    <Col xs={6} md={4}><img data-aos="fade-up" data-aos-duration="400" data-aos-easing="ease"  data-aos-delay="800" src={pokedex} alt="Figma" /></Col>
                    <Col xs={6} md={4}><img data-aos="fade-up" data-aos-duration="400" data-aos-easing="ease"  data-aos-delay="800" src={pokedex} alt="Figma" /></Col>
                  </Row>
                </Col>
          </Row>
        </Container>
        
      </div>
  )
}
