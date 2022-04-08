import React from 'react';
import {Row,Col,Container} from 'react-bootstrap'
import './styles/footer.css';
export  function Footer() {
  return (
      <div className='footer'>
        <Container>
            <Row>
                <Col>
                    <ul>
                        <h5>Styles And Animations</h5>
                            <li><a href="https://michalsnik.github.io/aos/"> AOS js</a></li>
                            <li><a href="https://greensock.com/react/">GSAP</a></li>
                            <li><a href="https://react-bootstrap.github.io/">Boostrap React</a></li>

                    </ul>
                </Col>
                <Col>
                    <ul>
                        <h5>Fonts</h5>
                            <li><a href="https://fontsfree.net/sf-pro-display-regular-font-download.html">SF Pro Display </a></li>
                            <li><a href="https://fontsfree.net/sf-pro-display-regular-font-download.html">SF Pro Display Medium </a></li>
                            <li><a href="https://react-icons.github.io/react-icons/icons?name=fa">Font Awesome</a></li>
                    </ul>
                </Col>
                <Col>
                    <ul>
                        <h5>Framework</h5>
                        <li><a href="https://es.reactjs.org/">React</a></li>
                    </ul>
                </Col>
                
            </Row>
            
        </Container>
        <div className='info'> Desing and Develop By Jhon Rengifo </div>
    </div>
  );
}
