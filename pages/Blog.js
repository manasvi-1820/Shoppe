import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Row, Col, FormControl } from "react-bootstrap";
import styles from "../styles/blogPage.module.css";
import blog from "../json/blogPage.json";
import Router, { useRouter } from "next/router";

const Blog = () => {
  const route = useRouter();
  const [firstPage, setFirstPage] = useState(true);
  const [secondPage, setSecondPage] = useState(false);

  const [isActive, setIsActive] = useState(true);
  const [isActiveSecond, setIsActiveSecond] = useState(true);

  const FirstPage = () => {
    setFirstPage(true);
    setSecondPage(false);
    setIsActive(true);
    // localStorage.setItem("firstPage", firstPage);
  };

  const SecondPage = () => {
    setFirstPage(false);
    setSecondPage(true);
    setIsActiveSecond(true);
    // localStorage.setItem("secondPage", secondPage);
  };

  const BlogDetails = () => {
    route.push("/BlogDetails");
  };

  useEffect(() => {
    console.log("first", firstPage);
    console.log("second", secondPage);
    console.log("active1", isActive);
    console.log("active2", isActiveSecond);
  }, []);

  useEffect(() => {
    localStorage.getItem("firstPage");

    if (firstPage) {
      setFirstPage(JSON.parse(firstPage));
    }
  }, [firstPage]);

  useEffect(() => {
    localStorage.getItem("secondPage");
    if (secondPage) {
      setSecondPage(JSON.parse(secondPage));
    }
  }, [secondPage]);

  // useEffect(() => {
  //   window.localStorage.setItem("MY_APP_STATE", JSON.stringify(firstPage));
  // }, [firstPage]);

  // useEffect(() => {
  //   const data = window.localStorage.getItem("MY_APP_STATE");
  //   if (data !== null) setFirstPage(JSON.parse(data));
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("data1", JSON.stringify(isActive));
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("data1", JSON.stringify(isActiveSecond));
  // }, []);

  return (
    <>
      <Header border={true} />

      <Container className={styles.blogContainer}>
        <Row>
          <h3>Blog</h3>
          <Col xl={3} lg={3} md={4} className={styles.blogColSidebar}>
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

          <Col xl={9} lg={9} md={8} className={styles.blogColMain}>
            <Row>
              {blog.map((item, index) => {
                if (index < 4)
                  return (
                    <>
                      {firstPage && (
                        <Col xl={6} lg={6} md={12} className={styles.blogCol}>
                          <div className={styles.imageDiv}>
                            <img
                              src={item.image}
                              className={styles.image}
                              onClick={() => BlogDetails()}
                            />
                          </div>
                          <h4 className={styles.date}>{item.date}</h4>
                          <h4 className={styles.title}>{item.title}</h4>
                          <h4 className={styles.description}>
                            {item.description}
                          </h4>
                          <h4
                            className={styles.button}
                            onClick={() => BlogDetails()}
                          >
                            {item.button}
                          </h4>
                        </Col>
                      )}
                    </>
                  );
                else if (index > 4)
                  return (
                    <>
                      {secondPage && (
                        <Col xl={6} lg={6} md={12} className={styles.blogCol}>
                          <div className={styles.imageDiv}>
                            <img
                              src={item.image}
                              className={styles.image}
                              onClick={() => BlogDetails()}
                            />
                          </div>
                          <h4 className={styles.date}>{item.date}</h4>
                          <h4 className={styles.title}>{item.title}</h4>
                          <h4 className={styles.description}>
                            {item.description}
                          </h4>
                          <h4
                            className={styles.button}
                            onClick={() => BlogDetails()}
                          >
                            {item.button}
                          </h4>
                        </Col>
                      )}
                    </>
                  );
              })}
            </Row>
            <div className={styles.pagination}>
              <button
                className={styles.pageButton}
                onClick={() => FirstPage()}
                style={{
                  background: isActive ? "" : "#000000",
                  color: isActive ? "" : "#FFFFFF",
                }}
              >
                1
              </button>

              <button
                className={styles.pageButton}
                onClick={() => SecondPage()}
                style={{
                  background: isActiveSecond ? "" : "#000000",
                  color: isActiveSecond ? "" : "#FFFFFF",
                }}
              >
                2
              </button>
              {/* <button className={styles.pageButton}>1</button> */}
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Blog;
