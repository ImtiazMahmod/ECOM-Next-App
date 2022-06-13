import { Spinner } from "react-bootstrap";
import Home from "../components/Home";
import Layout from "../components/layout/Layout";

export default function Index({ products }) {
  if (!products) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="grow" />
      </div>
    );
  }
  return (
    <div>
      <Layout>
        <Home products={products} />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/products");

  const products = await res.json();
  console.log(products);
  return {
    props: {
      products,
    },
  };
}
