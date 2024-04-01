import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const VisitorNavbar = () => {
    return (
        <Navbar bg="secondary" expand="sm">
            <Container>
                <Navbar.Brand href="#">My Ledger</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="col d-flex justify-content-start">
                        <Nav.Link eventKey={1} href="#" className="mx-3">Despre noi</Nav.Link>
                        <NavDropdown eventKey={2} title="Funcționalități" id="basic-nav-dropdown" className="mx-3">
                            <NavDropdown.Item eventKey={2.1} href="#">Action</NavDropdown.Item>
                            <NavDropdown.Item eventKey={2.2} href="#">Another action</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link eventKey={3} href="#" className="mx-3">Contact</Nav.Link>
                    </Nav> 
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default VisitorNavbar;