import articleStyles from "../styles/Article.module.css";
import ArticleItem from "../components/ArticleItem";
const ArticleList = ({ products }) => {
  return (
    <div className={articleStyles.grid}>
      {products.map((product) => (
        <ArticleItem product={product} />
      ))}
    </div>
  );
};

export default ArticleList;
