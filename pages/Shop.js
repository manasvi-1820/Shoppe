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
import { useRouter } from "next/router";
import Link from "next/link";

const Shop = () => {
  const route = useRouter();
  // const { id } = useParams();

  // const Cart = (id) => {
  //   switch (id) {
  //     case "cart-1":
  //       return route.push("/Cart");
  //     case "cart-2":
  //       return route.push("/ProductDetails");
  //     case "cart-3":
  //       return route.push("/Wishlist");
  //     default:
  //       return;
  //   }
  // };

  // const Click = (id) => {
  //   route.push(`/shop/${id}`);
  //   route.push("/ProductDetails");
  //   console.log("id", id);
  // };

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
            <Container className={styles.productsContainer}>
              <Row className={styles.productsRow}>
                {products.map((item) => {
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
                        <div className={styles.imageDiv}>
                          <Link href={`/product-details/${item.id}`}>
                            <img
                              src={item.image}
                              className={styles.productsImage}
                            />
                          </Link>

                          <div className={styles.hoverDiv}>
                            <div className={styles.hoverImage}>
                              <Link href={"/Cart"}>
                                <Image
                                  id="cart-1"
                                  src={cart}
                                  width={25}
                                  height={25}
                                  className={styles.cartImage}
                                ></Image>
                              </Link>
                            </div>
                            <div className={styles.hoverImage}>
                              <Link href={`/product-details/${item.id}`}>
                                <Image
                                  id="cart-2"
                                  src={eye}
                                  width={32}
                                  height={32}
                                  className={styles.productDetailsImage}
                                ></Image>
                              </Link>
                            </div>
                            <div className={styles.hoverImage}>
                              <Link href={"/Wishlist"}>
                                <Image
                                  id="cart-3"
                                  src={wishlist}
                                  width={25}
                                  height={25}
                                  className={styles.wishlistImage}
                                ></Image>
                              </Link>
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
