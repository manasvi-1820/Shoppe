import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "../styles/404.module.css";

const Error404 = () => {
  return (
    <>
      <div className={styles.header}>
        <Header border={true} search={false} />
      </div>

      <Container className={styles.errorContainer}>
        <Row>
          <Col xl={{ span: 4, offset: 4 }} className={styles.col}>
            <h4>404 ERROR</h4>

            <div className={styles.pageDiv}>
              <p>This page not found; </p>
              <p>back to home and start again</p>
            </div>

            <div className={styles.buttonDiv}>
              <Button>HOMEPAGE</Button>
            </div>
          </Col>
        </Row>
      </Container>

      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

export default Error404;
