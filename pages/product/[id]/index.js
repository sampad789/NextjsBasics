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

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/${context.params.id}`
  );
  const product = await res.json();

  return {
    props: { product },
  };
};

export default product;
