import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Stack,Image, Row, Col, Form} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import calculatorImage from '../../assets/images/calculator.png';
import facturaImage from '../../assets/images/factura.png';

const AccountingMenu = () => {

  return (
    <div className="container about-container mb-5">
      <h1 className="display-4 my-4" >Meniu contabilitate</h1>
      <Row>
        <Col>
        <div className="d-flex justify-content-center">
        <Card title="Acceseaza calculatorul de taxe" className="card mx-4 mb-4 mt-2">
          <a href="/calculator" class="card-link">
            <Card.Header className="d-flex justify-content-center align-items-center card-header">
              <Card.Img variant="top" src={calculatorImage} className="card-image"/>
              </Card.Header>
              
              <Card.Body className="card-body">
                <Card.Title>Calculator taxe</Card.Title>
                <Card.Text>
                  Calculează venitul net după plătirea taxelor la PFA.
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
        </div>

        </Col>
        <Col>
        <div className="d-flex justify-content-center">
        <Card title="Accesează facturile tale" className="card mx-4 mb-4 mt-2">
          <a href="/facturi" class="card-link">
            <Card.Header className="d-flex justify-content-center align-items-center card-header">
              <Card.Img variant="top" src={facturaImage} className="card-image"/>
              </Card.Header>
              
              <Card.Body className="card-body">
                <Card.Title>Gestionare facturi</Card.Title>
                <Card.Text>
                  Organizează facturi și vezi total cheltuieli
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
        </div>
        </Col>
    </Row>
    </div>
  );
};

export default AccountingMenu;
