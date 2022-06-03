import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Nav,
  Container,
  Row,
  Col,
  Navbar,
  Form,
  Button,
} from "react-bootstrap";
import styles from "../styles/productDetails.module.css";
import styles1 from "../styles/products.module.css";
import products from "../json/products.json";
import Products from "../components/Products";
import Rate from "../components/Rate";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const [description, setDescription] = useState();
  const [additional, setAdditional] = useState();
  const [reviews, setReviews] = useState();

  const ShowDescription = () => {
    setDescription(!description);
    setAdditional(false);
    setReviews(false);
  };

  const ShowAdditionalinfo = () => {
    setAdditional(!additional);
    setDescription(false);
    setReviews(false);
  };

  const ShowReviews = () => {
    setReviews(!reviews);
    setDescription(false);
    setAdditional(false);
  };

  useEffect(() => {
    // const getProduct = async () => {
    //   const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    //   setProduct(await response.json());
    // };

    // getProduct();

    setProduct();
  }, []);

  return (
    <>
      <Header />

      {/* <div className={styles.imageDiv}>
        <img src={product.image} className={styles.productsImage} />

        <div className={styles.hoverDiv}>
          <div className={styles.hoverImage}>
            <Image src={cart} width={25} height={25}></Image>
          </div>
          <div className={styles.hoverImage}>
            <Image src={eye} width={32} height={32}></Image>
          </div>
          <div className={styles.hoverImage}>
            <Image src={wishlist} width={25} height={25}></Image>
          </div>
        </div>
      </div>

      <h5>{product.name}</h5>
      <h4>{product.price}</h4>

      <div></div> */}

      <Container className={styles.productDetailsContainer}>
        <div className={styles.productDetailsCart}>
          <Row>
            <Col xl={7}>hiii</Col>
            <Col xl={5}>
              <Rate />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                placerat, augue a volutpat hendrerit, sapien tortor faucibus
                augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
                facilisis consequat sed eu felis.{" "}
              </p>
              <h3>
                SKU: <span>12</span>
              </h3>
              <h3>
                Categories: <span>Fashion, Style</span>
              </h3>
            </Col>
          </Row>
        </div>

        <Navbar>
          <Nav className={styles.productDetails}>
            <Nav.Link
              className={styles.productNavLinks}
              onClick={() => ShowDescription()}
            >
              Description
            </Nav.Link>

            <Nav.Link
              className={styles.productNavLinks}
              onClick={() => ShowAdditionalinfo()}
            >
              Aditional information
            </Nav.Link>

            <Nav.Link
              className={styles.productNavLinks}
              onClick={() => ShowReviews()}
            >
              Reviews(0)
            </Nav.Link>
          </Nav>
        </Navbar>
        <div className={styles.border}></div>

        {description && (
          <>
            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              placerat, augue a volutpat hendrerit, sapien tortor faucibus
              augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
              facilisis consequat sed eu felis. Nunc sed porta augue. Morbi
              porta tempor odio, in molestie diam bibendum sed.
            </p>
            <div className={styles.descriptionDiv}>
              <h3 className={styles.similarItems}>Similar Items</h3>
              <Row className={styles.descriptionRow}>
                {products.map((item, index) => {
                  if (index < 3) {
                    return (
                      <Col
                        xl={4}
                        lg={4}
                        md={6}
                        sm={6}
                        xs={6}
                        className={styles1.productsCol}
                        key={index + "product"}
                      >
                        <Products item={item} />
                      </Col>
                    );
                  }
                })}
              </Row>
            </div>
          </>
        )}

        {additional && (
          <>
            <div className={styles.additionalDiv}>
              <h6 className={styles.additionalInfo}>
                Weight: &nbsp;&nbsp;
                <span className={styles.additionalSpan}>0.3 kg</span>
              </h6>
              <h6 className={styles.additionalInfo}>
                Dimentions:&nbsp;&nbsp;
                <span className={styles.additionalSpan}>15 x 10 x 1 cm</span>
              </h6>
              <h6 className={styles.additionalInfo}>
                Colours:&nbsp;&nbsp;
                <span className={styles.additionalSpan}>
                  Black, Browns, White
                </span>
              </h6>
              <h6 className={styles.additionalInfo}>
                Material:&nbsp;&nbsp;
                <span className={styles.additionalSpan}>Metal</span>
              </h6>
            </div>

            <div className={styles.descriptionDiv}>
              <h3 className={styles.similarItems}>Similar Items</h3>
              <Row className={styles.additionalRow}>
                {products.map((item, index) => {
                  if (index < 3) {
                    return (
                      <Col
                        xl={4}
                        lg={4}
                        md={6}
                        sm={6}
                        xs={6}
                        className={styles1.productsCol}
                        key={index + "product"}
                      >
                        <Products item={item} />
                      </Col>
                    );
                  }
                })}
              </Row>
            </div>
          </>
        )}

        {reviews && (
          <>
            <Row className={styles.reviewsDivRow}>
              <Col xl={6} className={styles.reviewsCol}>
                <h5>2 Reviews for lira earings</h5>

                <div className={styles.mainDiv}>
                  <div className={styles.scarletWitchDiv}>
                    <div className={styles.scarletWitch}>
                      <h4>Scarlet withch</h4>&nbsp;&nbsp;
                      <span>6 May, 2020</span>
                    </div>
                    <Rate />
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet.
                    </p>
                  </div>

                  <div className={styles.borderLine}></div>

                  <div className={styles.scarletWitchDiv}>
                    <div className={styles.scarletWitch}>
                      <h4>Scarlet withch</h4>&nbsp;&nbsp;
                      <span>6 May, 2020</span>
                    </div>
                    <Rate />
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                      placerat.
                    </p>
                  </div>
                </div>
              </Col>

              <Col xl={6} className={styles.reviewsFormCol}>
                <h5>Add a Review</h5>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>

                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Your Review*"
                      className={styles.formControl}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder="Enter your name*"
                      className={styles.formControl}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="password"
                      placeholder="Enter your Email*"
                      className={styles.formControl}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="Save my name, email, and website in this browser for the next time I comment"
                      className={styles.checkbox}
                    />
                  </Form.Group>

                  <h6>Your Rating*</h6>
                  <Rate />

                  <Button
                    variant="primary"
                    type="submit"
                    className={styles.submit}
                  >
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>

            <h3 className={styles.similarItems}>Similar Items</h3>
            <Row className={styles.reviewsRow}>
              {products.map((item, index) => {
                if (index < 3) {
                  return (
                    <Col
                      xl={4}
                      lg={4}
                      md={6}
                      sm={6}
                      xs={6}
                      className={styles1.productsCol}
                      key={index + "product"}
                    >
                      <Products item={item} />
                    </Col>
                  );
                }
              })}
            </Row>
          </>
        )}
      </Container>

      <Footer />
    </>
  );
};

export default ProductDetails;
