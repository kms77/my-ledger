import React from 'react';
import { Row, Col } from "react-bootstrap";

const VisitorFooter = () => {
    return (
        <Row>
            <Col>
                <footer className="py-3 border-top">
                        <div className="ps-5">
                            <p className="text-muted m-1">@ 2024 My Ledger</p>
                            <p className="text-muted m-1">Email: email@email.com</p>
                            <p className="text-muted m-1">Telefon: 0799999999</p>
                        </div>
                </footer>
            </Col>
        </Row>
    );
};

export default VisitorFooter;