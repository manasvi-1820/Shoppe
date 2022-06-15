import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TopButton from "../components/TopButton";
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
  const [isActive, setIsActive] = useState(true);

  const [dashboard, setDashboard] = useState(true);
  const [orders, setOrders] = useState(false);
  const [downloads, setDownloads] = useState(false);
  const [addresses, setAddresses] = useState(false);
  const [accountDetails, setAccountDetails] = useState(false);
  const [logOut, setLogOut] = useState(false);

  const ShowDashboard = () => {
    setDashboard(true);
    setOrders(false);
    setDownloads(false);
    setAddresses(false);
    setAccountDetails(false);
    setLogOut(false);
    setIsActive(true);
  };

  const ShowOrders = () => {
    setDashboard(false);
    setOrders(true);
    setDownloads(false);
    setAddresses(false);
    setAccountDetails(false);
    setLogOut(false);
    setIsActive(false);
  };

  const ShowDownloads = () => {
    setDashboard(false);
    setOrders(false);
    setDownloads(true);
    setAddresses(false);
    setAccountDetails(false);
    setLogOut(false);
    setIsActive(false);
  };

  const ShowAddresses = () => {
    setDashboard(false);
    setOrders(false);
    setDownloads(false);
    setAddresses(true);
    setAccountDetails(false);
    setLogOut(false);
    setIsActive(false);
  };

  const ShowAccountDetails = () => {
    setDashboard(false);
    setOrders(false);
    setDownloads(false);
    setAddresses(false);
    setAccountDetails(true);
    setLogOut(false);
    setIsActive(false);
  };

  const ShowLogOut = () => {
    setDashboard(false);
    setOrders(false);
    setDownloads(false);
    setAddresses(false);
    setAccountDetails(false);
    setLogOut(true);
    setIsActive(false);
  };

  return (
    <>
      <TopButton />
      <Header />

      <Container className={styles.myAccountDetailsContainer}>
        <h3>My Account</h3>
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
              <button>BROWSE PRODUCT</button>
            </div>
          </>
        )}

        {/************************ Downloads ***********************/}
        {downloads && (
          <>
            <div className={styles.downloads}>
              <h3>No downloads available yet.</h3>
              <button>BROWSE PRODUCT</button>
            </div>
          </>
        )}

        {/************************ Addresses ***********************/}
        {addresses && (
          <>
            <div className={styles.addresses}>
              <h3>
                The following addresses will be used on the checkout page by
                default.
              </h3>
              <Row className={styles.addressesRow}>
                <Col xl={6} lg={6} md={6}>
                  <h4>Billing address</h4>
                  <button>ADD</button>
                  <p>You have not set up this type of address yet.</p>
                </Col>
                <Col xl={6} lg={6} md={6}>
                  <h4>Shipping address</h4>
                  <button>ADD</button>
                  <p>You have not set up this type of address yet.</p>
                </Col>
              </Row>
            </div>
          </>
        )}

        {/************************ Account-details ***********************/}
        {accountDetails && (
          <>
            <div className={styles.accountDetails}>
              <Col xl={{ span: 6, offset: 3 }}>
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
