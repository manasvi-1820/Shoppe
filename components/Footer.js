import React from "react";
import {
  Container,
  Row,
  Col,
  NavLink,
  InputGroup,
  FormControl,
  Form,
} from "react-bootstrap";
import styles from "../styles/footer.module.css";
import Image from "next/image";
import insta from "../public/Images/insta.png";
import twitter from "../public/Images/twitter.png";
import arrow from "../public/Images/arrow.png";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import { useRouter } from "next/router";

const Footer = () => {
  const route = useRouter();
  const PrivacyPolicy = () => {
    route.push("/PrivacyPolicy");
  };

  return (
    <Container className={styles.footerContainer}>
      <div className={styles.line}></div>
      <Row className={styles.footerRow}>
        <Col xl={8} lg={8} md={12} sm={12} xs={12} className={styles.col}>
          <NavLink href="/Contact" className={styles.navlink}>
            CONTACT
          </NavLink>

          <NavLink className={styles.navlink}>TERMS OF SERVICES</NavLink>

          <NavLink className={styles.navlink}>SHIPPING AND RETURNS</NavLink>
        </Col>

        <Col xl={4} lg={4} md={6} sm={12} xs={12} className={styles.emailDiv}>
          <InputGroup className={styles.inputGroupDiv}>
            <FormControl
              className={styles.formControl}
              placeholder="Give an email, get the newsletter."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2" className={styles.inputGroup}>
              <Image src={arrow} className={styles.arrow}></Image>
            </InputGroup.Text>
          </InputGroup>
        </Col>

        <Form.Group
          className="mb-3"
          id="formCheckbox"
          className={styles.checkbox}
        >
          <Form.Check
            className={styles.label}
            type="checkbox"
            label="I agree to the website’s terms and conditions"
          />
        </Form.Group>
      </Row>

      <Row className={styles.copyrightRow}>
        <div className={styles.copyrightDiv}>
          <h5 className={styles.copyright}>
            © 2021 Shelly. <span className={styles.span}>Terms of use</span> and
            <span className={styles.span} onClick={() => PrivacyPolicy()}>
              {" "}
              privacy policy.
            </span>
          </h5>

          <div className={styles.imageDiv}>
            <h6 className={styles.followUs}>Follow us</h6>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className={styles.line1}></div>
            <a href="https://www.linkedin.com">
              <div className={styles.linkedInImage}>
                <img
                  src="./Images/linked.svg"
                  className={styles.linkedin}
                  href="www.linkedin.com"
                />
              </div>
            </a>
            <a href="https://www.facebook.com">
              <div className={styles.fbImage}>
                <img src="./Images/fb1.svg" className={styles.fb} />
              </div>
            </a>
            <a href="https://www.instagram.com">
              <div className={styles.instaImage}>
                <img src="./Images/insta.svg" className={styles.insta} />
              </div>
            </a>
            <a href="https://www.twitter.com">
              <div className={styles.twitterImage}>
                <img src="./Images/twitter.svg" className={styles.twitter} />
              </div>
            </a>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Footer;
