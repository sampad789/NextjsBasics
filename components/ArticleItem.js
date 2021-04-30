import Link from "next/Link";
import articleStyles from "../styles/Article.module.css";
import Image from "next/image";
const ArticleItem = ({ product }) => {
  return (
    <>
      <Link href="/product/[id]" as={`/product/${product.id}`}>
        <a href="" className={articleStyles.card}>
          <Image
            className="product-image"
            src={product.image}
            alt="Picture of the Product"
            width={250}
            height={250}
          />
          <style jsx global>{`
            .product-image {
              border-radius: 25%;
            }
          `}</style>
          <h3>{product.title}</h3>
          <a className={articleStyles.categories}>
            <p> {product.category}</p>
          </a>
        </a>
      </Link>
    </>
  );
};

export default ArticleItem;
