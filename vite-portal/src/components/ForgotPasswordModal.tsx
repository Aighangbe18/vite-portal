import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

interface Props {
  show: boolean;
  onHide: () => void;
}

const ForgotPasswordModal: React.FC<Props> = ({ show, onHide }) => (
  <Modal show={show} onHide={onHide} centered>
    <Modal.Header closeButton>
      <Modal.Title className="w-100 text-center">Forgot Password?</Modal.Title>
    </Modal.Header>
    <Modal.Body className="text-center">
      <p>
        <strong style={{ color: "black" }}>
          Enter your email and we will send you a password reset link.
        </strong>
      </p>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Button variant="primary">Send</Button>
      </Form>
    </Modal.Body>
  </Modal>
);

export default ForgotPasswordModal;
