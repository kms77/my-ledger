import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Stack, Row, Col } from "react-bootstrap";
import securityImage from "../../assets/images/security.png";
import assistanceImage from "../../assets/images/assistance.png";
import simplicityImage from "../../assets/images/simplicity.png";
import accessibilityImage from "../../assets/images/accesiblity.png";
import aboutImage from "../../assets/images/about.png";

const AboutV = () => {
  return (
    <div className="container about-container">
      <Col lg={12} className="contact-image-column">
        <div className="d-flex justify-content-center align-items-center">
          <img
            src={aboutImage}
            href="Contact us image"
            className="contact-image"
            style={{ width: "20vw", minWidth: "60vh" }}
            alt="assistanceImage"
          />
        </div>
      </Col>
      <Stack direction="horizontal" gap={3}>
        <h1 className="display-4 mb-4 ">Despre Noi</h1>
      </Stack>
      <Stack className="styled-stack-blue">
        <p className="lead">
          Înțelegem provocările pe care le întâmpinați în gestionarea afacerii
          dvs. ca PFA (Persoană Fizică Autorizată) în România. Aplicația noastră
          de gestionare PFA este concepută pentru a vă simplifica viața și a vă
          ajuta să vă concentrați pe ceea ce contează cel mai mult -
          administrarea afacerii dvs.
        </p>
      </Stack>
      <Stack className="styled-stack-white">
        <h2 className="display-4 mb-4 ">Misiunea Noastră</h2>
        <p className="lead">
          Misiunea noastră este de a oferi PFA-urilor instrumentele și resursele
          de care au nevoie pentru a prospera pe piața competitivă de astăzi.
          Credem că fiecare antreprenor merită șansa de a reuși și suntem
          angajați să ajutăm PFA-urile să își atingă întregul potențial.
        </p>
      </Stack>
      <Stack className="styled-stack-blue">
        <h2 className="display-4 mb-4 ">Valorile Noastre</h2>
        <br></br>
        <ul
          className="list-group list-group-flush lead text-center"
          id="special-list"
        >
          <li className="list-group-item" id="about-page-item">
            <Row className="my-5">
              <Col lg={6} className="contact-image-column">
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src={simplicityImage}
                    href="Contact us image"
                    className="contact-image"
                    style={{ width: "20vw", minWidth: "300px" }}
                    alt="simplicityImage"
                  />
                </div>
              </Col>
              <Col lg={6} className="about-details-column">
                <i className="fas fa-check-circle me-2 text-primary"></i>{" "}
                Simplitate: Credem că aplicația noastră ar trebui să fie ușor de
                utilizat și înțeles de către toate PFA-urile, indiferent de
                expertiza lor tehnică.
              </Col>
            </Row>
          </li>
          <li className="list-group-item" id="about-page-item">
            <Row className="my-5">
              <Col lg={6} className="about-details-column">
                <i className="fas fa-lock me-2 text-success"></i> Securitate:
                Luăm foarte în serios securitatea datelor și folosim cele mai
                recente tehnologii pentru a vă proteja informațiile.
              </Col>
              <Col lg={6} className="contact-details-column">
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src={securityImage}
                    href="Contact us image"
                    className="contact-image"
                    style={{ width: "20vw", minWidth: "300px" }}
                    alt="securityImage"
                  />
                </div>
              </Col>
            </Row>
          </li>
          <li className="list-group-item" id="about-page-item">
            <Row className="my-5">
              <Col lg={6} className="contact-image-column">
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src={accessibilityImage}
                    href="Contact us image"
                    className="contact-image"
                    style={{ width: "20vw", minWidth: "300px" }}
                    alt="accesibilityImage"
                  />
                </div>
              </Col>
              <Col lg={6} className="about-details-column">
                <i className="fas fa-headset me-2 text-info"></i>
                Accesibilitate: Credem că aplicația noastră ar trebui să fie
                accesibilă pentru toate PFA-urile, indi ferent de bugetul lor.
              </Col>
            </Row>
          </li>
          <li className="list-group-item" id="about-page-item">
            <Row className="my-5">
              <Col lg={6} className="about-details-column">
                <i className="fas fa-headset me-2 text-info"></i> Asistență: Ne
                angajăm să oferim clienților noștri o asistență excelentă.
                Echipa noastră este întotdeauna aici pentru a vă ajuta cu orice
                întrebări pe care le-ați putea avea.
              </Col>
              <Col lg={6} className="contact-image-column">
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src={assistanceImage}
                    href="Contact us image"
                    className="contact-image"
                    style={{ width: "20vw", minWidth: "300px" }}
                    alt="assistanceImage"
                  />
                </div>
              </Col>
            </Row>
          </li>
        </ul>
      </Stack>
      <p className="lead">
        Suntem încrezători că aplicația noastră de gestionare PFA vă poate ajuta
        să reduceti timpul, banii și stresul asociat gestionarii unei persoane
        juridice. Înregistrați-vă pentru o încercare gratuită astăzi și vedeți
        cum vă putem ajuta să duceți afacerea dvs. la următorul nivel!
      </p>
      <br /><br />
    </div>
  );
};

export default AboutV;
