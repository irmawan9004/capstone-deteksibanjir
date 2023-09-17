import React from "react";
import { Container, Col, Row, Image, Card, CardGroup } from "react-bootstrap";
import NavbarWeb from "../../Components/Navbar";
import kondisi from "../../assets/image/Kondisi Bendungan.png";
import ketinggian from "../../assets/image/ketinggian.png";
import kekeruhan from "../../assets/image/kekeruhan.png";
import debit from "../../assets/image/arus.png";

export default function Dashboard() {
  return (
    <div>
      <NavbarWeb />
      <Container fluid="md">
        <Row>
          <Col>
            <Image src={kondisi} fluid />;
          </Col>
        </Row>
        <Row>
          <Col>
            <CardGroup>
              <Card>
                <Card.Img variant="top" src={ketinggian} />
                <Card.Body>
                  <Card.Title>Ketinggian Air</Card.Title>
                  <Card.Text>
                    Ketinggian Air pada Bendungan adalah <h1>15 m</h1>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={debit} />
                <Card.Body>
                  <Card.Title>Debit Air</Card.Title>
                  <Card.Text>
                    Debit air pada Bendungan adalah <h1>2m3/min</h1>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={kekeruhan} />
                <Card.Body>
                  <Card.Title>Kekeruhan Air</Card.Title>
                  <Card.Text>
                    Tingkat Kekeruhan Air pada Bendungan adalah <h1>15m</h1>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
