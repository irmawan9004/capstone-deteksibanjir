import React, { useEffect } from "react";
import { useState } from "react";
import { Container, CardGroup, Card } from "react-bootstrap";
import ketinggian_aman from "../../assets/image/aman_tinggi.png";
import kekeruhan_aman from "../../assets/image/aman_keruh.png";
import debit_aman from "../../assets/image/aman_arus.png";
import axios from "axios";

export default function Cards() {
  const [kondisiAirSekarang, setKondisiAirSekarang] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/kondisiair")
      .then((res) => {
        setKondisiAirSekarang(res.data.result[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container
      style={{ marginTop: "5rem" }}
      className="d-flex justify-content-between"
    >
      <CardGroup>
        <Card
          border={
            kondisiAirSekarang.tinggi >= 170
              ? "danger"
              : kondisiAirSekarang.tinggi < 170 &&
                kondisiAirSekarang.tinggi >= 150
              ? "warning"
              : "success"
          }
          style={{ width: "25rem", borderRadius: "1.3rem" }}
          className="d-flex justify-content-between mr-4"
        >
          <Card.Header>Ketinggian Air</Card.Header>
          <Card.Body className="d-flex justify-content-between ">
            <div>
              <h1 className="fw-bolder fs-1 mb-3">
                {kondisiAirSekarang.tinggi} Cm
              </h1>
              <h5>
                Ketinggian Air :{" "}
                {kondisiAirSekarang.tinggi >= 170 ? (
                  <span className="fw-bolder text-danger"> Waspada</span>
                ) : kondisiAirSekarang.tinggi < 170 &&
                  kondisiAirSekarang.tinggi >= 150 ? (
                  <span className="fw-bolder text-warning">Siaga</span>
                ) : (
                  <span className="fw-bolder text-success">Aman</span>
                )}
              </h5>
            </div>

            <img
              src={ketinggian_aman}
              width={90}
              height={100}
              alt="ketinggian"
            />
          </Card.Body>
        </Card>

        <br />
      </CardGroup>
      <CardGroup>
        {" "}
        <Card
          border={
            kondisiAirSekarang.debit >= 100
              ? "danger"
              : kondisiAirSekarang.debit < 100 && kondisiAirSekarang.debit >= 82
              ? "warning"
              : "success"
          }
          style={{ width: "25rem", borderRadius: "1.3rem" }}
        >
          <Card.Header>Kecepatan Air</Card.Header>
          <Card.Body className="d-flex justify-content-between ">
            <div>
              <h1 className="fw-bolder fs-1 mb-3">
                {kondisiAirSekarang.debit} M/s
              </h1>
              <h5>
                Kecepatan Air :{" "}
                {kondisiAirSekarang.debit >= 100 ? (
                  <span className="fw-bolder text-danger"> Waspada</span>
                ) : kondisiAirSekarang.debit < 100 &&
                  kondisiAirSekarang.debit >= 82 ? (
                  <span className="fw-bolder text-warning">Siaga</span>
                ) : (
                  <span className="fw-bolder text-success">Aman</span>
                )}
              </h5>
            </div>
            <img src={debit_aman} alt="ketinggian" />
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup>
        {" "}
        <Card
          border={
            kondisiAirSekarang.keruh >= 1000
              ? "danger"
              : kondisiAirSekarang.keruh < 1000 &&
                kondisiAirSekarang.keruh >= 800
              ? "warning"
              : "success"
          }
          style={{ width: "25rem", borderRadius: "1.3rem" }}
        >
          <Card.Header>Kekeruhan Air</Card.Header>
          <Card.Body>
            <div className="d-flex justify-content-between ">
              <div>
                <h1 className="fw-bolder fs-1 mb-3">
                  {kondisiAirSekarang.keruh} NTU
                </h1>
                <h5>
                  Kekeruhan Air :{" "}
                  {kondisiAirSekarang.keruh >= 1000 ? (
                    <span className="fw-bolder text-danger"> Waspada</span>
                  ) : kondisiAirSekarang.keruh < 1000 &&
                    kondisiAirSekarang.keruh >= 800 ? (
                    <span className="fw-bolder text-warning">Siaga</span>
                  ) : (
                    <span className="fw-bolder text-success">Aman</span>
                  )}
                </h5>
              </div>
              <img
                src={kekeruhan_aman}
                width={90}
                height={90}
                alt="ketinggian"
              />
            </div>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
}
