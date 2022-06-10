import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/ourStory.module.css";
import blog from "../json/blogPage.json";

const OurStory = () => {
  return (
    <>
      <Header border={true} />

      <Container className={styles.ourStoryContainer}>
        <Row>
          <Col
            xl={{ span: 6, offset: 3 }}
            lg={{ span: 8, offset: 2 }}
            md={{ span: 10, offset: 1 }}
            sm={12}
          >
            <h3>About</h3>
            <h5>Who we are and why we do what we do!</h5>
            <p>
              Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
              sollicitudin ante a, gravida arcu. Nam fringilla molestie velit,
              eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor
              magna et, placerat urna. Curabitur eu magna enim. Proin placerat
              tortor lacus, ac sodales lectus placerat quis.{" "}
            </p>
            <h4>Top trends</h4>

            {blog.map((item, index) => {
              if (index == 3) {
                return <img src={item.image} className={styles.image} />;
              }
            })}

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              placerat, augue a volutpat hendrerit, sapien tortor faucibus
              augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
              facilisis consequat sed eu felis.{" "}
            </p>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              placerat, augue a volutpat hendrerit, sapien tortor faucibus
              augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
              facilisis consequat sed eu felis.
            </h2>
            <ul>
              <li>consectetur adipiscing elit. Aliquam placerat</li>
              <li>Lorem ipsum dolor sit amet consectetur</li>
            </ul>

            <h4>Produced with care</h4>
            {blog.map((item, index) => {
              if (index == 0) {
                return <img src={item.image} className={styles.image} />;
              }
            })}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              placerat, augue a volutpat hendrerit, sapien tortor faucibus
              augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
              facilisis consequat sed eu felis. Nunc sed porta augue. Morbi
              porta tempor odio, in molestie diam bibendu.
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default OurStory;
