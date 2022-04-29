import React from "react";
import "../Styles/styles.css";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "react-bootstrap";
import python from "../images/python.svg";
import javascript from "../images/javascript.svg";
import django from "../images/django.svg";
import react from "../images/react.svg";
import postgres from "../images/postgresql.svg";
import html from "../images/html.svg";
import css from "../images/css.svg";

export function Sites() {
  const angle = <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>;

  
  return (
    <>
      <div className="content-home text">
        <div className="home">
          <h1 id="title">Hola</h1> <br />
          <h4 id="subtitle">
            Mi nombre es Jhon Rengifo y esto es lo que hago.
          </h4>
          <h5 id="arrow">
            <a href="#about">{angle}</a>
          </h5>
        </div>
      </div>

      <section id="about" className="content-home text">
        <div className="section-about text">
          <h1>About Me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eius
            dolores, exercitationem suscipit architecto perferendis modi sint
            odit, omnis quisquam fugit. Tenetur corporis porro aliquam minus
            quod culpa doloribus qui? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Dolor sapiente nisi explicabo vero animi illo
            minima laborum mollitia quam quaerat. Non aperiam deleniti alias?
            Saepe, atque? Labore obcaecati modi eos? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Praesentium quae assumenda autem, sint
            adipisci hic harum minima at voluptas porro. Illo architecto unde
            aperiam similique! Enim perspiciatis possimus pariatur a?
          </p>
        </div>
        <Container>
          <Row>
            <Col>
                <div className="talent">
                  <h1>My Talent</h1>
                  <ul className="ul1">
                    <li>
                      <img src={python} alt="Python" />
                    </li>
                    <li>
                      <img src={javascript} alt="Javascript" />
                    </li>
                    <li>
                      <img src={django} alt="Django" />
                    </li>
                    <li>
                      <img src={react} alt="React" />
                    </li>
                    <li>
                      <img src={css} alt="Css" />
                    </li>
                    <li>
                      <img src={postgres} alt="React" />
                    </li>
                    <li>
                      <img src={html} alt="React" />
                    </li>
                  </ul>
                </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section className="section-proyects text">
        <h1>Proyects</h1>
        <Container>
          <Row>
            <Col>
              <div className="card-1 cards-colors">
                <div className="card-title">
                  <h6>TARJETA 1</h6>
                </div>
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, modi. Dolore id labore facere similique. Officia ex fugit sed quos? Labore impedit sed fuga possimus eum quisquam sint modi architecto.</p>
                </div>
                <div className="card-footer">
                  <h6>footer</h6>
                </div>
              </div>
            </Col>
          </Row>
          
        </Container>
      </section>
    </>
  );

}