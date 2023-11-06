import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import NavbarWeb from "../../Components/Navbar";
import hero from "../../assets/image/hero.png";
import Footer from "../../Components/Footer";

export default function Beranda() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <NavbarWeb />
      <Container
        style={{
          flex: "1",
          display: "flex",
          alignItems: "center",
          zIndex: "99",
        }}
      >
        <Row>
          <Col sm={6} className="mr-4">
            <h1 className="fw-bolder fs-1">
              Sistem Pemantau Banjir Bendungan Pucang Gading
            </h1>
            <p className="mt-4 fw-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <Button variant="primary">Gabung Channel</Button>{" "}
          </Col>
          <Col sm={6}>
            <Image src={hero} fluid />;
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}
