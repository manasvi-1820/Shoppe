import React from "react";
import { Container, Row, Col, FormControl, Form, Nav } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import styles from "../styles/shopPage.module.css";
import products from "../json/products.json";
import cart from "../public/Images/cart.png";
import eye from "../public/Images/eye.png";
import wishlist from "../public/Images/wishlist.png";
import { useParams } from "react-router";
import { useRouter } from "next/router";

const Shop = () => {
  const route = useRouter();
  // const { id } = useParams();

  const Click = (id) => {
    // route.push(`/shop/${id}`);
    route.push("/ProductDetails");
    console.log("id", id);
  };

  return (
    <>
      <Header border={true} />

      <Container className={styles.shopContainer}>
        <Row>
          <Col xl={3} className={styles.sideBarCol}>
            <div>
              <h3 className={styles.shopTheLatest}>Shop The Latest</h3>
              <h3 className={styles.shop}>Shop</h3>
            </div>
            <div className={styles.filtersDiv}>
              <img src="./Images/filterimg.png" width={25} height={25} />
              <h3 className={styles.filters}>Filters</h3>
            </div>

            <div className={styles.sidebar}>
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

              <Form.Group
                as={Col}
                controlId="formGridState"
                className={styles.shopByDropDown}
              >
                <Form.Select defaultValue="Choose..." className={styles.shopBy}>
                  <option>Shop By</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridState"
                className={styles.sortByDropDown}
              >
                <Form.Select defaultValue="Choose..." className={styles.sortBy}>
                  <option>Sort By</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <div className={styles.range}>
                <Form.Range />
                <div className={styles.rangeDiv}>
                  <Form.Label className={styles.priceRange}>
                    Price: $40 - $180
                  </Form.Label>
                  <Form.Label className={styles.filter}>Filter</Form.Label>
                </div>
              </div>

              <Form className={styles.onSaleToogle}>
                <Form.Check
                  label="On Sale"
                  type="switch"
                  id="custom-switch"
                  className={styles.onSaleLabel}
                />
              </Form>

              <Form className={styles.inStockToogle}>
                <Form.Check
                  label="In Stock"
                  type="switch"
                  id="custom-switch"
                  className={styles.inStockLabel}
                />
              </Form>
            </div>
          </Col>

          <Col xl={9} className={styles.productsCol}>
            {/* <Products titleHide={false} /> */}
            <Container className={styles.productsContainer}>
              <Row className={styles.productsRow}>
                {products.map((item, id) => {
                  {
                    /* console.log("id", id); */
                  }
                  return (
                    <>
                      <Col
                        xl={4}
                        lg={4}
                        md={6}
                        sm={6}
                        xs={6}
                        className={styles.productsCol}
                      >
                        <div className={styles.imageDiv} key={item.id}>
                          <img
                            src={item.image}
                            className={styles.productsImage}
                            onClick={() => Click(item.id)}
                          />

                          <div
                            className={styles.hoverDiv}
                            onClick={() => Click(item.id)}
                          >
                            <div className={styles.hoverImage}>
                              <Image src={cart} width={25} height={25}></Image>
                            </div>
                            <div className={styles.hoverImage}>
                              <Image src={eye} width={32} height={32}></Image>
                            </div>
                            <div className={styles.hoverImage}>
                              <Image
                                src={wishlist}
                                width={25}
                                height={25}
                              ></Image>
                            </div>
                          </div>
                        </div>

                        <h5>{item.name}</h5>
                        <h4>{item.price}</h4>
                      </Col>
                    </>
                  );
                })}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Shop;
