import Header from "../components/Header";
import Footer from "../components/Footer";
import Products from "../components/Products";
import GoldBigHoops from "../components/GoldBigHoops";
import products from "../json/products.json";
import styles from "../styles/products.module.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Home(props) {
  return (
    <>
      <Header />
      <GoldBigHoops />
      <Container className={styles.productsContainer}>
        <Row className={styles.productsRow}>
          {props.titleHide ? (
            <div className={styles.latestViewAllDiv}>
              <h3>Shop The Latest</h3>
              <button>View All</button>
            </div>
          ) : (
            ""
          )}
          {products.map((item, index) => {
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
                <Products titleHide={true} item={item} />
              </Col>
            );
          })}
        </Row>
      </Container>

      <Footer />
    </>
  );
}
