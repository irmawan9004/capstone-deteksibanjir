import React, { useState } from "react";
import { Modal, Button, Form, Image } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/image/Logo-besar.png";
import Forget from "../Forget";

export default function LoginModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [forgetShow, setForgetShow] = useState(false);
  // const history = useHistory();
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "https://young-everglades-00873-d903e8dbc719.herokuapp.com/api/login",
          {
            email: email,
            password: password,
          }
        )
        .then((res) => {
          localStorage.setItem("token", res.data.accessToken);
          localStorage.setItem("role", res.data.role);
        });
      navigate("/dashboard");
      navigate(0);
      props.onHide();
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
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

        <Form onSubmit={Auth}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
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

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <div className="d-flex justify-content-between">
              <Form.Label>Password</Form.Label>
              <p
                onClick={() => setForgetShow(true)}
                style={{ color: "#203989" }}
              >
                Lupa kata sandi?
              </p>
            </div>
            <Form.Control
              type="password"
              placeholder="*******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2"
              style={{ borderColor: " #6A7AC4" }}
            />
            <Form.Text className="text-danger ">{msg}</Form.Text>
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{ width: "100%" }}
            className="mb-5  align-items-center"
          >
            <div className="p-1"> Login </div>
          </Button>
        </Form>
      </Modal.Body>
      <Forget show={forgetShow} onHide={() => setForgetShow(false)} />
    </Modal>
  );
}
