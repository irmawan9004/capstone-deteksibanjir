import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import NavbarWeb from "../../Components/Navbar";
import hero from "../../assets/image/hero.png";
import Footer from "../../Components/Footer";
import telegram from "../../assets/image/Vector.png";

export default function Beranda() {
  const pageTitle = "Beranda - Portal Bendungan";
  document.title = pageTitle;

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
          <Col sm={5}>
            <h1 className="fw-bolder fs-1" style={{ color: "#203989" }}>
              Sistem Pemantau Banjir Bendungan Pucang Gading
            </h1>
            <p className="mt-4 fw-light mb-4" style={{ color: "#6A7AC4" }}>
              Bergabunglah di channel Telegram Pemantauan Bendungan Pucang
              Gading untuk mendapatkan informasi peringatan banjir secara dini
              dan akurat. Dengan bergabung, Anda dapat lebih siap dan aman dalam
              menghadapi situasi banjir.
            </p>
            <div>
              <Button
                className="btn-secondary"
                href="https://t.me/kondisiairpucang"
              >
                <span className="mr-2">
                  <img src={telegram} alt="" />
                </span>
                {"  "}
                Gabung Channel
              </Button>
            </div>
          </Col>
          <Col sm={7} className="">
            <Image className=" d-flex justify-content-end" src={hero} fluid />;
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}
