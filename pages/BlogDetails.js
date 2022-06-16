import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  Container,
  Row,
  Col,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import TopButton from "../components/TopButton";
import styles from "../styles/blogDetails.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blog from "../json/blogPage.json";
import comments from "../json/comments.json";

const BlogDetails = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <TopButton />
      <Header />

      <Container className={styles.blogDetailsContainer}>
        <Row>
          <Col xl={3} lg={3} className={styles.blogColSidebar}>
            <div className={styles.searchImageDiv}>
              <div className={styles.searchImageDiv1}>
                <img
                  src="./Images/search1.png"
                  width={16}
                  height={16}
                  className={styles.searchImage1}
                />
              </div>
              <FormControl
                type="search"
                placeholder="Search.."
                className={styles.searchControl}
                aria-label="Search"
              />
            </div>

            <div className={styles.categories}>
              <h4>Categories</h4>
              <p>Fashion</p>
              <p>Style</p>
              <p>Accessories</p>
              <p>Season</p>
            </div>
          </Col>

          <Col xl={9} lg={9} md={12} className={styles.blogColContent}>
            <h3>Fast Fashion, And Faster Fashion</h3>
            <p>
              by <span className={styles.annyJohnson}>ANNY JOHNSON</span> -
              October 8,2020
            </p>
            <Slider {...settings}>
              {blog.map((item, index) => {
                return (
                  <img
                    key={index + "blog"}
                    src={item.image}
                    className={styles.sliderImage}
                    key="abcd"
                  />
                );
              })}
            </Slider>
            <p className={styles.loremIpsum}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              placerat, augue a volutpat hendrerit, sapien tortor faucibus
              augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
              facilisis consequat sed eu felis. Nunc sed porta augue.
            </p>
            <p className={styles.loremIpsum1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              placerat, augue a volutpat hendrerit, sapien tortor faucibus
              augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
              facilisis consequat sed eu felis.
            </p>
            <div className={styles.sliderImage1Div}>
              {blog.map((item, index) => {
                if (index === 3)
                  return (
                    <img
                      src={item.image}
                      className={styles.sliderImage1}
                      key={"xyx" + index}
                    />
                  );
              })}
            </div>
            <h3 className={styles.topTrends}>Top trends</h3>
            <p className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              placerat, augue a volutpat hendrerit, sapien tortor faucibus
              augue, a maximus elit ex vitae libero.
            </p>
            <ul className={styles.unorderedList}>
              <li>consectetur adipiscing elit. Aliquam placerat</li>
              <li>Lorem ipsum dolor sit amet consectetur</li>
              <li>sapien tortor faucibus augue</li>
              <li>
                a maximus elit ex vitae libero. Sed quis mauris eget arcu
                facilisis
              </li>
            </ul>

            <div className={styles.tagsShareDiv}>
              <div className={styles.tagsDiv}>
                <h4 className={styles.tags}>Tags</h4>
                <div className={styles.dash}></div>
                <h4 className={styles.fashion}>Fashion, Style, Season</h4>
              </div>
              <div className={styles.tagsDiv}>
                <h4 className={styles.tags}>Share</h4>
                <div className={styles.dash}></div>
                <img src="./Images/fb.png" className="ms-2 me-2" />
                <img src="./Images/insta.png" className="ms-2 me-2" />
                <img src="./Images/twitter.png" className="ms-2 me-2" />
              </div>
            </div>

            <div className={styles.line}></div>

            <Col xl={9} lg={9} md={12} className={styles.commentFormCol}>
              <div className={styles.formDiv}>
                <h5>Leave a Reply</h5>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>

                <Form className={styles.form}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Enter your name*"
                      className={styles.formControl}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="password"
                      placeholder="Enter your Email*"
                      className={styles.formControl}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Enter your Website"
                      className={styles.formControl}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" className={styles.checkboxDiv}>
                    <Form.Check
                      type="checkbox"
                      label="Save my name, email, and website in this browser for the next time I comment"
                      className={styles.checkbox}
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Your Comment*"
                      className={styles.formControl}
                    />
                  </Form.Group>
                </Form>
                <Button
                  variant="primary"
                  type="submit"
                  className={styles.submit}
                >
                  POST COMMENT
                </Button>
              </div>
            </Col>

            <Col xl={9} lg={9} md={12} className={styles.comments}>
              <h4 className={styles.commentsTitle}>Comments(3)</h4>

              {comments.map((item, index) => {
                if (index == 0) {
                  return (
                    <>
                      <Row className={styles.commentsRow}>
                        <Col
                          xl={2}
                          lg={2}
                          md={2}
                          sm={2}
                          xs={3}
                          key={index + "comments"}
                        >
                          <div>
                            <img
                              src={item.image}
                              className={styles.commentImage}
                            />
                          </div>
                        </Col>
                        <Col xl={10} lg={10} md={10} sm={10} xs={9}>
                          <div className={styles.commentsDiv}>
                            <div>
                              <div className={styles.commentsNameDiv}>
                                <h4 className={styles.commentName1}>
                                  {item.name}
                                </h4>

                                <div className={styles.dateReplyDiv}>
                                  <h4 className={styles.commentDate2}>
                                    {item.date}
                                  </h4>
                                  <h4
                                    className={styles.reply3}
                                    style={{
                                      marginLeft: "auto",
                                    }}
                                  >
                                    <img
                                      src="./Images/reply-fill.svg "
                                      className={styles.replyFill}
                                    />
                                    {item.reply}
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h4 className={styles.commentDescription}>
                            {item.description}
                          </h4>
                        </Col>
                      </Row>
                    </>
                  );
                } else if (index == 1) {
                  return (
                    <>
                      <Row className={styles.commentsRow}>
                        <Col
                          xl={2}
                          lg={2}
                          md={{ span: 2, offset: 2 }}
                          sm={{ span: 2, offset: 2 }}
                          xs={{ span: 3, offset: 2 }}
                        >
                          <div>
                            <img
                              src={item.image}
                              className={styles.commentImage}
                            />
                          </div>
                        </Col>
                        <Col xl={8} lg={8} md={8} sm={8} xs={7}>
                          <div className={styles.commentsDiv}>
                            <div>
                              <div className={styles.commentsNameDiv}>
                                <h4 className={styles.commentName1}>
                                  {item.name}
                                </h4>

                                <h4 className={styles.commentDate2}>
                                  {item.date}
                                </h4>
                                <h4
                                  className={styles.reply3}
                                  style={{
                                    marginLeft: "auto",
                                  }}
                                >
                                  <img
                                    src="./Images/reply-fill.svg "
                                    className={styles.replyFill}
                                  />
                                  {item.reply}
                                </h4>
                              </div>
                            </div>
                          </div>
                          <h4 className={styles.commentDescription}>
                            {item.description}
                          </h4>
                        </Col>
                      </Row>
                      <div className={styles.line}></div>
                    </>
                  );
                } else if (index == 2) {
                  return (
                    <>
                      <Row className={styles.commentsRow}>
                        <Col xl={2} lg={2} md={2} sm={2} xs={3}>
                          <div>
                            <img
                              src={item.image}
                              className={styles.commentImage}
                            />
                          </div>
                        </Col>
                        <Col xl={10} lg={10} md={10} sm={10} xs={9}>
                          <div className={styles.commentsDiv}>
                            <div>
                              <div className={styles.commentsNameDiv}>
                                <h4 className={styles.commentName1}>
                                  {item.name}
                                </h4>
                                <div className={styles.dateReplyDiv}>
                                  <h4 className={styles.commentDate2}>
                                    {item.date}
                                  </h4>
                                  <h4
                                    className={styles.reply3}
                                    style={{
                                      marginLeft: "auto",
                                    }}
                                  >
                                    <img
                                      src="./Images/reply-fill.svg "
                                      className={styles.replyFill}
                                    />
                                    {item.reply}
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h4 className={styles.commentDescription}>
                            {item.description}
                          </h4>
                        </Col>
                      </Row>
                    </>
                  );
                }
              })}
            </Col>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default BlogDetails;
