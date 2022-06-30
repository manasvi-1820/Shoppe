import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/viewOrder.module.css";

const ViewOrder = () => {
  return (
    <>
      <Header border={true} />

      <Container className={styles.viewOrderContainer}>
        <Row>
          <Col xl={6} lg={6} md={6} sm={6} xs={12}>
            <h4>Order Details</h4>
          </Col>
          <Col xl={6} lg={6} md={6} sm={6} xs={12}>
            <h4 className={styles.orderSummary}> ORDER Summary</h4>
          </Col>
        </Row>
        <Row>
          <Col
            xl={3}
            lg={3}
            md={6}
            sm={6}
            xs={12}
            className={styles.viewOrderCol1}
          >
            <h3 className={styles.orderNo}>ORDER NUMBER</h3>
            <p>1879605573994</p>
            <h5>EMAIL</h5>
            <p>Vitathemes@gmail.com</p>
            <h5>PAYMENT METHOD</h5>
            <p>Mastercard*************7865</p>
            <h5>ORDER DATE</h5>
            <p>October 8,2020</p>
          </Col>

          <Col
            xl={3}
            lg={3}
            md={6}
            sm={6}
            xs={12}
            className={styles.viewOrderCol2}
          >
            <h4 className={styles.deliveryDetails}>Delivery Details</h4>
            <h3 className={styles.deliveryOptions}>DELIVERY OPTIONS</h3>
            <p>Standard delivery</p>
            <h5>DELIVERY ADDRESS</h5>
            <p>
              Kristian holst 34
              <br /> old street W1F
              <br /> 7NU london
              <br /> United Kingdom
            </p>
            <h5>CONTACT NUMBER</h5>
            <p>+44 8749790988</p>
          </Col>
          <Col
            xl={6}
            lg={6}
            md={12}
            sm={12}
            xs={12}
            className={styles.viewOrderCol3}
          >
            <h4 className={styles.orderSummaryMobile}> ORDER Summary</h4>
            <div className={styles.viewOrderCol3Div}>
              <div className={styles.viewOrderDiv}>
                <h5>PRODUCT</h5>
                <h5>TOTAL</h5>
              </div>

              <div className={styles.earringsDiv}>
                <div className={styles.earrings}>
                  <p>Lira Earrings</p>
                  <p>$64</p>
                </div>
                <div className={styles.earrings}>
                  <p>Ollie Earrings</p>
                  <p>$10</p>
                </div>
                <div className={styles.earrings}>
                  <p>Kaede Hair Pin</p>
                  <p>$10</p>
                </div>
              </div>

              <div className={styles.viewOrderDiv}>
                <h5>SUBTOTAL</h5>
                <p>$85</p>
              </div>
              <div className={styles.viewOrderDiv}>
                <h5>SHIPPING</h5>
                <p>Free shipping</p>
              </div>
              <div className={styles.totalDiv}>
                <h6>TOTAL</h6>
                <h6>$85</h6>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default ViewOrder;
