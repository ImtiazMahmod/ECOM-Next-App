import React from "react";
import { useRouter } from "next/router";
import data from "../../utils/data";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import Image from "next/image";
import Layout from "../../components/layout/Layout";
import Link from "next/link";

const ProductId = ({ product }) => {
  // const router = useRouter();
  // const { productId } = router.query;
  // const product = data?.products.find((p) => p._id === productId);
  if (!product) {
    return <div>Product not Found</div>;
  }
  return (
    <div>
      <Layout title={product.name} description={product.description}>
        <Container className="my-5">
          <Link href="/">Back</Link>
          <Row>
            <Col sm={12} md={8} lg={8} className="mt-3">
              <div>
                <Image
                  className="img-fluid rounded"
                  src={product?.image}
                  alt=""
                  width={"500px"}
                  height={"600px"}
                />
              </div>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <div className="text-start">
                <h1 className="mb-3 mt-5">{product?.title}</h1>
                {/* <TourInfo /> */}
                <h4 className="my-3">Overview</h4>
                <p className="text-secondary">{product?.description}</p>
                <ListGroup variant="flush">
                  <ListGroup.Item className="d-flex justify-content-between">
                    <span className="fw-bold">Price</span> ${product.price}
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between">
                    <span className="fw-bold">Rating</span>{" "}
                    {product.rating.rate}
                    stars
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between">
                    <span className="fw-bold">Category</span> {product.category}
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between">
                    <span className="fw-bold">Status</span>{" "}
                    <span className="text-success fw-bold">
                      {product.countInStock ? "In Stock" : "Out Of Stock"}
                    </span>
                  </ListGroup.Item>
                </ListGroup>
              </div>
              {/* <Book>{ tour}</Book> */}
              <div className="d-flex justify-content-center my-3">
                <Button variant="danger"> Add to Cart</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
};

export default ProductId;

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(
    `https://fakestoreapi.com/products/${context.params.productId}`
  );
  const product = await res.json();
  console.log(product);

  // Pass data to the page via props
  return { props: { product } };
}

// export async function getStaticProps(context) {
//   // Fetch data from external API
//   const res = await fetch(
//     `https://fakestoreapi.com/products/${context.params.productId}`
//   );
//   const product = await res.json();
//   console.log(product);

//   // Pass data to the page via props
//   return { props: { product } };
// }

// export async function getStaticPaths() {
//   // Fetch data from external API
//   const res = await fetch(`https://fakestoreapi.com/products`);
//   const products = await res.json();

//   const ids = products.map((product) => product.id);
//   console.log(ids);

//   // paths: {params: { id1: "1", id2: "2"}}
//   const paths = ids.map((id) => {
//     params: {
//       id: id.toString();
//     }
//   });

//   return { paths, fallback: false };
// }
