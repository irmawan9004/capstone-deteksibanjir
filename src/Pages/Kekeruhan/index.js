import React from "react";
import { Container, Table, Pagination } from "react-bootstrap";
import NavbarWeb from "../../Components/Navbar";
import Chart from "../../Components/Chart";

export default function Kekeruhan() {
  let active = 3;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <NavbarWeb />
      <Container
        className="min-vh-100"
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          height: "100%",
          justifyContent: "center",
          marginTop: "6rem",
        }}
      >
        <Chart />
        <h1
          style={{
            marginTop: "4rem",
          }}
        >
          Data Riwayat Ketinggian Air Bendungan
        </h1>
        <div
          className="p"
          style={{
            marginBottom: "1.5rem",
          }}
        >
          Last Updated 7 minutes ago
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Tanggal</th>
              <th>Jam</th>
              <th>Kekeruhan Air</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>7 Agustus 2023</td>
              <td>08:00 WIB</td>
              <td>2m3/m</td>
              <td>Aman</td>
            </tr>
            <tr>
              <td>1</td>
              <td>7 Agustus 2023</td>
              <td>08:00 WIB</td>
              <td>2m3/m</td>
              <td>Aman</td>
            </tr>
            <tr>
              <td>1</td>
              <td>7 Agustus 2023</td>
              <td>08:00 WIB</td>
              <td>2m3/m</td>
              <td>Aman</td>
            </tr>
            <tr>
              <td>1</td>
              <td>7 Agustus 2023</td>
              <td>08:00 WIB</td>
              <td>2m3/m</td>
              <td>Aman</td>
            </tr>
            <tr>
              <td>1</td>
              <td>7 Agustus 2023</td>
              <td>08:00 WIB</td>
              <td>2m3/m</td>
              <td>Aman</td>
            </tr>
            <tr>
              <td>1</td>
              <td>7 Agustus 2023</td>
              <td>08:00 WIB</td>
              <td>2m3/m</td>
              <td>Aman</td>
            </tr>
            <tr>
              <td>1</td>
              <td>7 Agustus 2023</td>
              <td>08:00 WIB</td>
              <td>2m3/m</td>
              <td>Aman</td>
            </tr>
            <tr>
              <td>1</td>
              <td>7 Agustus 2023</td>
              <td>08:00 WIB</td>
              <td>2m3/m</td>
              <td>Aman</td>
            </tr>
            <tr>
              <td>1</td>
              <td>7 Agustus 2023</td>
              <td>08:00 WIB</td>
              <td>2m3/m</td>
              <td>Aman</td>
            </tr>
            <tr>
              <td>1</td>
              <td>7 Agustus 2023</td>
              <td>08:00 WIB</td>
              <td>2m3/m</td>
              <td>Aman</td>
            </tr>
            <tr>
              <td>1</td>
              <td>7 Agustus 2023</td>
              <td>08:00 WIB</td>
              <td>2m3/m</td>
              <td>Aman</td>
            </tr>
            <tr>
              <td>1</td>
              <td>7 Agustus 2023</td>
              <td>08:00 WIB</td>
              <td>2m3/m</td>
              <td>Aman</td>
            </tr>
            <tr>
              <td>1</td>
              <td>7 Agustus 2023</td>
              <td>08:00 WIB</td>
              <td>2m3/m</td>
              <td>Aman</td>
            </tr>
          </tbody>
        </Table>
        <Pagination
          style={{
            marginLeft: "auto",
          }}
        >
          <Pagination.Prev />
          {items}
          <Pagination.Next />
        </Pagination>
      </Container>
    </div>
  );
}
