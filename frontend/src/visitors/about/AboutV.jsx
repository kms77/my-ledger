import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Stack } from "react-bootstrap";
import securityImage from '../../assets/images/security.jpg';

const AboutV = () => {
  return (
    <div className="container about-container">
      <img id="about-title-img" src={securityImage} alt="securityImage"/>
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
        <ul className="list-group list-group-flush lead text-center" id="special-list">
          <li className="list-group-item" id="about-page-item">
            <i className="fas fa-check-circle me-2 text-primary"></i>{" "}
            Simplitate: Credem că aplicația noastră ar trebui să fie ușor de
            utilizat și înțeles de către toate PFA-urile, indiferent de
            expertiza lor tehnică.
          </li>
          <li className="list-group-item" id="about-page-item">
            <i className="fas fa-lock me-2 text-success"></i> Securitate: Luăm
            foarte în serios securitatea datelor și folosim cele mai recente
            tehnologii pentru a vă proteja informațiile.
          </li>
          <li className="list-group-item" id="about-page-item">
            <i className="fas fa-dollar-sign me-2 text-warning"></i>{" "}
            Accesibilitate: Credem că aplicația noastră ar trebui să fie
            accesibilă pentru toate PFA-urile, indiferent de bugetul lor.
          </li>
          <li className="list-group-item" id="about-page-item">
            <i className="fas fa-headset me-2 text-info"></i> Asistență: Ne
            angajăm să oferim clienților noștri o asistență excelentă. Echipa
            noastră este întotdeauna aici pentru a vă ajuta cu orice întrebări
            pe care le-ați putea avea.
          </li>
        </ul>
      </Stack>
      <p>
        Suntem încrezători că aplicația noastră de gestionare PFA vă poate ajuta
        să reduceti timpul, banii și stresul asociat gestionarii unei persoane
        juridice. Înregistrați-vă pentru o încercare gratuită astăzi și vedeți
        cum vă putem ajuta să duceți afacerea dvs. la următorul nivel!
      </p>
    </div>
  );
};

export default AboutV;
