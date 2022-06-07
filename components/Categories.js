import React from "react";
import styles from "../styles/Categories.module.css";
import { Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import categories from "../json/Categories.json";

const Categories = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    // autoplay: true,
    // autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <Container className={styles.categoriesContainer}>
      <Row>
        <Slider {...settings}>
          {categories.map((item) => {
            return (
              <>
                <div className={styles.sliderDiv}>
                  <button className={styles.button}>{item.button}</button>
                </div>
              </>
            );
          })}
        </Slider>
      </Row>
    </Container>
  );
};

export default Categories;
