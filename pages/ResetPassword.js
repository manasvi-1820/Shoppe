import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import styles from "../styles/resetPassword.module.css";

const ResetPassword = () => {
  return (
    <>
      <Header border={true} />

      <Container className={styles.resetPasswordContainer}>
        <div className={styles.mainDiv}>
          <h3>Have you Forgotten Your Password ?</h3>
          <h4>Lost password</h4>
          <p>
            If you've forgotten your password, enter your e-mail address and
            we'll send you an e-mail
          </p>
          <Form className={styles.form}>
            <Form.Group
              className="mb-3"
              controlId="formGroupEmail"
              className={styles.formControlCol}
            >
              <Form.Control
                type="email"
                placeholder="Email"
                className={styles.formControl}
              />
            </Form.Group>

            <div className={styles.resetButtonDiv}>
              <Button
                variant="dark"
                type="submit"
                className={styles.resetButton}
              >
                RESET PASSWORD
              </Button>
            </div>
          </Form>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default ResetPassword;
