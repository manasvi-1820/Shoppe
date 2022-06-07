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
  Accordion,
} from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/productDetails.module.css";
import styles1 from "../styles/products.module.css";
import products from "../json/products.json";
import Products from "../components/Products";
import Rate from "../components/Rate";
import Image from "next/image";
import email from "../public/Images/email.png";
import fb from "../public/Images/fb.png";
import insta from "../public/Images/insta.png";
import twitter from "../public/Images/twitter.png";

const ProductDetails = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    // autoplay: true,
    // autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // responsive: [
    //   {
    //     breakpoint: 767,
    //     settings: {
    //       slidesToScroll: 1,
    //       slidesToShow: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 576,
    //     settings: {
    //       slidesToScroll: 1,
    //       slidesToShow: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 420,
    //     settings: {
    //       slidesToScroll: 1,
    //       slidesToShow: 2,
    //     },
    //   },
    // ],
  };
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 2000,
    // autoplay: true,
    // autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  };
  // const { id } = useParams();
  // const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const [description, setDescription] = useState(true);
  const [additional, setAdditional] = useState(false);
  const [reviews, setReviews] = useState(false);

  const [descriptionAccordian, setDescriptionAccordian] = useState(false);
  const [additionalAccordian, setAdditionalAccordian] = useState(false);
  const [reviewsAccordian, setReviewsAccordian] = useState(false);

  const ShowDescription = () => {
    setDescription(true);
    setAdditional(false);
    setReviews(false);
    setIsActive(true);
  };

  const ShowAdditionalinfo = () => {
    setAdditional(true);
    setDescription(false);
    setReviews(false);
    setIsActive(false);
  };

  const ShowReviews = () => {
    setReviews(true);
    setDescription(false);
    setAdditional(false);
    setIsActive(false);
  };

  const ShowDescriptionAccordian = () => {
    setDescriptionAccordian(true);
  };

  const ShowAdditionalinfoAccordian = () => {
    setAdditionalAccordian(true);
  };

  const ShowReviewsAccordian = () => {
    setReviewsAccordian(true);
  };

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    setCount(count - 1);
  };

  // useEffect(() => {
  //   // const getProduct = async () => {
  //   //   const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  //   //   setProduct(await response.json());
  //   // };

  //   // getProduct();

  //   setProduct();
  // }, []);

  return (
    <>
      <Header border={true} />

      <Container className={styles.productDetailsContainer}>
        <div className={styles.productDetailsCart}>
          <Row>
            <Col xl={2} className={styles.sideImageCol}>
              {products.map((item, index) => {
                if (index < 1)
                  return (
                    <>
                      <img src={item.image} className={styles.sideImage1} />
                      <img src={item.image} className={styles.sideImage2} />
                      <img src={item.image} className={styles.sideImage3} />
                      <img src={item.image} className={styles.sideImage4} />
                    </>
                  );
              })}
            </Col>

            <Col xl={5} lg={6} md={12} className={styles.centerImageCol}>
              <Row>
                <Slider {...settings}>
                  {products.map((item, index) => {
                    if (index < 3)
                      return (
                        <>
                          <img
                            src={item.image}
                            className={styles.centerImage}
                          />
                        </>
                      );
                  })}
                </Slider>
              </Row>
            </Col>

            <Col xl={5} lg={6} md={12} className={styles.cartCol}>
              {products.map((item, index) => {
                if (index < 1)
                  return (
                    <>
                      <h5>{item.name}</h5>
                      <div className={styles.priceShareDiv}>
                        <h4>{item.price}</h4>
                        <button className={styles.shareButton}>
                          <img src="./Images/share-fill.svg" />
                        </button>
                      </div>
                    </>
                  );
              })}

              <div className={styles.ratingDiv}>
                <Rate />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <p className={styles.customerReviews}>1 customer review</p>
              </div>

              <p className={styles.loremIpsum}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                placerat, augue a volutpat hendrerit, sapien tortor faucibus
                augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
                facilisis consequat sed eu felis.
              </p>

              <button className={styles.addToCartResponsive}>
                ADD TO CART
              </button>
              <p className={styles.loremIpsumResponsive}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                placerat...
              </p>
              <button className={styles.viewMore}>
                View more <img src="./Images/arrow.svg" />
              </button>

              <div className={styles.buttonsDiv}>
                <div className={styles.buttons}>
                  <button className={styles.minus} onClick={Decrement}>
                    -
                  </button>
                  <div className={styles.count}>{count}</div>
                  <button className={styles.plus} onClick={Increment}>
                    +
                  </button>
                </div>

                <button className={styles.addToCart}>ADD TO CART</button>
              </div>

              <div className={styles.imageDiv}>
                <img src="./Images/IconColor.svg" />
                <div className={styles.line}></div>

                <div className={styles.images}>
                  <div className={styles.emailImage}>
                    <Image
                      src={email}
                      width={22}
                      height={18}
                      className={styles.emailImage}
                    ></Image>
                  </div>

                  <div className={styles.fbImage}>
                    <Image
                      src={fb}
                      width={10}
                      height={18}
                      className={styles.fbImage}
                    ></Image>
                  </div>
                  <div className={styles.instaImage}>
                    <Image
                      src={insta}
                      width={18}
                      height={18}
                      className={styles.instaImage}
                    ></Image>
                  </div>
                  <div className={styles.twitterImage}>
                    <Image
                      src={twitter}
                      width={20}
                      height={17}
                      className={styles.twitterImage}
                    ></Image>
                  </div>
                </div>
              </div>

              <h3 className={styles.skuCategories}>
                SKU: &nbsp;&nbsp;<span className={styles.span12}>12</span>
              </h3>
              <h3 className={styles.skuCategories}>
                Categories: &nbsp;&nbsp;
                <span className={styles.spanFashion}>Fashion, Style</span>
              </h3>

              <div className={styles.cartColBorderBottom}></div>
            </Col>
          </Row>
        </div>

        <div className={styles.bottomNavbarMain}>
          <Navbar>
            <Nav className={styles.productDetails}>
              <Nav.Link
                className={styles.productNavLinks}
                onClick={() => ShowDescription()}
                active={isActive}
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
            <div className={styles.border}></div>
          </Navbar>
        </div>

        <Accordion defaultActiveKey="" className={styles.accordianNavbar}>
          <Accordion.Item eventKey="0">
            <Accordion.Header
              className={styles.descriptionAccordian}
              onClick={() => ShowDescriptionAccordian()}
            >
              Description
            </Accordion.Header>
            <Accordion.Body className={styles.descriptionAccordian}>
              {descriptionAccordian && (
                <>
                  <p className={styles.paragraph}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam placerat, augue a volutpat hendrerit, sapien tortor
                    faucibus augue, a maximus elit ex vitae libero. Sed quis
                    mauris eget arcu facilisis consequat sed eu felis. Nunc sed
                    porta augue. Morbi porta tempor odio, in molestie diam
                    bibendum sed.
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
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header onClick={() => ShowAdditionalinfoAccordian()}>
              Aditional information
            </Accordion.Header>
            <Accordion.Body>
              {additionalAccordian && (
                <>
                  <div className={styles.additionalDiv}>
                    <h6 className={styles.additionalInfo}>
                      Weight: &nbsp;&nbsp;
                      <span className={styles.additionalSpan}>0.3 kg</span>
                    </h6>
                    <h6 className={styles.additionalInfo}>
                      Dimentions:&nbsp;&nbsp;
                      <span className={styles.additionalSpan}>
                        15 x 10 x 1 cm
                      </span>
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
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header
              className={styles.reviewsAccordian}
              onClick={() => ShowReviewsAccordian()}
            >
              Reviews(0)
            </Accordion.Header>
            <Accordion.Body>
              {reviewsAccordian && (
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
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet.
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
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Aliquam placerat.
                          </p>
                        </div>
                      </div>
                    </Col>

                    <Col xl={6} className={styles.reviewsFormCol}>
                      <h5>Add a Review</h5>
                      <p>
                        Your email address will not be published. Required
                        fields are marked *
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

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Control
                            type="password"
                            placeholder="Enter your Email*"
                            className={styles.formControl}
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
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
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <div className={styles.border}></div>

        <div className={styles.bottomNavbarState}>
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
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut
                        laoreet.
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
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut
                        laoreet. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Aliquam placerat.
                      </p>
                    </div>
                  </div>
                </Col>

                <Col xl={6} className={styles.reviewsFormCol}>
                  <h5>Add a Review</h5>
                  <p>
                    Your email address will not be published. Required fields
                    are marked *
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
        </div>

        <div className={styles.similarItemsDivResponsive}>
          <h3 className={styles.similarItems1}>Similar Items</h3>
          <Row className={styles.descriptionRow}>
            <Slider {...settings1} className={styles.slider}>
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
            </Slider>
          </Row>
        </div>

        <div className={styles.continueShoppingDiv}>
          <button className={styles.continueShopping}>Continue shopping</button>
          <img src="./Images/arrow.svg" />
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default ProductDetails;
