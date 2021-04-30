import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Random Store </span>
      </h1>
      <p>Shop in this Random shop without charge </p>
    </div>
  );
};

export default Header;
