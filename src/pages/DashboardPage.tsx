import React, { FC, SVGProps } from "react";
// Import at the top
import {
  Container,
  Nav,
  Form,
  FormControl,
  Dropdown,
  Table,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
import {
  BsThreeDotsVertical,
  BsPersonFill,
  BsPeopleFill,
  BsPersonBadgeFill,
} from "react-icons/bs";
import logoImg from "../assets/CHS-Logo.png";
import "../App.css";
import { IconBaseProps } from "react-icons/lib";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Calendar from "../components/Calendar";

const DashboardPage = () => {
  const today = new Date().toLocaleDateString();
  const PeopleFillIcon: React.FC<IconBaseProps> = (props) => (
    <BsPeopleFill {...props} />
  );
  const ThreeDotsVerticalIcon: React.FC<IconBaseProps> = (props) => (
    <BsThreeDotsVertical {...props} />
  );
  return (
    <div
      className="d-flex"
      style={{ minHeight: "100vh", flexDirection: "column" }}
    >
      <div className="d-flex flex-grow-1">
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
              <Nav.Link className="text-white bg-primary rounded mb-2" href="#">
                <Link to="/dashboard" className="nav-link text-white">
                  Dashboard
                </Link>
              </Nav.Link>
              <Nav.Link className="text-white" href="#">
                <Link to="/users" className="nav-link text-white">
                  Users
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
          {/* Header Section */}
          <Row className="mb-4 align-items-center justify-content-between">
            <Col md={6}>
              <h5>Hi Samuel Isaiah</h5>
              <strong style={{ color: "black" }}>Welcome back, Admin</strong>
            </Col>
            <Col
              md={6}
              className="d-flex justify-content-end align-items-center"
            >
              <Form className="d-flex me-3">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                />
              </Form>
              <img
                src="/image 5.png"
                height="40"
                width="40"
                className="rounded-circle"
              />
            </Col>
          </Row>

          {/* Overview Section */}
          <Row className="mb-4">
            <Col md={8}>
              <Card className="p-3 mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <h6>Overview</h6>
                  <div>
                    <span className="me-2">{today}</span>
                    <Dropdown>
                      <Dropdown.Toggle size="sm" variant="secondary">
                        ▼
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>Last 7 days</Dropdown.Item>
                        <Dropdown.Item>This Month</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>

                <Row className="mt-3">
                  <Col md={4}>
                    <Card className="p-3 bg-light">
                      <div className="d-flex justify-content-between">
                        <PeopleFillIcon size={30} />
                        <ThreeDotsVerticalIcon />
                      </div>
                      <h5>4,588</h5>
                      <p>Total Students</p>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="p-3 bg-light">
                      <div className="d-flex justify-content-between">
                        <PeopleFillIcon size={30} />
                        <ThreeDotsVerticalIcon />
                      </div>
                      <h5>34</h5>
                      <p>Total Teachers</p>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="p-3 bg-light">
                      <div className="d-flex justify-content-between">
                        <PeopleFillIcon size={30} />
                        <ThreeDotsVerticalIcon />
                      </div>
                      <h5>1,545</h5>
                      <p>Total Parents</p>
                    </Card>
                  </Col>
                </Row>
              </Card>
            </Col>

            {/* Incomplete Profiles Section */}
            <Col md={4}>
              <Card
                className="p-4 text-center bg-light h-100 ff-Poppins
fw-700
fs-20px
lh-100%
ls-0%
ta-center
"
              >
                <h6>Incomplete Teacher Profiles</h6>
                <div className="my-3">
                  <div
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      border: "12px solid #464590",
                      borderTopColor: "#e0e0e0",
                      margin: "0 auto",
                    }}
                  ></div>
                  <h4 className="mt-3">62.5%</h4>
                </div>
              </Card>
            </Col>
          </Row>

          {/* Registrations and Calendar */}
          <Row className="mb-4">
            <Col md={6}>
              <Card className="p-3">
                <h6>Registrations</h6>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Entrance Class</th>
                      <th>Sex</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Justina Ifidon</td>
                      <td>JSS 1</td>
                      <td>F</td>
                    </tr>
                    <tr>
                      <td>Victor Akubugwo</td>
                      <td>SSS 1</td>
                      <td>M</td>
                    </tr>
                    <tr>
                      <td>Justina Ifidon</td>
                      <td>JSS 1</td>
                      <td>F</td>
                    </tr>
                    <tr>
                      <td>Victor Akubugwo</td>
                      <td>SSS 1</td>
                      <td>M</td>
                    </tr>
                  </tbody>
                </Table>
                <span
                  style={{
                    color: "red",
                    fontWeight: "400",
                    fontSize: "16.89px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                  }}
                >
                  View All Registrations
                </span>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="p-3">
                <h6>Create a Static Calendar</h6>
                {/* Calendar Placeholder */}
                <div style={{ height: "250px", backgroundColor: "#05022B" }}>
                  {" "}
                  <Calendar />{" "}
                </div>
              </Card>
            </Col>
          </Row>

          {/* Transactions Table */}
          <Card className="p-3">
            <h6>Transactions</h6>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mr. Joseph Achibong</td>
                  <td>School fees</td>
                  <td>N350,000</td>
                  <td>12/04/2023</td>
                  <td>3:33pm</td>
                </tr>
                <tr>
                  <td>Mrs. Victoria Ihechukwudere</td>
                  <td>Complete school uni...</td>
                  <td>N23,000</td>
                  <td>12/04/2023</td>
                  <td>3:12pm</td>
                </tr>
                <tr>
                  <td>Mrs. Justina Lucas</td>
                  <td>School fees</td>
                  <td>N280,000</td>
                  <td>12/04/2023</td>
                  <td>3:02pm</td>
                </tr>
                <tr>
                  <td>Mrs. Victoria Igando</td>
                  <td>Complete school uni...</td>
                  <td>N23,000</td>
                  <td>12/04/2023</td>
                  <td>3:00pm</td>
                </tr>
                <tr>
                  <td>Mrs. Victoria Ihechukwudere</td>
                  <td>Complete school uni...</td>
                  <td>N23,000</td>
                  <td>12/04/2023</td>
                  <td>3:12pm</td>
                </tr>
                <tr>
                  <td>Mrs. Justina Lucas</td>
                  <td>School fees</td>
                  <td>N280,000</td>
                  <td>12/04/2023</td>
                  <td>3:02pm</td>
                </tr>
                <tr>
                  <td>Mrs. Victoria Igando</td>
                  <td>Complete school uni...</td>
                  <td>N23,000</td>
                  <td>12/04/2023</td>
                  <td>3:00pm</td>
                </tr>
              </tbody>
            </Table>
            <span
              style={{
                color: "red",
                fontWeight: "400",
                fontSize: "16.89px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              View All Registrations
            </span>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default DashboardPage;
