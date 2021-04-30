import { useRouter } from "next/router";
import Link from "next/Link";

const product = ({ product }) => {
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <>
      <h1>{product.title} </h1>
      <p>{product.description}</p>

      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/${context.params.id}`
  );
  const product = await res.json();

  return {
    props: { product },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const products = await res.json();

  // Format the ids as a  string for the slug
  const ids = products.map((product) => product.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

export default product;
