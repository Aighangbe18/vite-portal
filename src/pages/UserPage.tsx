import React, { useState } from "react";
import {
  Container,
  Nav,
  Row,
  Col,
  Button,
  Form,
  Modal,
  Table,
} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  redirect,
} from "react-router-dom";
import { FaPlus, FaTrash, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import logoImg from "../assets/CHS-Logo.png";
import "../App.css";

const UserPage = () => {
  const [activeTab, setActiveTab] = useState("administrators");
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <div
        className="text-white p-3"
        style={{
          width: "250px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#05022B",
        }}
      >
        <div>
          <Nav className="flex-column">
            <div>
              <img
                src={logoImg}
                alt="School Logo"
                style={{
                  width: "150px",
                  height: "100px",
                  marginBottom: "80px",
                  marginTop: "20px",
                }}
              />
            </div>
            <Nav.Link className="text-white" href="#">
              <Link to="/Dashboard" className="nav-link text-white">
                Dashboard
              </Link>
            </Nav.Link>
            <Nav.Link className="text-white bg-primary rounded mb-2" href="#">
              <Link to="/users" className="nav-link text-white">
                User
              </Link>
            </Nav.Link>
            <Nav.Link className="text-white" href="#">
              <Link to="/Academic" className="nav-link text-white">
                Academic
              </Link>
            </Nav.Link>
            <Nav.Link className="text-white" href="#">
              <Link to="/Financial" className="nav-link text-white">
                Financial
              </Link>
            </Nav.Link>
            <Nav.Link className="text-white" href="#">
              <Link to="/Communication" className="nav-link text-white">
                Communication
              </Link>
            </Nav.Link>
          </Nav>
        </div>
        <div>
          <Nav className="flex-column">
            <Nav.Link className="text-white" href="#">
              Settings
            </Nav.Link>
            <Nav.Link className="text-white" href="#">
              Logout
            </Nav.Link>
          </Nav>
        </div>
      </div>

      {/* Main Content */}
      <Container fluid className="p-4">
        <Row className="mb-3 align-items-center justify-content-between">
          <Col>
            <h4>User</h4>
          </Col>
          <Col className="text-end">
            <img
              src="/image 5.png"
              alt="User Avatar"
              width="40"
              height="40"
              className="rounded-circle"
            />
          </Col>
        </Row>

        {/* User Category Buttons */}
        <Row className="mb-2">
          <Col className="d-flex gap-3">
            {["administrators", "teachers", "parents", "students"].map(
              (tab) => (
                <Button
                  key={tab}
                  variant={activeTab === tab ? "primary" : "outline-primary"}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </Button>
              )
            )}
          </Col>
        </Row>

        <hr />

        {activeTab === "administrators" && (
          <>
            <h5>Administrators</h5>
            <Row className="mb-3">
              <Col md={9}>
                <Form.Control
                  type="search"
                  placeholder="Search administrators..."
                />
              </Col>
              <Col md={3} className="text-end">
                <Button variant="success" onClick={handleShow}>
                  <FaPlus /> Add New Administrator
                </Button>
              </Col>
            </Row>
            <div
              style={{
                backgroundColor: "whitesmoke",
                border: "2px solid white",
                borderRadius: "10px",
                justifyContent: "center",
                marginBottom: "50px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  justifyContent: "right",
                  color: "red",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  display: "flex",
                  marginTop: "10px",
                  marginLeft: "10px",
                  marginRight: "30px",
                }}
              >
                <span>
                  Delete <FaTrash />
                </span>
              </div>

              <Table striped bordered hover responsive className="mt-5">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date Created</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-active">
                    <td>Samuel Isaiah</td>
                    <td>samuel@cradleschool.ng</td>
                    <td>12/04/2023</td>
                    <td>
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Director</td>
                    <td>director@cradleschool.ng</td>
                    <td>12/04/2023</td>
                    <td>
                      <span className="text-dark">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Principal</td>
                    <td>principal@cradleschool.ng</td>
                    <td>12/04/2023</td>
                    <td>
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Directress</td>
                    <td>directress@cradleschool.ng</td>
                    <td>12/04/2023</td>
                    <td>
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Head Teacher</td>
                    <td>eunice@cradleschool.ng</td>
                    <td>12/04/2023</td>
                    <td>
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <Row className="align-items-center">
              <Col>
                <strong className="text-center d-block">Total = 5</strong>
              </Col>
              <Col className="text-end">
                <Button size="sm" variant="outline-secondary" className="me-2">
                  <FaArrowLeft /> Prev
                </Button>
                <Button size="sm" variant="primary">
                  1
                </Button>{" "}
                <Button size="sm" variant="outline-secondary">
                  2
                </Button>{" "}
                <Button size="sm" variant="outline-secondary">
                  3
                </Button>{" "}
                <Button size="sm" variant="outline-secondary">
                  Next <FaArrowRight />
                </Button>
              </Col>
            </Row>
          </>
        )}

        {activeTab === "teachers" && (
          <>
            <h5>Teachers</h5>
            <Row className="mb-3">
              <Col md={9}>
                <Form.Control type="search" placeholder="Search..." />
              </Col>
              <Col md={3} className="text-end">
                <Button variant="success" onClick={handleShow}>
                  <FaPlus /> Add New Teachers
                </Button>
              </Col>
            </Row>

            <div
              style={{
                backgroundColor: "whitesmoke",
                border: "2px solid white",
                borderRadius: "10px",
                justifyContent: "center",
                marginBottom: "0px",
                display: "flow",
              }}
            >
              <div
                style={{
                  justifyContent: "left",
                  color: "black",
                  fontWeight: "700",
                  fontSize: "32px",
                  lineHeight: "100%",
                  letterSpacing: "8%",
                  marginLeft: "10px",
                  marginTop: "20px",
                }}
              >
                <span>High School</span>
              </div>
              <div
                style={{
                  justifyContent: "right",
                  color: "red",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  display: "flex",
                  marginTop: "0px",
                  marginLeft: "10px",
                  marginRight: "30px",
                }}
              >
                <span>
                  Delete <FaTrash />
                </span>
              </div>

              <Table striped bordered hover responsive className="mt-5">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subjects</th>
                    <th>Class</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-active">
                    <td>Samuel Isaiah</td>
                    <td>samuel@cradleschool.ng</td>
                    <td>Computer</td>
                    <td>
                      <span className="text-success">Year 7</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Director</td>
                    <td>director@cradleschool.ng</td>
                    <td>English</td>
                    <td>
                      <span className="text-dark">Year 7</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Principal</td>
                    <td>principal@cradleschool.ng</td>
                    <td>Biology & Chem...</td>
                    <td>
                      <span className="text-success">Year 7</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Directress</td>
                    <td>directress@cradleschool.ng</td>
                    <td>Agric</td>
                    <td>
                      <span className="text-success">Year 7</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Head Teacher</td>
                    <td>eunice@cradleschool.ng</td>
                    <td>Civic Education</td>
                    <td>
                      <span className="text-success">Year 7</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Head Teacher</td>
                    <td>eunice@cradleschool.ng</td>
                    <td>Mathematics</td>
                    <td>
                      <span className="text-success">Year 7</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Head Teacher</td>
                    <td>eunice@cradleschool.ng</td>
                    <td>Civic Education</td>
                    <td>
                      <span className="text-success">Year 7</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Head Teacher</td>
                    <td>eunice@cradleschool.ng</td>
                    <td>Mathematics</td>
                    <td>
                      <span className="text-success">Year 7</span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div
              style={{
                marginBottom: "50px",
              }}
            >
              <Row className="align-items-center">
                <Col>
                  <strong className="text-center d-block">Total = 5</strong>
                </Col>
                <Col className="text-end">
                  <Button
                    size="sm"
                    variant="outline-secondary"
                    className="me-2"
                  >
                    <FaArrowLeft /> Prev
                  </Button>
                  <Button size="sm" variant="primary">
                    1
                  </Button>{" "}
                  <Button size="sm" variant="outline-secondary">
                    2
                  </Button>{" "}
                  <Button size="sm" variant="outline-secondary">
                    3
                  </Button>{" "}
                  <Button size="sm" variant="outline-secondary">
                    Next <FaArrowRight />
                  </Button>
                </Col>
              </Row>
            </div>

            <div
              style={{
                backgroundColor: "whitesmoke",
                border: "2px solid white",
                borderRadius: "10px",
                justifyContent: "center",
                marginBottom: "0px",
                display: "flow",
              }}
            >
              <div
                style={{
                  justifyContent: "left",
                  color: "black",
                  fontWeight: "700",
                  fontSize: "32px",
                  lineHeight: "100%",
                  letterSpacing: "8%",
                  marginLeft: "10px",
                  marginTop: "20px",
                }}
              >
                <span>Primary</span>
              </div>
              <div
                style={{
                  justifyContent: "right",
                  color: "red",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  display: "flex",
                  marginTop: "0px",
                  marginLeft: "10px",
                  marginRight: "30px",
                }}
              >
                <span>
                  Delete <FaTrash />
                </span>
              </div>

              <Table striped bordered hover responsive className="mt-5">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subjects</th>
                    <th>Class</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-active">
                    <td>Samuel Isaiah</td>
                    <td>samuel@cradleschool.ng</td>
                    <td>All</td>
                    <td>
                      <span className="text-success">None</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Director</td>
                    <td>director@cradleschool.ng</td>
                    <td>All</td>
                    <td>
                      <span className="text-dark">None</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Principal</td>
                    <td>principal@cradleschool.ng</td>
                    <td>All</td>
                    <td>
                      <span className="text-success">Kg 2</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Directress</td>
                    <td>directress@cradleschool.ng</td>
                    <td>All</td>
                    <td>
                      <span className="text-success">kg 3</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Head Teacher</td>
                    <td>eunice@cradleschool.ng</td>
                    <td>All</td>
                    <td>
                      <span className="text-success">Pry 1</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Head Teacher</td>
                    <td>eunice@cradleschool.ng</td>
                    <td>Quantative</td>
                    <td>
                      <span className="text-success">Pry 2</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Head Teacher</td>
                    <td>eunice@cradleschool.ng</td>
                    <td>Verbal</td>
                    <td>
                      <span className="text-success">None</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Head Teacher</td>
                    <td>eunice@cradleschool.ng</td>
                    <td>Mathematics</td>
                    <td>
                      <span className="text-success">None</span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <div
              style={{
                marginBottom: "50px",
              }}
            >
              <Row className="align-items-center">
                <Col>
                  <strong className="text-center d-block">Total = 5</strong>
                </Col>
                <Col className="text-end">
                  <Button
                    size="sm"
                    variant="outline-secondary"
                    className="me-2"
                  >
                    <FaArrowLeft /> Prev
                  </Button>
                  <Button size="sm" variant="primary">
                    1
                  </Button>{" "}
                  <Button size="sm" variant="outline-secondary">
                    2
                  </Button>{" "}
                  <Button size="sm" variant="outline-secondary">
                    3
                  </Button>{" "}
                  <Button size="sm" variant="outline-secondary">
                    Next <FaArrowRight />
                  </Button>
                </Col>
              </Row>
            </div>

            <div
              style={{
                backgroundColor: "whitesmoke",
                border: "2px solid white",
                borderRadius: "10px",
                justifyContent: "center",
                marginBottom: "0px",
                display: "flow",
              }}
            >
              <div
                style={{
                  justifyContent: "left",
                  color: "black",
                  fontWeight: "700",
                  fontSize: "32px",
                  lineHeight: "100%",
                  letterSpacing: "8%",
                  marginLeft: "10px",
                  marginTop: "20px",
                }}
              >
                <span>Montessori</span>
              </div>
              <div
                style={{
                  justifyContent: "right",
                  color: "red",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  display: "flex",
                  marginTop: "0px",
                  marginLeft: "10px",
                  marginRight: "30px",
                }}
              >
                <span>
                  Delete <FaTrash />
                </span>
              </div>

              <Table striped bordered hover responsive className="mt-5">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subjects</th>
                    <th>Class</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-active">
                    <td>Samuel Isaiah</td>
                    <td>samuel@cradleschool.ng</td>
                    <td>All</td>
                    <td>
                      <span className="text-success">None</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Director</td>
                    <td>director@cradleschool.ng</td>
                    <td>All</td>
                    <td>
                      <span className="text-dark">None</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Principal</td>
                    <td>principal@cradleschool.ng</td>
                    <td>All</td>
                    <td>
                      <span className="text-success">Kg 2</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Directress</td>
                    <td>directress@cradleschool.ng</td>
                    <td>All</td>
                    <td>
                      <span className="text-success">kg 3</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Head Teacher</td>
                    <td>eunice@cradleschool.ng</td>
                    <td>All</td>
                    <td>
                      <span className="text-success">Pry 1</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Head Teacher</td>
                    <td>eunice@cradleschool.ng</td>
                    <td>Quantative</td>
                    <td>
                      <span className="text-success">Pry 2</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Head Teacher</td>
                    <td>eunice@cradleschool.ng</td>
                    <td>Verbal</td>
                    <td>
                      <span className="text-success">None</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Head Teacher</td>
                    <td>eunice@cradleschool.ng</td>
                    <td>Mathematics</td>
                    <td>
                      <span className="text-success">None</span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div
              style={{
                marginBottom: "50px",
              }}
            >
              <Row className="align-items-center">
                <Col>
                  <strong className="text-center d-block">Total = 35</strong>
                </Col>
                <Col className="text-end">
                  <Button
                    size="sm"
                    variant="outline-secondary"
                    className="me-2"
                  >
                    <FaArrowLeft /> Prev
                  </Button>
                  <Button size="sm" variant="primary">
                    1
                  </Button>{" "}
                  <Button size="sm" variant="outline-secondary">
                    2
                  </Button>{" "}
                  <Button size="sm" variant="outline-secondary">
                    3
                  </Button>{" "}
                  <Button size="sm" variant="outline-secondary">
                    Next <FaArrowRight />
                  </Button>
                </Col>
              </Row>
            </div>
          </>
        )}

        {activeTab === "parents" && (
          <>
            <h5>Parents</h5>
            <Row className="mb-3">
              <Col md={9}>
                <Form.Control type="search" placeholder="Search ..." />
              </Col>
              <Col md={3} className="text-end">
                <Button variant="success" onClick={handleShow}>
                  <FaPlus /> Add New Parent
                </Button>
              </Col>
            </Row>

            <div
              style={{
                backgroundColor: "whitesmoke",
                border: "2px solid white",
                borderRadius: "10px",
                justifyContent: "center",
                marginBottom: "50px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  justifyContent: "right",
                  color: "red",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  display: "flex",
                  marginTop: "10px",
                  marginLeft: "10px",
                  marginRight: "30px",
                }}
              >
                <span>
                  Delete <FaTrash />
                </span>
              </div>

              <Table striped bordered hover responsive className="mt-5">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date Created</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-active">
                    <td>Samuel Isaiah</td>
                    <td>samuel@cradleschool.ng</td>
                    <td>12/04/2023</td>
                    <td>
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Director</td>
                    <td>director@cradleschool.ng</td>
                    <td>12/04/2023</td>
                    <td>
                      <span className="text-dark">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Principal</td>
                    <td>principal@cradleschool.ng</td>
                    <td>12/04/2023</td>
                    <td>
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Directress</td>
                    <td>directress@cradleschool.ng</td>
                    <td>12/04/2023</td>
                    <td>
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Head Teacher</td>
                    <td>eunice@cradleschool.ng</td>
                    <td>12/04/2023</td>
                    <td>
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <Row className="align-items-center">
              <Col>
                <strong className="text-center d-block">Total = 5</strong>
              </Col>
              <Col className="text-end">
                <Button size="sm" variant="outline-secondary" className="me-2">
                  <FaArrowLeft /> Prev
                </Button>
                <Button size="sm" variant="primary">
                  1
                </Button>{" "}
                <Button size="sm" variant="outline-secondary">
                  2
                </Button>{" "}
                <Button size="sm" variant="outline-secondary">
                  3
                </Button>{" "}
                <Button size="sm" variant="outline-secondary">
                  Next <FaArrowRight />
                </Button>
              </Col>
            </Row>
          </>
        )}

        {activeTab === "students" && (
          <>
            <h5>Students</h5>
            <Row className="mb-3">
              <Col md={9}>
                <Form.Control type="search" placeholder="Search..." />
              </Col>
              <Col md={3} className="text-end">
                <Button variant="success" onClick={handleShow}>
                  <FaPlus /> Add New Students
                </Button>
              </Col>
            </Row>

            <div
              style={{
                backgroundColor: "whitesmoke",
                border: "2px solid white",
                borderRadius: "10px",
                justifyContent: "center",
                marginBottom: "0px",
                display: "flow",
              }}
            >
              <div
                style={{
                  justifyContent: "left",
                  color: "black",
                  fontWeight: "700",
                  fontSize: "32px",
                  lineHeight: "100%",
                  letterSpacing: "8%",
                  marginLeft: "10px",
                  marginTop: "20px",
                }}
              >
                <span>High School</span>
              </div>
              <div
                style={{
                  justifyContent: "right",
                  color: "red",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  display: "flex",
                  marginTop: "0px",
                  marginLeft: "10px",
                  marginRight: "30px",
                }}
              >
                <span>
                  Delete <FaTrash />
                </span>
              </div>

              <Table striped bordered hover responsive className="mt-5">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Year</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-active">
                    <td>Samuel Isaiah</td>
                    <td>samuel@cradleschool.ng</td>
                    <td>Year 7</td>
                    <td>
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Director</td>
                    <td>director@cradleschool.ng</td>
                    <td>Year 7</td>
                    <td>
                      <span className="text-dark">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Principal</td>
                    <td>principal@cradleschool.ng</td>
                    <td>Year 7</td>
                    <td>
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Directress</td>
                    <td>directress@cradleschool.ng</td>
                    <td>Year 7</td>
                    <td>
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Head Teacher</td>
                    <td>eunice@cradleschool.ng</td>
                    <td>Year 7</td>
                    <td>
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Director</td>
                    <td>director@cradleschool.ng</td>
                    <td>Year 7</td>
                    <td>
                      <span className="text-dark">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Principal</td>
                    <td>principal@cradleschool.ng</td>
                    <td>Year 7</td>
                    <td>
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Directress</td>
                    <td>directress@cradleschool.ng</td>
                    <td>Year 7</td>
                    <td>
                      {" "}
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <Row className="align-items-center">
              <Col>
                <strong className="text-center d-block">Total = 5</strong>
              </Col>
              <Col className="text-end">
                <Button size="sm" variant="outline-secondary" className="me-2">
                  <FaArrowLeft /> Prev
                </Button>
                <Button size="sm" variant="primary">
                  1
                </Button>{" "}
                <Button size="sm" variant="outline-secondary">
                  2
                </Button>{" "}
                <Button size="sm" variant="outline-secondary">
                  3
                </Button>{" "}
                <Button size="sm" variant="outline-secondary">
                  Next <FaArrowRight />
                </Button>
              </Col>
            </Row>
            <div
              style={{
                backgroundColor: "whitesmoke",
                border: "2px solid white",
                borderRadius: "10px",
                justifyContent: "center",
                marginBottom: "0px",
                display: "flow",
              }}
            >
              <div
                style={{
                  justifyContent: "left",
                  color: "black",
                  fontWeight: "700",
                  fontSize: "32px",
                  lineHeight: "100%",
                  letterSpacing: "8%",
                  marginLeft: "10px",
                  marginTop: "20px",
                }}
              >
                <span>Primary</span>
              </div>
              <div
                style={{
                  justifyContent: "right",
                  color: "red",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  display: "flex",
                  marginTop: "0px",
                  marginLeft: "10px",
                  marginRight: "30px",
                }}
              >
                <span>
                  Delete <FaTrash />
                </span>
              </div>

              <Table striped bordered hover responsive className="mt-5">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>PRY</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-active">
                    <td>Samuel Isaiah</td>
                    <td>samuel@cradleschool.ng</td>
                    <td>PRY 1</td>
                    <td>
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Director</td>
                    <td>director@cradleschool.ng</td>
                    <td>PRY 1</td>
                    <td>
                      <span className="text-dark">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Principal</td>
                    <td>principal@cradleschool.ng</td>
                    <td>PRY 1</td>
                    <td>
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Directress</td>
                    <td>directress@cradleschool.ng</td>
                    <td>PRY 1</td>
                    <td>
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Head Teacher</td>
                    <td>eunice@cradleschool.ng</td>
                    <td>PRY 1</td>
                    <td>
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Director</td>
                    <td>director@cradleschool.ng</td>
                    <td>PRY 1</td>
                    <td>
                      <span className="text-dark">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Principal</td>
                    <td>principal@cradleschool.ng</td>
                    <td>PRY 1</td>
                    <td>
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Directress</td>
                    <td>directress@cradleschool.ng</td>
                    <td>PRY 1</td>
                    <td>
                      {" "}
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div
              style={{
                marginBottom: "50px",
              }}
            >
              <Row className="align-items-center">
                <Col>
                  <strong className="text-center d-block">Total = 35</strong>
                </Col>
                <Col className="text-end">
                  <Button
                    size="sm"
                    variant="outline-secondary"
                    className="me-2"
                  >
                    <FaArrowLeft /> Prev
                  </Button>
                  <Button size="sm" variant="primary">
                    1
                  </Button>{" "}
                  <Button size="sm" variant="outline-secondary">
                    2
                  </Button>{" "}
                  <Button size="sm" variant="outline-secondary">
                    3
                  </Button>{" "}
                  <Button size="sm" variant="outline-secondary">
                    Next <FaArrowRight />
                  </Button>
                </Col>
              </Row>
            </div>

            <div
              style={{
                backgroundColor: "whitesmoke",
                border: "2px solid white",
                borderRadius: "10px",
                justifyContent: "center",
                marginBottom: "0px",
                display: "flow",
              }}
            >
              <div
                style={{
                  justifyContent: "left",
                  color: "black",
                  fontWeight: "700",
                  fontSize: "32px",
                  lineHeight: "100%",
                  letterSpacing: "8%",
                  marginLeft: "10px",
                  marginTop: "20px",
                }}
              >
                <span>Montessori</span>
              </div>
              <div
                style={{
                  justifyContent: "right",
                  color: "red",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  display: "flex",
                  marginTop: "0px",
                  marginLeft: "10px",
                  marginRight: "30px",
                }}
              >
                <span>
                  Delete <FaTrash />
                </span>
              </div>

              <Table striped bordered hover responsive className="mt-5">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>NUR</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-active">
                    <td>Samuel Isaiah</td>
                    <td>samuel@cradleschool.ng</td>
                    <td>NUR1</td>
                    <td>
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Director</td>
                    <td>director@cradleschool.ng</td>
                    <td>NUR1</td>
                    <td>
                      <span className="text-dark">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Principal</td>
                    <td>principal@cradleschool.ng</td>
                    <td>NUR1</td>
                    <td>
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Directress</td>
                    <td>directress@cradleschool.ng</td>
                    <td>NUR1</td>
                    <td>
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Head Teacher</td>
                    <td>eunice@cradleschool.ng</td>
                    <td>NUR1</td>
                    <td>
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Director</td>
                    <td>director@cradleschool.ng</td>
                    <td>Year 7</td>
                    <td>
                      <span className="text-dark">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Principal</td>
                    <td>principal@cradleschool.ng</td>
                    <td>Year 7</td>
                    <td>
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Directress</td>
                    <td>directress@cradleschool.ng</td>
                    <td>NUR1</td>
                    <td>
                      {" "}
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div
              style={{
                marginBottom: "50px",
              }}
            >
              <Row className="align-items-center">
                <Col>
                  <strong className="text-center d-block">Total = 35</strong>
                </Col>
                <Col className="text-end">
                  <Button
                    size="sm"
                    variant="outline-secondary"
                    className="me-2"
                  >
                    <FaArrowLeft /> Prev
                  </Button>
                  <Button size="sm" variant="primary">
                    1
                  </Button>{" "}
                  <Button size="sm" variant="outline-secondary">
                    2
                  </Button>{" "}
                  <Button size="sm" variant="outline-secondary">
                    3
                  </Button>{" "}
                  <Button size="sm" variant="outline-secondary">
                    Next <FaArrowRight />
                  </Button>
                </Col>
              </Row>
            </div>
          </>
        )}

        {/* Modal Form */}
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>New Administrator</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>Sign up</h6>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Assign User ID</Form.Label>
                    <Form.Control type="text" placeholder="User ID" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Assign Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Col>
              </Row>
              <h6>Permissions / Access</h6>
              <Row>
                <Col>
                  <Form.Check label="Super Admin Access" />
                  <Form.Check label="Academic Management" />
                  <Form.Check label="Communication Management" />
                </Col>
                <Col>
                  <Form.Check label="User Management" />
                  <Form.Check label="Financial Management" />
                  <Form.Check label="Report Management" />
                </Col>
              </Row>
              <div className="text-center mt-3">
                <Button variant="primary">Create</Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default UserPage;
