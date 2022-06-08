import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import styles from "../styles/contact.module.css";

const Contact = () => {
  return (
    <>
      <Header border={true} />

      <Container className={styles.contactContainer}>
        <h3>Contact Us</h3>
        <h4>Contact</h4>
        <p>
          Say Hello send us your thoughts about our products or share your ideas
          with our Team!
        </p>

        <Form className={styles.form}>
          <Row className="mb-3" className={styles.formControlRow}>
            <Form.Group
              as={Col}
              controlId="formGridEmail"
              className={styles.formControlCol}
            >
              <Form.Control
                type="text"
                placeholder="First name"
                className={styles.formControl}
              />
            </Form.Group>

            <Form.Group
              as={Col}
              controlId="formGridPassword"
              className={styles.formControlCol}
            >
              <Form.Control
                type="text"
                placeholder="Last name"
                className={styles.formControl}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3" className={styles.formControlRow}>
            <Form.Group
              as={Col}
              controlId="formGridEmail"
              className={styles.formControlCol}
            >
              <Form.Control
                type="email"
                placeholder="Email"
                className={styles.formControl}
              />
            </Form.Group>

            <Form.Group
              as={Col}
              controlId="formGridState"
              className={styles.formControlCol}
            >
              <Form.Select
                defaultValue="Choose..."
                className={styles.formControl}
              >
                <option>Subject</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className={styles.formControlRow}>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              className={styles.formControlColTextarea}
            >
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Message"
                className={styles.formControl}
              />
            </Form.Group>
          </Row>

          <div className={styles.sendButtonDiv}>
            <Button variant="dark" type="submit" className={styles.sendButton}>
              Send
            </Button>
          </div>
        </Form>
      </Container>

      <Footer />
    </>
  );
};

export default Contact;
