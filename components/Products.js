import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/products.module.css";
import Image from "next/image";
import cart from "../public/Images/cart.png";
import eye from "../public/Images/eye.png";
import wishlist from "../public/Images/wishlist.png";
import { useRouter } from "next/router";
import { useParams } from "react-router";

const Products = ({ item }) => {
  const { id } = useParams();
  const route = useRouter();

  const Click = () => {
    // route.push(`/Shop/${id}`);
    // route.push(`/Shop/${id}`);
  };

  return (
    <Container className={styles.productsContainer}>
      <Row className={styles.productsRow}>
        {/* {props.titleHide ? (
          <div className={styles.latestViewAllDiv}>
            <h3>Shop The Latest</h3>
            <button>View All</button>
          </div>
        ) : (
          ""
        )} */}
        <div>
          <div className={styles.imageDiv} key={item.id}>
            <img
              src={item.image}
              className={styles.productsImage}
              onClick={() => Click()}
            />

            <div className={styles.hoverDiv} onClick={() => Click()}>
              <div className={styles.hoverImage}>
                <Image src={cart} width={25} height={25}></Image>
              </div>
              <div className={styles.hoverImage}>
                <Image src={eye} width={32} height={32}></Image>
              </div>
              <div className={styles.hoverImage}>
                <Image src={wishlist} width={25} height={25}></Image>
              </div>
            </div>
          </div>

          <h5>{item.name}</h5>
          <h4>{item.price}</h4>
        </div>
      </Row>
    </Container>
  );
};

export default Products;
