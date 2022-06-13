import Header from "../components/Header";
import Footer from "../components/Footer";
import Products from "../components/Products";
import GoldBigHoops from "../components/GoldBigHoops";
import products from "../json/products.json";
import styles from "../styles/products.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

export default function Home(props) {
  const [viewAll, setViewAll] = useState(false);

  const ViewAll = () => {
    // console.log("view");
    setViewAll(true);
  };

  return (
    <>
      <Header />
      <GoldBigHoops />
      <Container className={styles.productsContainer}>
        <Row className={styles.productsRow}>
          <div className={styles.latestViewAllDiv}>
            <h3>Shop The Latest</h3>
            <button onClick={() => ViewAll()}>View All</button>
          </div>

          {products.map((item, index) => {
            if (index < 4) {
              return (
                <Col
                  xl={4}
                  lg={4}
                  md={6}
                  sm={6}
                  xs={6}
                  className={styles.productsCol}
                  key={index + "product"}
                >
                  <Products item={item} />
                </Col>
              );
            }
          })}

          {viewAll &&
            products.map((item, index) => {
              if (index > 3) {
                return (
                  <Col
                    xl={4}
                    lg={4}
                    md={6}
                    sm={6}
                    xs={6}
                    className={styles.productsCol}
                    key={index + "product"}
                  >
                    <Products item={item} />
                  </Col>
                );
              }
            })}
        </Row>
      </Container>

      <Footer />
    </>
  );
}
