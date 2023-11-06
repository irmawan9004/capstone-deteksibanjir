import React from "react";
import { Container, Image } from "react-bootstrap";
import image_footer from "../../assets/image/Footer.png";

export default function Footer() {
  return (
    <Container
      fluid
      style={{
        position: "absolute",
        bottom: "0",
      }}
    >
      <Image src={image_footer} width="100%" />;
    </Container>
  );
}
