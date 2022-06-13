import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/products.module.css";
import Image from "next/image";
import cart from "../public/Images/cart.png";
import eye from "../public/Images/eye.png";
import wishlist from "../public/Images/wishlist.png";
import { useRouter } from "next/router";
import Link from "next/link";

const Products = ({ item }) => {
  const route = useRouter();

  return (
    <Container className={styles.productsContainer}>
      <Row className={styles.productsRow}>
        <div>
          <div className={styles.imageDiv} key={item.id}>
            <img src={item.image} className={styles.productsImage} />

            <div className={styles.hoverDiv}>
              <div className={styles.hoverImage}>
                <Link href={"/Cart"}>
                  <Image
                    src={cart}
                    width={25}
                    height={25}
                    className={styles.cart}
                  ></Image>
                </Link>
              </div>
              <div className={styles.hoverImage}>
                <Link href={`/product-details/${item.id}`}>
                  <Image
                    src={eye}
                    width={32}
                    height={32}
                    className={styles.view}
                  ></Image>
                </Link>
              </div>
              <div className={styles.hoverImage}>
                <Link href={"/Wishlist"}>
                  <Image
                    src={wishlist}
                    width={25}
                    height={25}
                    className={styles.wishlist}
                  ></Image>
                </Link>
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
