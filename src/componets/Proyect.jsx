import React ,{useEffect} from 'react'
import {Row,Col,Container} from 'react-bootstrap';
import AOS from 'aos';


import "./styles/SobreMi.css";
export function Proyect() {
  useEffect(() => {
		AOS.init();
		AOS.refresh(); 
	}, []);

  
  return (
      <div className='contacto back-color'> 
        <Container>
          <Row className="justify-content-md-center">
            <h1 className='text'  data-aos="fade-up"  data-aos-duration="700" data-aos-easing="ease"  data-aos-delay="300"> Proyectos</h1>
              <Col xs={6} md={4} className='text'  data-aos="fade-up"  data-aos-duration="700" data-aos-easing="ease"  data-aos-delay="400"  ><h1>Moviles</h1> 
              <Col>
                  <ul className='practicas_python'>
                    <li><h6>Working on that</h6></li>
                  </ul>
                </Col>
              </Col>
              <Col xs={6} md={4} className='text'   data-aos="fade-up"  data-aos-duration="700" data-aos-easing="ease"  data-aos-delay="400">
                <h1>Web</h1>
                <Col>
                  <ul className='practicas_python'>
                    <li><h6>Working on that</h6></li>
                  </ul>
                </Col>
              </Col>
              <Col xs={6} md={4} className='text'  data-aos="fade-up"  data-aos-duration="700" data-aos-easing="ease"  data-aos-delay="400" ><h1>Desktop</h1>
              <Col>
                  <ul className='practicas_python'>
                    <li><h6>Working on that</h6></li>
                  </ul>
                </Col>
              </Col>
              <Col xs={6} md={4} className='text'  data-aos="fade-up"  data-aos-duration="700" data-aos-easing="ease"  data-aos-delay="400">
                <h1>Code</h1>
                  <Col>
                      <ul className='practicas_python'>
                        <li><a href="https://github.com/RengifoVera/Practicas_Python/blob/main/el_viajero.py" target="_blank"> <h6>Problema Del Viajero</h6></a></li>
                        <li><a href="https://github.com/RengifoVera/Practicas_Python/blob/main/control_boletas.py" target="_blank"> <h6>Control Boletas</h6></a></li>
                        <li><a href="https://github.com/RengifoVera/Practicas_Python/blob/main/JuegoDados.py" target="_blank"><h6>Problema de los Dados Cargados</h6></a></li>
                        <li><a href="https://github.com/RengifoVera/Practicas_Python/blob/main/Tiro_moneda.py" target="_blank"><h6>Tiro Moneda</h6></a></li>
                        <li><a href="https://github.com/RengifoVera/Practicas_Python/tree/main/Taller%202" target="_blank" ><h6>Pruebas y Generadores </h6></a></li>
                      </ul>
                  </Col>
              </Col>
          </Row>
        </Container>
      </div>
  )
}
