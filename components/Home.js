import Link from "next/link";
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import data from "../data/products";

const Home = ({ products }) => {
  // const { products } = data;
  console.log(products);
  return (
    <div>
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
          {products?.map((product, idx) => (
            <Col key={idx}>
              <Card className=" border-0 shadow">
                <Link
                  className="pointer-cursor"
                  href={`/productDetail/${product._id}`}
                >
                  <Card.Img
                    style={{ height: "350px" }}
                    className="img-fluid rounded"
                    variant="top"
                    src={product?.image}
                  />
                </Link>

                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <Card.Title className="cartTitle  fw-bold primaryColor">
                      {product?.title?.slice(0, 20)}...
                    </Card.Title>
                    <Card.Title className="text-secondary">
                      ${product?.price}
                    </Card.Title>
                  </div>
                  <Card.Text className="text-secondary text-start border-top py-2">
                    {product?.description?.slice(0, 50)}...
                  </Card.Text>
                  <Link href={`/productDetail/${product?.id}`}>
                    <Button variant="outline-secondary">Book Now</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
