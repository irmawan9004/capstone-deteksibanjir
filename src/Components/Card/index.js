import React, { useEffect } from "react";
import { useState } from "react";
import { Container, CardGroup, Card } from "react-bootstrap";
import ketinggian from "../../assets/image/ketinggian.png";
import kekeruhan from "../../assets/image/kekeruhan.png";
import debit from "../../assets/image/arus.png";
import axios from "axios";

export default function Cards() {
  const [kondisiAir, setKondisiAir] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/kondisiair")
      .then((res) => {
        setKondisiAir(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container style={{ marginTop: "5rem" }}>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={ketinggian} />
          <Card.Body>
            <Card.Title>Ketinggian Air</Card.Title>
            <Card.Text>
              Ketinggian Air pada Bendungan adalah <h1>10m</h1>
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
    </Container>
  );
}
