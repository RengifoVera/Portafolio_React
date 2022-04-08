import React ,{useEffect} from 'react'
import  './styles/Inicio.css'
import AOS from 'aos';
import "aos/dist/aos.css";
import { faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {Col , Row,Container} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Inicio() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const abajo = <FontAwesomeIcon icon={faAngleDown} />
  return (
    <div className='back-color'> 
      <Container >
          <Row className="justify-content-md-center text-wl" >
                <Col md="auto" className='texto'>                  
                  <h1 data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease"  data-aos-delay="400"> Hola.</h1>
                  <h2 id="#sub" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease"  data-aos-delay="400">Mi Nombre es Jhon Rengifo y esto es lo que hago.</h2>
                  <a  data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease"  data-aos-delay="400" href="#sobreMi"><h5>Descubre mas.</h5>{abajo}</a>    
                </Col>
          </Row>
        </Container>
    </div>
  )
};
