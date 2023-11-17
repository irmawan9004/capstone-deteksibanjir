import React from "react";
import { Container } from "react-bootstrap";
import NavbarWeb from "../../Components/Navbar";
import Cards from "../../Components/Card";
import Hero from "../../Components/Hero";

export default function Dashboard() {
  const pageTitle = "Dashboard - Portal Bendungan";
  document.title = pageTitle;
  return (
    <div
      style={{
        flex: "1",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavbarWeb />
      <Container
        style={{
          flex: "1",
          display: "flex",
          alignItems: "center",
          zIndex: "99",
          marginTop: "8rem",
        }}
      >
        <Hero />
      </Container>
      <Cards />
    </div>
  );
}
