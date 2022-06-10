import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Container } from "react-bootstrap";
import styles from "../styles/privacyPolicy.module.css";

const PrivacyPolicy = () => {
  return (
    <>
      <Header border={true} />

      <Container className={styles.privacyContainer}>
        <div className={styles.privacyDiv}>
          <h3>Privacy Policy</h3>
          <p className={styles.duisRutrum}>
            Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
            sollicitudin ante a, gravida arcu. Nam fringilla molestie velit,
            eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor
            magna et, placerat urna. Curabitur eu magna enim. Proin placerat
            tortor lacus, ac sodales lectus placerat quis.{" "}
          </p>
          <h5 className={styles.security}>Security</h5>
          <p className={styles.duisRutrum}>
            Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
            sollicitudin ante a, gravida arcu. Nam fringilla molestie velit,
            eget pellentesque risus scelerisque.
          </p>
          <h5 className={styles.cookies}>Cookies</h5>
          <ul className={styles.unOrderList}>
            <li className={styles.list}>
              Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
              sollicitudin.
            </li>
            <li className={styles.list}>
              Nam fringilla molestie velit, eget pellentesque risus scelerisque
              a
            </li>
          </ul>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
