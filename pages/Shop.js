import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import styles from "../styles/shopPage.module.css";
import products from "../json/products.json";
import cart from "../public/Images/cart.png";
import eye from "../public/Images/eye.png";
import wishlist from "../public/Images/wishlist.png";
import { useRouter } from "next/router";
import TopButton from "../components/TopButton";
import Link from "next/link";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";

const Shop = () => {
  const route = useRouter();
  const [shopBy, setShopBy] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [filter, setFilter] = useState(true);
  const [value, setValue] = useState([0, 100]);

  const handleChange = (event, newValue) => {
    // console.log("newValue", newValue);
    setValue(newValue);
  };

  const handleChange1 = (event) => {
    setShopBy(event.target.value);
  };

  const handleChange2 = (event) => {
    setSortBy(event.target.value);
  };

  function valuetext(value) {
    return `${value}°C`;
  }

  const Filter = () => {
    setFilter(!filter);
  };

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

  return (
    <>
      <TopButton />
      <Header border={true} />

      <Container className={styles.shopContainer}>
        <Row>
          <Col xl={3} lg={3} md={12} className={styles.sideBarCol}>
            <div>
              <h3 className={styles.shopTheLatest}>Shop The Latest</h3>
              <h3 className={styles.shop}>Shop</h3>
            </div>
            <div className={styles.filtersDiv} onClick={() => Filter()}>
              <img src="./Images/filterimg.png" width={25} height={25} />
              <h3 className={styles.filters}>Filters</h3>
            </div>

            <div className={styles.desktop}>
              {filter && (
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
                    <input
                      placeholder="Search.."
                      className={styles.searchControl}
                      aria-label="Search"
                    />
                  </div>

                  <Box sx={{ minWidth: 150 }} className={styles.shopByDropDown}>
                    <FormControl fullWidth>
                      <InputLabel
                        id="demo-simple-select-label"
                        className={styles.shopBy}
                      >
                        Shop By
                      </InputLabel>
                      <Select
                        className={styles.shopBy}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={shopBy}
                        label="Age"
                        onChange={handleChange1}
                      >
                        <MenuItem value={10} className={styles.shopBy}>
                          Ten
                        </MenuItem>
                        <MenuItem value={20} className={styles.shopBy}>
                          Twenty
                        </MenuItem>
                        <MenuItem value={30} className={styles.shopBy}>
                          Thirty
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>

                  <Box sx={{ minWidth: 120 }} className={styles.sortByDropDown}>
                    <FormControl fullWidth>
                      <InputLabel
                        id="demo-simple-select-label"
                        className={styles.sortBy}
                      >
                        Sort By
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sortBy}
                        label="Age"
                        className={styles.sortBy}
                        onChange={handleChange2}
                      >
                        <MenuItem value={10} className={styles.sortBy}>
                          Ten
                        </MenuItem>
                        <MenuItem value={20} className={styles.sortBy}>
                          Twenty
                        </MenuItem>
                        <MenuItem value={30} className={styles.sortBy}>
                          Thirty
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>

                  <Box sx={{ maxWidth: 310 }} className={styles.range}>
                    <Slider
                      getAriaLabel={() => "Temperature range"}
                      value={value}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext}
                    />
                  </Box>

                  <div className={styles.rangeDiv}>
                    <Form.Label className={styles.priceRange}>
                      Price: ${value}
                      {/* Price: $40 - $180 */}
                    </Form.Label>
                    <Form.Label className={styles.filter}>Filter</Form.Label>
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
              )}
            </div>

            <div className={styles.mobile}>
              <Navbar expand={false} className={styles.nav}>
                <Navbar.Toggle
                  aria-controls="offcanvasNavbar"
                  style={{ paddingRight: "0px" }}
                />

                <Navbar.Offcanvas
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                  placement="start"
                >
                  <Offcanvas.Header closeButton></Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav
                      className={styles.nav}
                      style={{
                        alignItems: "start",
                      }}
                      navbarScroll
                    >
                      {filter && (
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
                            <input
                              placeholder="Search.."
                              className={styles.searchControl}
                              aria-label="Search"
                            />
                          </div>

                          <Box
                            sx={{ minWidth: 150 }}
                            className={styles.shopByDropDown}
                          >
                            <FormControl fullWidth>
                              <InputLabel
                                id="demo-simple-select-label"
                                className={styles.shopBy}
                              >
                                Shop By
                              </InputLabel>
                              <Select
                                className={styles.shopBy}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={shopBy}
                                label="Age"
                                onChange={handleChange1}
                              >
                                <MenuItem value={10} className={styles.shopBy}>
                                  Ten
                                </MenuItem>
                                <MenuItem value={20} className={styles.shopBy}>
                                  Twenty
                                </MenuItem>
                                <MenuItem value={30} className={styles.shopBy}>
                                  Thirty
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </Box>

                          <Box
                            sx={{ minWidth: 120 }}
                            className={styles.sortByDropDown}
                          >
                            <FormControl fullWidth>
                              <InputLabel
                                id="demo-simple-select-label"
                                className={styles.sortBy}
                              >
                                Sort By
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={sortBy}
                                label="Age"
                                className={styles.sortBy}
                                onChange={handleChange2}
                              >
                                <MenuItem value={10} className={styles.sortBy}>
                                  Ten
                                </MenuItem>
                                <MenuItem value={20} className={styles.sortBy}>
                                  Twenty
                                </MenuItem>
                                <MenuItem value={30} className={styles.sortBy}>
                                  Thirty
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </Box>

                          <Box sx={{ maxWidth: 310 }} className={styles.range}>
                            <Slider
                              getAriaLabel={() => "Temperature range"}
                              value={value}
                              onChange={handleChange}
                              valueLabelDisplay="auto"
                              getAriaValueText={valuetext}
                            />
                          </Box>

                          <div className={styles.rangeDiv}>
                            <Form.Label className={styles.priceRange}>
                              Price: ${value}
                              {/* Price: $40 - $180 */}
                            </Form.Label>
                            <Form.Label className={styles.filter}>
                              Filter
                            </Form.Label>
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
                      )}
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Navbar>
            </div>
          </Col>

          <Col xl={9} lg={9} md={12} className={styles.productsCol}>
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
