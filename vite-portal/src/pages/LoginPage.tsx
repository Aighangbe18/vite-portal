import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "../App.css";
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";
import backgroundImg from "../assets/navbar.png";
import logoImg from "../assets/CHS-Logo.png";

const LoginPage = () => {
  return (
    <>
      {/* Top Navbar */}
      <Navbar style={{ backgroundColor: "#000000" }} variant="dark">
        <Container className="d-flex justify-content-between">
          <span className="text-white">
            Admissions are ongoing. Register your kids for the exam.
          </span>
          <span className="text-white d-flex align-items-center">
            portal &nbsp;|&nbsp;
            <Button variant="outline-light" size="sm" className="ms-2">
              Register
            </Button>
          </span>
        </Container>
      </Navbar>

      {/* Spacer between navbars */}
      <div style={{ height: "10px" }}></div>

      {/* Main Navbar with background image */}
      <div
        className="main-navbar-image"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "250px",
          position: "relative",
          borderBottomLeftRadius: "30px",
          borderBottomRightRadius: "30px",
          overflow: "hidden",
        }}
      >
        <Navbar expand="lg" className="transparent-navbar">
          <Container>
            <Navbar.Brand>
              <img src={logoImg} alt="School Logo" height="50" />
            </Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link href="#" className="text-white">
                Admission
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                School
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                About
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Contact
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>

      {/* Login Form */}
      <LoginForm />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default LoginPage;
