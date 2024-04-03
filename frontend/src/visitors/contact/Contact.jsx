import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const Contact = () => {

    const renderSimpleTextField = (control, label, value) => {
        return (
            <Form.Group as={Row} controlId={control} className="mb-2">
                <Form.Label column sm="5" className="d-flex">{label}</Form.Label>
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

                </Col>
                <Col lg={6} className="contact-details-column">
                    <div className="text-color-white px-4 my-4">
                        <h3>Contact</h3>
                        <Form id="contactFormID" className="my-4">
                            {renderSimpleTextField("addressID", "Adresă:", "Cluj-Napoca")}
                            {renderSimpleTextField("phoneID", "Telefon:", "0799999999")}
                            {renderSimpleTextField("emailID", "Email:", "email@email.com")}
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
