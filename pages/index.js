import Head from "next/head";
import ArticleList from "../components/ArticleList";
export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title> Welcome to our store</title>
        <meta
          name="keywords"
          content="web development,programming ,products,store"
        />
      </Head>
      <ArticleList products={products} />
    </div>
  );
}
export const getStaticProps = async () => {
  const res = await fetch(`https://fakestoreapi.com/products?limit=6`);
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
};
