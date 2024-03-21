/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Image, Dropdown } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/image/Logo-besar.png";
import LoginModal from "../Login";

export default function RegisterModal(props, { onSelect }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loginShow, setLoginShow] = useState(false);
  const [roles, setRoles] = useState([]);
  const [selected, setSelected] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        "https://young-everglades-00873-d903e8dbc719.herokuapp.com/api/roles"
      )
      .then((res) => {
        setRoles(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "https://young-everglades-00873-d903e8dbc719.herokuapp.com/api/registerpengelola",
          {
            name: name,
            email: email,
            password: password,
            confPassword: confPassword,
            selected: selected,
          }
        )
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
            Daftar Akun
          </h2>
        </div>

        <Form onSubmit={Register}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nama</Form.Label>
            <Form.Control
              id="name"
              type="name"
              placeholder="Masukkan nama anda"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2"
              style={{ borderColor: " #6A7AC4" }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              id="email"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2"
              style={{ borderColor: " #6A7AC4" }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Bagian</Form.Label>
            <Form.Control
              id="role"
              as="select"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="p-2"
              style={{ borderColor: " #6A7AC4" }}
            >
              <option disabled>Pilih role anda</option>
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <div className="d-flex justify-content-between">
              <Form.Label>Password</Form.Label>
            </div>
            <Form.Control
              id="password"
              type="password"
              placeholder="*******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2"
              style={{ borderColor: " #6A7AC4" }}
            />
            <Form.Text className="text-muted">{msg}</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <div className="d-flex justify-content-between">
              <Form.Label>Konfirmasi Password</Form.Label>
            </div>
            <Form.Control
              id="confPassword"
              type="password"
              placeholder="*******"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
              className="p-2"
              style={{ borderColor: " #6A7AC4" }}
            />
            <Form.Text className="text-muted">{msg}</Form.Text>
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
