import React from "react";
import { Container, Row } from "react-bootstrap";
import styles from "../styles/goldBigHoops.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gold from "../json/goldBigHoops.json";
import Categories from "./Categories";

const GoldBigHoops = () => {
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
      <div className={styles.categories}>
        <Categories />
      </div>

      <Container className={styles.goldContainer}>
        <Row className={styles.goldRow}>
          <Slider {...settings}>
            {gold.map((item) => {
              return (
                <>
                  <div className={styles.sliderDiv}>
                    <img src={item.image} className={styles.goldImage} />
                    <div className={styles.overLay}>
                      <h4 className={styles.name}>{item.name}</h4>
                      <h4 className={styles.price}>{item.price}</h4>
                      <button className={styles.button}>{item.button}</button>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </Row>
      </Container>
    </>
  );
};

export default GoldBigHoops;
