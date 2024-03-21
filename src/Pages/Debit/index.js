import React, { useState, useEffect } from "react";
import { Container, Table, Form, Col, Row, Button } from "react-bootstrap";
import NavbarWeb from "../../Components/Navbar";
import Chart from "../../Components/Chart";
import axios from "axios";
import dateFormat from "dateformat";
import ReactPaginate from "react-paginate";

export default function Kecepatan() {
  const pageTitle = "Debit Air - Portal Bendungan";
  document.title = pageTitle;
  const [kondisiAir, setKondisiAir] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(60);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [chartData, setChartData] = useState([]);

  // let active = 3;

  let name = "Debit air";
  let judul = "Grafik Debit Air ";

  useEffect(() => {
    getKondisiAir();
  }, [page, keyword]);

  const getKondisiAir = async () => {
    try {
      const response = await axios.get(
        `https://young-everglades-00873-d903e8dbc719.herokuapp.com/api/kondisiair?search_query=${keyword}&page=${page}&limit=${limit}`
      );
      const newChartData = response.data.result.map((item) => item.debit);
      console.log(newChartData);
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
          <div className="d-flex justify-content-center align-items-center">
            <h3>Chart Loading....</h3>
          </div>
        ) : (
          <Chart name={name} data={chartData} judul={judul} />
        )}
        <h2
          style={{
            marginTop: "4rem",
          }}
        >
          Data Riwayat Debit Air Bendungan
        </h2>
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
                placeholder="(YYYY-MM-DD)"
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
              <th>Kecepatan Air</th>
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
                  <td>{kondisi_air.debit}</td>
                  <td
                    className={
                      kondisi_air.debit > 100
                        ? "table-danger"
                        : kondisi_air.debit < 100 && kondisi_air.debit >= 82
                        ? "table-warning"
                        : "table-success"
                    }
                  >
                    {kondisi_air.debit > 100
                      ? "Siaga"
                      : kondisi_air.debit < 100 && kondisi_air.debit >= 82
                      ? "Waspada"
                      : "Aman"}
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
