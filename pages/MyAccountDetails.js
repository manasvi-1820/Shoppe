import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TopButton from "../components/TopButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Container,
  Navbar,
  Nav,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import styles from "../styles/myAccountDetails.module.css";

const MyAccountDetails = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
        },
      },
    ],
  };

  const [isActive, setIsActive] = useState(true);

  const [dashboard, setDashboard] = useState(true);

  const [orders, setOrders] = useState(false);
  const [ordersDetails, setOrdersDetails] = useState(false);

  const [downloads, setDownloads] = useState(false);
  const [downloadsDetails, setDownloadsDetails] = useState(false);

  const [accountDetails, setAccountDetails] = useState(false);

  const [addresses, setAddresses] = useState(false);

  const [billAddr, setBillAddr] = useState(true);
  const [BillingAddress, setBillingAddressAdd] = useState(false);

  const [shippingAddr, setShippingAddr] = useState(true);
  const [ShippingAddress, setShippingAddressAdd] = useState(false);

  const [logOut, setLogOut] = useState(false);

  const ShowDashboard = () => {
    setDashboard(true);
    setOrders(false);
    setDownloads(false);
    setAccountDetails(false);
    setLogOut(false);
    setIsActive(true);
    setDownloadsDetails(false);
    setOrdersDetails(false);
    setBillingAddressAdd(false);
    setShippingAddressAdd(false);
    setBillAddr(false);
    setShippingAddr(false);
  };

  const ShowOrders = () => {
    setDashboard(false);
    setOrders(true);
    setDownloads(false);
    setAddresses(false);
    setAccountDetails(false);
    setLogOut(false);
    setIsActive(false);
    setDownloadsDetails(false);
    setBillingAddressAdd(false);
    setShippingAddressAdd(false);
    setBillAddr(false);
    setShippingAddr(false);
  };

  const OrderDetails = () => {
    setOrdersDetails(true);
    setOrders(false);
  };

  const ShowDownloads = () => {
    setDashboard(false);
    setOrders(false);
    setDownloads(true);
    setAddresses(false);
    setAccountDetails(false);
    setLogOut(false);
    setIsActive(false);
    setOrdersDetails(false);
    setBillingAddressAdd(false);
    setShippingAddressAdd(false);
    setBillAddr(false);
    setShippingAddr(false);
  };

  const DownloadsDetails = () => {
    setDownloadsDetails(true);
    setDownloads(false);
  };

  const ShowAddresses = () => {
    setDashboard(false);
    setOrders(false);
    setDownloads(false);
    setAddresses(true);
    setAccountDetails(false);
    setLogOut(false);
    setIsActive(false);
    setDownloadsDetails(false);
    setOrdersDetails(false);
    setBillAddr(true);
    setShippingAddr(true);
  };

  const BillingAddressAdd = () => {
    setBillingAddressAdd(true);
    setBillAddr(false);
  };

  const ShippingAddressAdd = () => {
    setShippingAddressAdd(true);
    setShippingAddr(false);
  };

  const ShowAccountDetails = () => {
    setDashboard(false);
    setOrders(false);
    setDownloads(false);
    setAddresses(false);
    setAccountDetails(true);
    setLogOut(false);
    setIsActive(false);
    setDownloadsDetails(false);
    setOrdersDetails(false);
    setBillingAddressAdd(false);
    setShippingAddressAdd(false);
    setBillAddr(false);
    setShippingAddr(false);
  };

  const ShowLogOut = () => {
    setDashboard(false);
    setOrders(false);
    setDownloads(false);
    setAddresses(false);
    setAccountDetails(false);
    setLogOut(true);
    setIsActive(false);
    setDownloadsDetails(false);
    setOrdersDetails(false);
    setBillingAddressAdd(false);
    setShippingAddressAdd(false);
    setBillAddr(false);
    setShippingAddr(false);
  };

  return (
    <>
      <TopButton />
      <Header border={true} />

      <Container className={styles.myAccountDetailsContainer}>
        <h3 className={styles.myAccountTitle}>My Account</h3>

        <div className={styles.desktop}>
          <div className={styles.navbarMain}>
            <Navbar>
              <Nav className={styles.accountDetails}>
                <Nav.Link
                  className={styles.navLinks}
                  onClick={() => ShowDashboard()}
                  active={isActive}
                >
                  Dashboard
                </Nav.Link>

                <Nav.Link
                  className={styles.navLinks}
                  onClick={() => ShowOrders()}
                >
                  Orders
                </Nav.Link>

                <Nav.Link
                  className={styles.navLinks}
                  onClick={() => ShowDownloads()}
                >
                  Downloads
                </Nav.Link>

                <Nav.Link
                  className={styles.navLinks}
                  onClick={() => ShowAddresses()}
                >
                  Addresses
                </Nav.Link>
                <Nav.Link
                  className={styles.navLinks}
                  onClick={() => ShowAccountDetails()}
                >
                  Account details
                </Nav.Link>
                <Nav.Link
                  className={styles.navLinks}
                  onClick={() => ShowLogOut()}
                >
                  Log out
                </Nav.Link>
              </Nav>
              <div className={styles.border}></div>
            </Navbar>
          </div>
        </div>

        <div className={styles.mobile}>
          <div className={styles.abc1}>
            <Slider {...settings} className="accountArrow">
              <div className={styles.abc}>
                <Nav.Link
                  className={styles.navLink}
                  onClick={() => ShowDashboard()}
                  active={isActive}
                >
                  Dashboard
                </Nav.Link>
              </div>
              <div className={styles.abc}>
                <Nav.Link
                  className={styles.navLink}
                  onClick={() => ShowOrders()}
                >
                  Orders
                </Nav.Link>
              </div>

              <div className={styles.abc}>
                <Nav.Link
                  className={styles.navLink}
                  onClick={() => ShowDownloads()}
                >
                  Downloads
                </Nav.Link>
              </div>

              <div className={styles.abc}>
                <Nav.Link
                  className={styles.navLink}
                  onClick={() => ShowAddresses()}
                >
                  Addresses
                </Nav.Link>
              </div>

              <div className={styles.abc}>
                <Nav.Link
                  className={styles.navLink}
                  onClick={() => ShowAccountDetails()}
                >
                  Account details
                </Nav.Link>
              </div>

              <div className={styles.abc}>
                <Nav.Link
                  className={styles.navLink}
                  onClick={() => ShowLogOut()}
                >
                  Log out
                </Nav.Link>
              </div>
            </Slider>
          </div>
          <div className={styles.border1}></div>
        </div>

        {/************************ Dashboard ***********************/}
        {dashboard && (
          <>
            <div className={styles.dashboardDiv}>
              <h3>
                Hello Vitatheme (not Vitatheme?{" "}
                <span className={styles.dashboardSpan}>Log out</span>)
              </h3>
              <h3>
                From your account dashboard you can view your{" "}
                <span className={styles.dashboardSpan}>recent orders</span>,
                manage your{" "}
                <span className={styles.dashboardSpan}>
                  shipping and billing addresses
                </span>
                , and edit your{" "}
                <span className={styles.dashboardSpan}>
                  password and account details
                </span>
                .
              </h3>
            </div>
          </>
        )}

        {/************************ Orders ***********************/}
        {orders && (
          <>
            <div className={styles.orders}>
              <h3>No order has been made yet.</h3>
              <button onClick={() => OrderDetails()}>BROWSE PRODUCT</button>
            </div>
          </>
        )}

        {ordersDetails && (
          <>
            <div className={styles.ordersDetailsDesktop}>
              <table className={styles.table}>
                <thead>
                  <tr className={styles.heading}>
                    <th>ORDER NUMBER</th>
                    <th colSpan="2">DATE</th>
                    <th colSpan="4">STATUS</th>
                    <th colSpan="4">TOTAL</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={styles.tableRow}>
                    <td>7643980998990</td>
                    <td colSpan="2">October 8,2021</td>
                    <td colSpan="4">Delivered</td>
                    <td colSpan="4">$ 105</td>
                    <td className={styles.viewOrderButton}>View Order</td>
                  </tr>
                  <tr className={styles.tableRow}>
                    <td>943980998990</td>
                    <td colSpan="2">October 8,2021</td>
                    <td colSpan="4">Processing</td>
                    <td colSpan="4">$ 100</td>
                    <td className={styles.viewOrderButton}>View Order</td>
                  </tr>
                  <tr>
                    <td>879980998990</td>
                    <td colSpan="2">October 8,2020</td>
                    <td colSpan="4">Delivered</td>
                    <td colSpan="4">$ 65</td>
                    <td className={styles.viewOrderButton}>View Order</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className={styles.ordersDetailsMobile}>
              <div className={styles.ordersDetailsMobileDiv1}>
                <div>
                  <h4>ORDER NUMBER</h4>
                  <h4>DATE</h4>
                  <h4>STATUS</h4>
                  <h4>TOTAL</h4>
                  <h4>ACTIONS</h4>
                </div>
                <div>
                  <h5>7643980998990</h5>
                  <h5>October 8,2021</h5>
                  <h5>Delivered</h5>
                  <h5>$ 105</h5>
                  <h5 className={styles.viewOrderButton}>View Order</h5>
                </div>
              </div>
              <div className={styles.ordersDetailsMobileDiv2}>
                <div>
                  <h4>ORDER NUMBER</h4>
                  <h4>DATE</h4>
                  <h4>STATUS</h4>
                  <h4>TOTAL</h4>
                  <h4>ACTIONS</h4>
                </div>
                <div>
                  <h5>943980998990</h5>
                  <h5>October 8,2021</h5>
                  <h5>Processing</h5>
                  <h5>$ 100</h5>
                  <h5 className={styles.viewOrderButton}>View Order</h5>
                </div>
              </div>
              <div className={styles.ordersDetailsMobileDiv3}>
                <div>
                  <h4>ORDER NUMBER</h4>
                  <h4>DATE</h4>
                  <h4>STATUS</h4>
                  <h4>TOTAL</h4>
                  <h4>ACTIONS</h4>
                </div>
                <div>
                  <h5>879980998990</h5>
                  <h5>October 8,2021</h5>
                  <h5>Delivered</h5>
                  <h5>$ 65</h5>
                  <h5 className={styles.viewOrderButton}>View Order</h5>
                </div>
              </div>
            </div>
          </>
        )}

        {/************************ Downloads ***********************/}
        {downloads && (
          <>
            <div className={styles.downloads}>
              <h3>No downloads available yet.</h3>
              <button onClick={() => DownloadsDetails()}>BROWSE PRODUCT</button>
            </div>
          </>
        )}

        {downloadsDetails && (
          <>
            <div className={styles.downloadsDetailsDesktop}>
              <table className={styles.table}>
                <thead>
                  <tr className={styles.heading}>
                    <th colSpan="">ORDER NUMBER</th>
                    <th colSpan="">DATE</th>
                    <th colSpan="">STATUS</th>
                    <th colSpan="">TOTAL</th>
                    <th colSpan="">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={styles.tableRow}>
                    <td colSpan="">7643980998990</td>
                    <td colSpan="">October 8,2021</td>
                    <td colSpan="">Delivered</td>
                    <td colSpan="">$ 105</td>
                    <td className={styles.viewOrderButton} colSpan="">
                      View Order | Download
                    </td>
                  </tr>
                  <tr className={styles.tableRow}>
                    <td colSpan="">943980998990</td>
                    <td colSpan="">October 8,2021</td>
                    <td colSpan="">Processing</td>
                    <td colSpan="">$ 100</td>
                    <td className={styles.viewOrderButton} colSpan="">
                      View Order | Download
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="">879980998990</td>
                    <td colSpan="">October 8,2020</td>
                    <td colSpan="">Delivered</td>
                    <td colSpan="">$ 65</td>
                    <td className={styles.viewOrderButton} colSpan="">
                      View Order | Download
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className={styles.downloadsDetailsMobile}>
              <div className={styles.downloadsDetailsMobileDiv1}>
                <div>
                  <h4>ORDER NUMBER</h4>
                  <h4>DATE</h4>
                  <h4>STATUS</h4>
                  <h4>TOTAL</h4>
                  <h4>ACTIONS</h4>
                </div>
                <div>
                  <h5>7643980998990</h5>
                  <h5>October 8,2021</h5>
                  <h5>Delivered</h5>
                  <h5>$ 105</h5>
                  <h5 className={styles.viewOrderButton}>
                    View Order | Download
                  </h5>
                </div>
              </div>
              <div className={styles.downloadsDetailsMobileDiv2}>
                <div>
                  <h4>ORDER NUMBER</h4>
                  <h4>DATE</h4>
                  <h4>STATUS</h4>
                  <h4>TOTAL</h4>
                  <h4>ACTIONS</h4>
                </div>
                <div>
                  <h5>943980998990</h5>
                  <h5>October 8,2021</h5>
                  <h5>Processing</h5>
                  <h5>$ 100</h5>
                  <h5 className={styles.viewOrderButton}>
                    View Order | Download
                  </h5>
                </div>
              </div>
              <div className={styles.downloadsDetailsMobileDiv3}>
                <div>
                  <h4>ORDER NUMBER</h4>
                  <h4>DATE</h4>
                  <h4>STATUS</h4>
                  <h4>TOTAL</h4>
                  <h4>ACTIONS</h4>
                </div>
                <div>
                  <h5>879980998990</h5>
                  <h5>October 8,2021</h5>
                  <h5>Delivered</h5>
                  <h5>$ 65</h5>
                  <h5 className={styles.viewOrderButton}>
                    View Order | Download
                  </h5>
                </div>
              </div>
            </div>
          </>
        )}

        {/************************ Addresses ***********************/}
        {addresses && (
          <>
            <Row className={styles.addressesRow}>
              <h3>
                The following addresses will be used on the checkout page by
                default.
              </h3>
              <Col xl={6} lg={6} md={6} className={styles.billingCol}>
                {billAddr && (
                  <>
                    <div className={styles.billingDiv}>
                      <h4>Billing address</h4>
                      <button onClick={() => BillingAddressAdd()}>ADD</button>
                      <p>You have not set up this type of address yet.</p>
                    </div>
                  </>
                )}
              </Col>
              <Col xl={6} lg={6} md={6} className={styles.shippingCol}>
                {shippingAddr && (
                  <>
                    <h4>Shipping address</h4>
                    <button onClick={() => ShippingAddressAdd()}>ADD</button>
                    <p>You have not set up this type of address yet.</p>
                  </>
                )}
              </Col>
            </Row>
            <Row>
              <Col
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className={styles.billingCol}
              >
                {BillingAddress && (
                  <>
                    <div className={styles.billingAddressDiv}>
                      <Form>
                        <Row>
                          <h4>Billing address</h4>
                          <Col xl={6} lg={6} md={12}>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <Form.Control
                                type="text"
                                placeholder="First name*"
                                className={styles.billingFormControl}
                              />
                            </Form.Group>
                          </Col>
                          <Col xl={6} lg={6} md={12}>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicPassword"
                            >
                              <Form.Control
                                type="text"
                                placeholder="Last name*"
                                className={styles.billingFormControl}
                              />
                            </Form.Group>
                          </Col>
                        </Row>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Control
                            type="text"
                            placeholder="Company name*"
                            className={styles.billingFormControl}
                          />
                        </Form.Group>

                        <Form.Select
                          aria-label="Default select example"
                          className={styles.billingSelect}
                        >
                          <option>Country *</option>
                          <option value="1">India</option>
                          <option value="2">Canada</option>
                          <option value="3">USA</option>
                        </Form.Select>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Control
                            type="text"
                            placeholder="Street Address *"
                            className={styles.billingFormControl}
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Control
                            type="number"
                            placeholder="Postcode / ZIP *"
                            className={styles.billingFormControl}
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Control
                            type="text"
                            placeholder="Town / City *"
                            className={styles.billingFormControl}
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Control
                            type="number"
                            placeholder="Phone *"
                            className={styles.billingFormControl}
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Control
                            type="email"
                            placeholder="Email *"
                            className={styles.billingFormControl}
                          />
                        </Form.Group>

                        <Button
                          variant="primary"
                          type="submit"
                          className={styles.billingSubmit}
                        >
                          SAVE ADDRESS
                        </Button>
                      </Form>
                    </div>
                  </>
                )}
              </Col>

              <Col
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className={styles.shippingCol}
              >
                {ShippingAddress && (
                  <>
                    <div className={styles.billingAddressDiv}>
                      <Form>
                        <Row>
                          <h4>Shipping address</h4>
                          <Col xl={6} lg={6} md={12}>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <Form.Control
                                type="text"
                                placeholder="First name*"
                                className={styles.billingFormControl}
                              />
                            </Form.Group>
                          </Col>
                          <Col xl={6} lg={6} md={12}>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicPassword"
                            >
                              <Form.Control
                                type="text"
                                placeholder="Last name*"
                                className={styles.billingFormControl}
                              />
                            </Form.Group>
                          </Col>
                        </Row>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Control
                            type="text"
                            placeholder="Company name*"
                            className={styles.billingFormControl}
                          />
                        </Form.Group>

                        <Form.Select
                          aria-label="Default select example"
                          className={styles.billingSelect}
                        >
                          <option>Country *</option>
                          <option value="1">India</option>
                          <option value="2">Canada</option>
                          <option value="3">USA</option>
                        </Form.Select>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Control
                            type="text"
                            placeholder="Street Address *"
                            className={styles.billingFormControl}
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Control
                            type="number"
                            placeholder="Postcode / ZIP *"
                            className={styles.billingFormControl}
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Control
                            type="text"
                            placeholder="Town / City *"
                            className={styles.billingFormControl}
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Control
                            type="number"
                            placeholder="Phone *"
                            className={styles.billingFormControl}
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Control
                            type="email"
                            placeholder="Email *"
                            className={styles.billingFormControl}
                          />
                        </Form.Group>

                        <Button
                          variant="primary"
                          type="submit"
                          className={styles.billingSubmit}
                        >
                          SAVE ADDRESS
                        </Button>
                      </Form>
                    </div>
                  </>
                )}
              </Col>
            </Row>
          </>
        )}

        {/************************ Account-details ***********************/}
        {accountDetails && (
          <>
            <div className={styles.accountDetails}>
              <Col
                xl={{ span: 6, offset: 3 }}
                lg={{ span: 8, offset: 2 }}
                md={{ span: 8, offset: 2 }}
                sm={12}
                xs={12}
              >
                <h4>Account details</h4>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="First name*"
                      className={styles.formControl}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="text"
                      placeholder="Last name*"
                      className={styles.formControl}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="text"
                      placeholder="Display name*"
                      className={styles.formControl}
                    />
                  </Form.Group>
                  <h6>
                    This will be how your name will be displayed in the account
                    section and in reviews.
                  </h6>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="text"
                      placeholder="Email address*"
                      className={styles.formControl}
                    />
                  </Form.Group>

                  <h3>Password change</h3>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="text"
                      placeholder="Current password (leave blank to leave unchanged)"
                      className={styles.formControl}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="text"
                      placeholder="New password (leave blank to leave unchanged)"
                      className={styles.formControl}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="text"
                      placeholder="Confirm new password"
                      className={styles.formControl}
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    className={styles.submit}
                  >
                    SAVE CHANGES
                  </Button>
                </Form>
              </Col>
            </div>
          </>
        )}
      </Container>

      <Footer />
    </>
  );
};

export default MyAccountDetails;
