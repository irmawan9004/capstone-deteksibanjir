import React, { useState } from "react";
import { Container, Image } from "react-bootstrap";
import NavbarWeb from "../../Components/Navbar";
import kondisi from "../../assets/image/Kondisi Bendungan.png";
import Cards from "../../Components/Card";

export default function Dashboard() {
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
        <Image src={kondisi} fluid />;
      </Container>
      <Cards />
    </div>
  );
}
