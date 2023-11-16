import React from "react";
import { Modal, Image, Form, Button } from "react-bootstrap";
import axios from "axios";
import logo from "../../assets/image/Logo-besar.png";

export default function Forget(props) {
  const [email, setEmail] = React.useState("");
  const [msg, setMsg] = React.useState("");

  const Forget = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:8000/api/forgot-password", {
          email: email,
        })
        .then((res) => {
          setMsg(res.data.message);
        });
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.message);
      }
    }
  };
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={() => {
        props.onHide();
        setMsg("");
      }}
      size="lg"
      style={{
        fontFamily: "Roboto",
        fontWeight: "500",
        fontSize: "1.2rem",
      }}
    >
      <Modal.Header closeButton></Modal.Header>
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

        <Form onSubmit={Forget}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <h5 className=" text-center text-muted">{msg}</h5>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <div className="p-1"> Submit</div>
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
