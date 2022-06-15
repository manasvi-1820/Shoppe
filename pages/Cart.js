import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import TopButton from "../components/TopButton";

const Cart = () => {
  return (
    <>
      <TopButton />
      <Header />
      <Container>
        <Row>
          <Col xl={6} className="bg-info">
            hii
          </Col>
          <Col xl={6} className="bg-warning">
            hey
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
