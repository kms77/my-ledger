import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import contactUsImage from '../../assets/images/contact_us.png';

const Contact = () => {

    const renderSimpleTextField = (control, label, value) => {
        return (
            <Form.Group as={Row} controlId={control}>
                <Form.Label column sm="5" className="d-flex align-items-center form-label-lg">{label}</Form.Label>
                <Col>
                    <Form.Control type="text" className="form-control-lg text-color-white" plaintext readOnly defaultValue={value} />
                </Col>
            </Form.Group>
        );
    }
    
    return (
        <Container>
            <Row className="my-5">
                <Col lg={6} className="contact-image-column">
                    <div className="d-flex justify-content-center align-items-center">
                        <img 
                            src={contactUsImage} 
                            href="Contact us image" 
                            className="contact-image" 
                            style={{width: "20vw", minWidth: "300px"}}
                            alt="contactUsImage"
                        />
                    </div>
                </Col>
                <Col lg={6} className="contact-details-column">
                    <div className="text-color-white px-4 my-4">
                        <h3>Contact</h3>
                        <Form id="contactFormID" className="my-4">
                            {renderSimpleTextField("emailID", "Email:", "email@email.com")}
                            {renderSimpleTextField("phoneID", "Telefon:", "0799999999")}
                            <Form.Group as={Row} controlId="addressID">
                                <Form.Label column sm="5" className="d-flex align-items-center">Adresă:</Form.Label>
                                <Col>
                                    <Form.Control as="textarea" rows={2} className="form-control-lg text-color-white" plaintext readOnly defaultValue="Cluj-Napoca, str. Mihail Kogălniceanu, nr. 1" />
                                </Col>
                            </Form.Group>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
