import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import NavbarWeb from "../../Components/Navbar";
import hero from "../../assets/image/hero.png";
import image_footer from "../../assets/image/Footer.png";

export default function Beranda() {
  return (
    <div>
      <NavbarWeb />
      <Container>
        <Row>
          <Col sm={5}>
            <h1 className="font-weigh-light">
              Sistem Pemantau Banjir Bendungan Pucang Gading
            </h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <Button variant="primary">Gabung Channel</Button>{" "}
          </Col>
          <Col sm={7}>
            <Image src={hero} fluid />;
          </Col>
          <Row>
            <Image src={image_footer} fluid />;
          </Row>
        </Row>
      </Container>
    </div>
  );
}
