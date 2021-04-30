import navStyles from "../styles/Nav.module.css";
import Link from "next/Link";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/"> Home </Link>
        </li>

        <li>
          <Link href="/about">Checkout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
