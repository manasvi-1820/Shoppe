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
import { useRouter } from "next/router";
// import search1 from "../public/Images/search1.png";

const Header = (props) => {
  const [isActive, setIsActive] = useState("");
  const [isActiveSearch, setIsActiveSearch] = useState("");
  const route = useRouter();

  useEffect(() => {
    setIsActive(window.location.pathname);
  }, []);

  const Search = () => {
    setIsActiveSearch(!isActiveSearch);
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
                    <Image
                      src={search}
                      width={20}
                      height={20}
                      className={styles.searchImg}
                      onClick={() => {
                        Search();
                      }}
                    ></Image>
                    {isActiveSearch && (
                      <>
                        <div className={styles.searchImgDiv}></div>
                        <FormControl
                          type="search"
                          placeholder="Search.."
                          className={styles.searchControl1}
                          aria-label="Search"
                        />
                      </>
                    )}
                  </div>

                  <NavLink
                    href="/Cart"
                    className={styles.cartImage}
                    active={isActive === "/Cart"}
                  >
                    <Image src={cart} width={20} height={20}></Image>
                  </NavLink>
                  <NavLink
                    href="/MyAccount"
                    className={styles.userImage}
                    active={isActive === "/MyAccount"}
                  >
                    <Image src={profile} width={20} height={20}></Image>
                  </NavLink>
                </div>
              </Nav>
            </Navbar.Collapse>
            {props.border ? <div className={styles.border}></div> : ""}
          </Navbar>

          {props.search ? (
            ""
          ) : (
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
          )}
        </Row>
      </Container>
    </>
  );
};

export default Header;
