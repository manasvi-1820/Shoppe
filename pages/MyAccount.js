import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import styles from "../styles/myAccount.module.css";
import { useRouter } from "next/router";

const MyAccount = () => {
  const route = useRouter();
  const [color, setColor] = useState(true);
  const [newColor, setNewColor] = useState(false);
  const ClickMe = () => {
    setColor(true);
    setNewColor(false);
  };
  const NextButton = () => {
    setColor(false);
    setNewColor(true);
  };
  const ResetPassword = () => {
    route.push("/ResetPassword");
  };
  return (
    <>
      <Header border={true} />

      <Container className={styles.myAccountContainer}>
        <div className={styles.mainDiv}>
          <h3>My account</h3>
          <div className={styles.btnDiv}>
            <button
              className={styles.btn}
              style={{ backgroundColor: color ? "#FFFFFF" : "#EFEFEF" }}
              onClick={() => ClickMe()}
            >
              <span
                className={styles.btnSpan}
                style={{ color: color ? "#000000" : "#000000" }}
              >
                Sign in
              </span>
            </button>
            <button
              className={styles.btn}
              style={{ backgroundColor: newColor ? "#FFFFFF" : "#EFEFEF" }}
              onClick={() => NextButton()}
            >
              <span
                className={styles.btnSpan2}
                style={{ color: newColor ? "#000000" : "#000000" }}
              >
                Register
              </span>
            </button>
          </div>
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

            <Form.Group
              className="mb-3"
              controlId="formGroupPassword"
              className={styles.formControlCol}
            >
              <Form.Control
                type="password"
                placeholder="Password"
                className={styles.formControl}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              id="formGridCheckbox"
              className={styles.formControlColCheckbox}
            >
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <div className={styles.sendButtonDiv}>
              <Button
                variant="dark"
                type="submit"
                className={styles.sendButton}
              >
                SIGN IN
              </Button>
            </div>
            <p onClick={() => ResetPassword()}>
              Have you forgotten your password?
            </p>
          </Form>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default MyAccount;
