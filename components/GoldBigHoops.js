import React from "react";
import { Container, Row } from "react-bootstrap";
import styles from "../styles/goldBigHoops.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gold from "../json/goldBigHoops.json";
import Categories from "./Categories";
import { useRouter } from "next/router";

const GoldBigHoops = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const route = useRouter();

  const ViewProduct = () => {
    route.push("/ProductDetails");
  };

  return (
    <>
      <div className={styles.categories}>
        <Categories />
      </div>

      <Container className={styles.goldContainer}>
        <Row className={styles.goldRow}>
          <Slider {...settings}>
            {gold.map((item, index) => {
              return (
                <>
                  <div className={styles.sliderDiv} key={index + "gold"}>
                    <img src={item.image} className={styles.goldImage} />
                    <img src={item.image1} className={styles.goldHoopsImage} />
                    <img src={item.image2} className={styles.goldHoopsImage2} />
                    <div className={styles.overLay}>
                      <h4 className={styles.name}>{item.name}</h4>
                      <h4 className={styles.price}>{item.price}</h4>
                      <button
                        className={styles.button}
                        onClick={() => ViewProduct()}
                      >
                        {item.button}
                      </button>
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
