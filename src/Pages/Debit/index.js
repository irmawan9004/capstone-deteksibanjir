import React from "react";
import { Container, Table, Pagination } from "react-bootstrap";
import NavbarWeb from "../../Components/Navbar";
export default function Debit() {
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
      <Container>
        <h1>Data Riwayat Debit Air Bendungan</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Tanggal</th>
              <th>Jam</th>
              <th>Debit Air</th>
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
        <Pagination>
          <Pagination.Prev />
          {items}
          <Pagination.Next />
        </Pagination>
      </Container>
    </div>
  );
}
