import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Container, Button, Image } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LoginModal from "../Login";
import RegisterModal from "../Register";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import logo from "../../assets/image/Logo.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NavbarWeb() {
  const [login, setLogin] = useState(true);
  const [modalLoginShow, setModalLoginShow] = React.useState(false);
  const [modalRegisterShow, setModalRegisterShow] = React.useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem("token") ? setLogin(false) : setLogin(true);
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      fixed="top"
    >
      <Container>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="d-flex justify-content-between"
        >
          <Navbar.Brand
            href="/"
            className="h1"
            style={{
              color: "Black",
              fontFamily: "Roboto",
              fontWeight: "900",
              fontSize: "2rem",
            }}
          >
            <div className="d-flex justify-content-center align-items-lg-center">
              <Image src={logo} alt="logo" />
              <h1
                style={{
                  fontWeight: "bold",
                  marginLeft: "1rem",
                  marginTop: "0.5rem",
                  color: "#203989",
                }}
              >
                B-JIR!
              </h1>
            </div>
          </Navbar.Brand>
          <Nav
            style={{
              fontFamily: "Roboto",
              fontWeight: "500",
              fontSize: "1.2rem",
            }}
          >
            <Nav.Link href="/" className="px-3 mx-1">
              Beranda
            </Nav.Link>
            <Nav.Link href="/dashboard" className="px-3 mx-1 ">
              Dashboard
            </Nav.Link>
            {localStorage.getItem("token") ? (
              <NavDropdown
                title="Data Air"
                id="collasible-nav-dropdown"
                className="px-3 mx-1"
              >
                <NavDropdown.Item href="/ketinggianair">
                  Ketinggian Air
                </NavDropdown.Item>
                <NavDropdown.Item href="/debitair">Debit Air</NavDropdown.Item>
                <NavDropdown.Item href="/kekeruhanair">
                  Kekeruhan Air
                </NavDropdown.Item>
              </NavDropdown>
            ) : null}
          </Nav>
          {login ? (
            <Button
              className="btn btn-primary px-4"
              onClick={() => setModalLoginShow(true)}
            >
              Login
            </Button>
          ) : (
            <section style={{ display: "flex " }}>
              <Button
                style={{
                  display:
                    localStorage.getItem("role") === "admin" ? "block" : "none",
                }}
                className="btn btn-primary px-4"
                onClick={() => setModalRegisterShow(true)}
              >
                Register
              </Button>
              <NavDropdown
                title={
                  localStorage.getItem("role") === "admin"
                    ? "Super Admin"
                    : "Admin"
                }
                id="collasible-nav-dropdown"
                style={{
                  marginLeft: "1.2rem",
                  fontSize: "1.2rem",
                }}
              >
                <NavDropdown.Item
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("role");
                    setLogin(true);
                    navigate("/");
                  }}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </section>
          )}
        </Navbar.Collapse>

        <LoginModal
          show={modalLoginShow}
          onHide={() => setModalLoginShow(false)}
        />
        <RegisterModal
          show={modalRegisterShow}
          onHide={() => setModalRegisterShow(false)}
        />
      </Container>
    </Navbar>
  );
}
