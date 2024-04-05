import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Stack,Image} from 'react-bootstrap';


const AboutV = () => {

    return(
      <div className="container about-container">
      <Stack direction="horizontal" gap={3}>
        
        <h1 className="display-4 mb-4 ">Despre Noi</h1>
      </Stack>
      <Stack backgroundColor="">
        <p className="lead">
          Înțelegem provocările pe care le întâmpinați în gestionarea afacerii dvs. ca PFA (Persoană Fizică Autorizată) în România. 
          Aplicația noastră de gestionare PFA este concepută pentru a vă simplifica viața și a vă ajuta să vă concentrați pe ceea ce contează cel mai mult - 
          administrarea afacerii dvs.
        </p>
      </Stack>
      <p className="text-muted">
        Echipa noastră este formată din profesioniști experimentați cu o înțelegere profundă a reglementărilor comerciale din România 
        și a nevoilor specifice ale PFA-urilor. Suntem pasionați de crearea de soluții inovatoare care îi stimulează pe antreprenori să aibă succes.
      </p>
      <h2>Misiunea Noastră</h2>
      <p>
        Misiunea noastră este de a oferi PFA-urilor instrumentele și resursele de care au nevoie pentru a prospera pe piața competitivă de astăzi. 
        Credem că fiecare antreprenor merită șansa de a reuși și suntem angajați să ajutăm PFA-urile să își atingă întregul potențial.
      </p>
      <h2>Valorile Noastre</h2>
      <Stack backgroundColor="lightblue">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <i className="fas fa-check-circle me-2 text-primary"></i> Simplitate: Credem că aplicația noastră ar trebui să fie ușor de utilizat și înțeles de către toate PFA-urile, indiferent de expertiza lor tehnică.
          </li>
          <li className="list-group-item">
            <i className="fas fa-lock me-2 text-success"></i> Securitate: Luăm foarte în serios securitatea datelor și folosim cele mai recente tehnologii pentru a vă proteja informațiile.
          </li>
          <li className="list-group-item">
            <i className="fas fa-dollar-sign me-2 text-warning"></i> Accesibilitate: Credem că aplicația noastră ar trebui să fie accesibilă pentru toate PFA-urile, indiferent de bugetul lor.
          </li>
          <li className="list-group-item">
            <i className="fas fa-headset me-2 text-info"></i> Asistență: Ne angajăm să oferim clienților noștri o asistență excelentă. Echipa noastră este întotdeauna aici pentru a vă ajuta cu orice întrebări pe care le-ați putea avea.
          </li>
        </ul>
      </Stack>
      <p>
        Suntem încrezători că aplicația noastră de gestionare PFA vă poate ajuta să reduceti timpul, banii și stresul asociat gestionarii unei persoane juridice. 
        Înregistrați-vă pentru o încercare gratuită astăzi și vedeți cum vă putem ajuta să duceți afacerea dvs. la următorul nivel!
      </p>
    </div>
    ); 
};

export default AboutV;