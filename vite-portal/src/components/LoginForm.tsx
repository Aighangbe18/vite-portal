import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ForgotPasswordModal from "./ForgotPasswordModal";
import "../App.css";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    navigate("/dashboard");
  };

  const handleForgotPassword = () => {
    setShowModal(true);
  };

  const handleSend = () => {
    alert(`Password reset link sent to ${email}`);
    setShowModal(false);
  };

  return (
    <Container className="login-form-container d-flex flex-column align-items-center">
      <div>
        <h2 className="text-center">Log In</h2>
        <p className="text-center">
          Enter your login details to gain access to your portal.
        </p>
      </div>

      <div className="login-box">
        <Form>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Enter user ID" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" onClick={handleLogin} className="w-100">
            Log In
          </Button>

          <div className="text-center mt-2">
            <Button variant="link" onClick={handleForgotPassword}>
              Forgot password?
            </Button>
          </div>
        </Form>

        {showModal && (
          <div className="forgot-form mt-4 p-3 bg-light rounded shadow">
            <p
              className="mt-3 text-primary"
              style={{ cursor: "pointer" }}
              onClick={() => setShowModal(true)}
            >
              Forgot password?
            </p>
            <ForgotPasswordModal
              show={showModal}
              onHide={() => setShowModal(false)}
            />
            <p className="text-center">
              Enter your email and we’ll send you a reset link.
            </p>
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="secondary"
              onClick={handleSend}
              className="mt-3 w-100"
            >
              Send
            </Button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default LoginForm;
