import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Form, Modal, Image } from "react-bootstrap";
import logo from "../../assets/image/Logo-besar.png";

export default function GantiPassword() {
  const pageTitle = "Ubah Kata Sandi - Portal Bendungan";
  document.title = pageTitle;
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // Verify the token and fetch user details if needed
    // For simplicity, this example does not include token verification on the client side
  }, [token]);

  const handleResetPassword = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/reset-password",
        { token, newPassword }
      );
      console.log(response.data);
      alert(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={true}
      size="lg"
      style={{
        fontFamily: "Roboto",
        fontWeight: "500",
        fontSize: "1.2rem",
      }}
    >
      <Modal.Header closeButton={false}></Modal.Header>
      <Modal.Body style={{ padding: "2rem 8rem" }}>
        <div className="d-flex justify-content-center align-items-center mb-5">
          <Image src={logo} width={90} alt="logo" className="ml-4" />
          <h2
            className="fw-bolder fs-1"
            style={{ marginLeft: "1rem", color: " #203989" }}
          >
            Portal Banjir
          </h2>
        </div>

        <Form onSubmit={handleResetPassword}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Kata Sandi Baru</Form.Label>
            <Form.Control
              type="password"
              placeholder="Masukkan kata sandi baru"
              value={newPassword}
              x
              onChange={(e) => setNewPassword(e.target.value)}
              className="p-2"
              style={{ borderColor: " #6A7AC4" }}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{ width: "100%" }}
            className="mb-5  align-items-center"
          >
            <div className="p-1">Ubah Kata Sandi</div>
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
