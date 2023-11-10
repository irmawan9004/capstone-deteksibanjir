import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Container, Button, Image } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LoginModal from "../Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import logo from "../../assets/image/Logo.png";
import { useEffect } from "react";

export default function NavbarWeb() {
  const [login, setLogin] = useState(true);
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    localStorage.getItem("token") ? setLogin(false) : setLogin(true);
    console.log(localStorage.getItem("token"));
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
            <Image src={logo} alt="logo" />
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
          </Nav>
          {login ? (
            <Button
              className="btn btn-primary px-4"
              onClick={() => setModalShow(true)}
            >
              Login
            </Button>
          ) : (
            <NavDropdown
              title="SULIKIN"
              id="collasible-nav-dropdown"
              style={{
                fontSize: "1.2rem",
              }}
            >
              <NavDropdown.Item
                onClick={() => {
                  localStorage.removeItem("token");
                  setLogin(true);
                  console.log(localStorage.getItem("token"));
                }}
              >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          )}
        </Navbar.Collapse>
        <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
      </Container>
    </Navbar>
  );
}
