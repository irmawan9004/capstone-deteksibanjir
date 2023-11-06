import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Container, Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LoginModal from "../Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function NavbarWeb(props) {
  const [login, setLogin] = useState(true);
  const [modalShow, setModalShow] = React.useState(false);
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
            LOGO
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
            <Button variant="primary" onClick={() => setModalShow(true)}>
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
              <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
            </NavDropdown>
          )}
        </Navbar.Collapse>
        <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
      </Container>
    </Navbar>
  );
}
