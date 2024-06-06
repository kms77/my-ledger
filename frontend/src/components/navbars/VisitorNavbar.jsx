import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const VisitorNavbar = () => {
    return (
        <Navbar expand="sm" className="visitor-navbar py-4">
            <Container>
                <Navbar.Brand href="/home">My Ledger</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="col d-flex justify-content-start">
                        <Nav.Link eventKey={1} href="/about" className="mx-3">Despre noi</Nav.Link>
                        <Nav.Link eventKey={2} href="/contabil" id="basic-nav-dropdown" className="mx-3">Contabil</Nav.Link>
                        <Nav.Link eventKey={3} href="/contact" className="mx-3">Contact</Nav.Link>
                    </Nav> 
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default VisitorNavbar;