import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const MainNavbar = () => (
  <Navbar>
    <Container>
      <Navbar.Brand>School Logo</Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link href="#">Admission</Nav.Link>
        <Nav.Link href="#">School</Nav.Link>
        <Nav.Link href="#">About</Nav.Link>
        <Nav.Link href="#">Contact</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default MainNavbar;
