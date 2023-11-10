import React, { useState, useEffect } from "react";
import { Container, Table, Form, Col, Row, Button } from "react-bootstrap";
import NavbarWeb from "../../Components/Navbar";
import Chart from "../../Components/Chart";
import axios from "axios";
import dateFormat from "dateformat";
import ReactPaginate from "react-paginate";

export default function Ketinggian() {
  const [kondisiAir, setKondisiAir] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [chartData, setChartData] = useState([]);

  // let active = 3;

  let name = "Ketinggian air";

  useEffect(() => {
    getKondisiAir();
  }, [page, keyword]);

  const getKondisiAir = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/kondisiair?search_query=${keyword}&page=${page}&limit=${limit}`
      );
      const newChartData = response.data.result.map((item) => item.tinggi);
      setChartData(newChartData);
      setKondisiAir(response.data.result);
      setPage(response.data.page);
      setPages(response.data.totalPage);
      setRows(response.data.totalRows);
      setIsLoading(false); // Data has been fetched, set isLoading to false
    } catch (error) {
      setIsLoading(false); // Handle the error and set isLoading to false
      console.error("Error fetching data:", error);
    }
  };

  const changePage = ({ selected }) => {
    const startIndex = selected * limit;
    const endIndex = startIndex + limit;
    const pageData = kondisiAir.slice(startIndex, endIndex);

    setChartData(pageData); // Update chartData with the data of the current page

    setPage(selected);
    if (selected === 9) {
      setMsg("Silahkan Cari Tanggal Yang Ingin Dilihat");
    } else {
      setMsg("");
    }
  };

  const searchData = (e) => {
    e.preventDefault();
    setPage(0);
    setKeyword(query);
  };

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
        {isLoading ? (
          <div>loading</div>
        ) : (
          <Chart name={name} data={chartData} />
        )}
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
          Last Updated 1 minutes ago
        </div>
        <Form inline onSubmit={searchData}>
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2 mb-3"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Search</Button>
            </Col>
          </Row>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Tanggal</th>
              <th>Jam</th>
              <th>Tinggi Air</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {kondisiAir.map((kondisi_air) => {
              return (
                <tr key={kondisi_air.id}>
                  <td>{kondisi_air.id}</td>
                  <td>
                    {dateFormat(kondisi_air.waktu, "dddd, mmmm dS, yyyy")}
                  </td>
                  <td>{dateFormat(kondisi_air.waktu, " h:MM:ss TT")}</td>
                  <td>{kondisi_air.tinggi}</td>
                  <td>
                    {kondisi_air.tinggi > 100
                      ? "siaga"
                      : kondisi_air.tinggi <= 100 && kondisi_air.tinggi >= 80
                      ? "waspada"
                      : "aman"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <p>
          Total Rows : {rows} | Page : {rows ? page + 1 : 0} / {pages}
        </p>
        <p className="has-text-centered has-text-danger">{msg}</p>
        <nav
          className="pagination justify-content-end"
          role="navigation"
          key={rows}
          aria-label="pagination"
        >
          <ReactPaginate
            previousLabel={"< Prev"}
            nextLabel={"Next >"}
            pageCount={Math.min(10, pages)}
            onPageChange={changePage}
            containerClassName={"pagination justify-content-end"}
            pageLinkClassName={"page-link"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            activeLinkClassName={"page-item active is-rounded "}
            disabledLinkClassName={"page-item disabled"}
          />
        </nav>
      </Container>
    </div>
  );
}
