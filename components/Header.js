import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  NavLink,
  Button,
  Navbar,
  Form,
  FormControl,
  Nav,
} from "react-bootstrap";
import Image from "next/image";
import styles from "../styles/header.module.css";
import search from "../public/Images/search.png";
import cart from "../public/Images/cart.png";
import profile from "../public/Images/profile.png";
import { Router, useRouter } from "next/router";
// import search1 from "../public/Images/search1.png";

const Header = (props) => {
  const [isActive, setIsActive] = useState("");
  const route = useRouter();

  useEffect(() => {
    setIsActive(window.location.pathname);
  }, []);

  const MyAccount = () => {
    route.push("/MyAccount");
  };

  return (
    <>
      <Container className={styles.headerContainer}>
        <Row className={styles.headerRow}>
          <Navbar expand="lg" className={styles.navbar}>
            <NavLink
              href="/"
              active={isActive === "/"}
              className={styles.shoppeLink}
            >
              <h2 className={styles.shoppe}>
                <span className={styles.spanShoppe}>S</span>HOPPE
              </h2>
            </NavLink>

            <div className={styles.cartToogleDiv}>
              <div className={styles.cartImageMobile}>
                <Image src={cart} width={23} height={23}></Image>
              </div>

              <Navbar.Toggle aria-controls="navbarScroll" id="navbarScroll" />
            </div>

            <Navbar.Collapse id="navbarScroll" className="justify-content-end">
              <Nav
                className={styles.nav}
                style={{
                  alignItems: "center",
                }}
                navbarScroll
              >
                <div className={styles.navlinkDiv}>
                  <NavLink
                    href="/Shop"
                    active={isActive === "/Shop"}
                    className={styles.navlink}
                  >
                    Shop
                  </NavLink>
                  <NavLink
                    href="/Blog"
                    active={isActive === "/Blog"}
                    className={styles.navlink}
                  >
                    Blog
                  </NavLink>
                  <NavLink
                    href="/OurStory"
                    active={isActive === "/OurStory"}
                    className={styles.navlink}
                  >
                    Our Story
                  </NavLink>
                  <div className={styles.line}></div>
                </div>

                <div className={styles.imageDiv}>
                  <div className={styles.searchImage}>
                    <Image src={search} width={20} height={20}></Image>
                  </div>
                  <div className={styles.cartImage}>
                    <Image src={cart} width={20} height={20}></Image>
                  </div>
                  <div className={styles.userImage}>
                    <Image
                      src={profile}
                      width={20}
                      height={20}
                      onClick={() => MyAccount()}
                    ></Image>
                  </div>
                </div>
              </Nav>
            </Navbar.Collapse>
            {props.border ? <div className={styles.border}></div> : ""}
          </Navbar>

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
              placeholder="Search"
              className={styles.searchControl}
              aria-label="Search"
            />
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Header;
