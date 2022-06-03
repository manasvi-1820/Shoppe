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
import linkedin from "../public/Images/linkedin.png";
import fb from "../public/Images/fb.png";
import insta from "../public/Images/insta.png";
import twitter from "../public/Images/twitter.png";
import arrow from "../public/Images/arrow.png";

const Footer = () => {
  return (
    <Container className={styles.footerContainer}>
      <div className={styles.line}></div>
      <Row className={styles.footerRow}>
        <Col xl={8} lg={8} md={12} sm={12} xs={12} className={styles.col}>
          <NavLink className={styles.navlink}>CONTACT</NavLink>

          <NavLink className={styles.navlink}>TERMS OF SERVICES</NavLink>

          <NavLink className={styles.navlink}>SHIPPING AND RETURNS</NavLink>
        </Col>

        <Col xl={4} lg={4} md={6} sm={12} xs={12} className={styles.emailDiv}>
          <InputGroup className="mb-3">
            <FormControl
              className={styles.formControl}
              placeholder="Give an email, get the newsletter."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2" className={styles.inputGroup}>
              <Image src={arrow}></Image>
            </InputGroup.Text>
          </InputGroup>
        </Col>

        <Form.Group
          className="mb-3"
          id="formGridCheckbox"
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
            © 2021 Shelly. <span className={styles.span}>Terms of use</span> and{" "}
            <span className={styles.span}>privacy policy.</span>
          </h5>

          <div className={styles.imageDiv}>
            <h6 className={styles.followUs}>Follow us</h6>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className={styles.line1}></div>
            <div className={styles.linkedInImage}>
              <Image src={linkedin} width={18} height={18}></Image>
            </div>
            <div className={styles.fbImage}>
              <Image src={fb} width={10} height={18}></Image>
            </div>
            <div className={styles.instaImage}>
              <Image src={insta} width={18} height={18}></Image>
            </div>
            <div className={styles.twitterImage}>
              <Image src={twitter} width={20} height={17}></Image>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Footer;
