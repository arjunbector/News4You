import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Hamburger from 'hamburger-react'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      {/* <div className={styles.hamburger_icon} > */}
          {/* <Hamburger rounded/> */}
          {/* </div> */}
        <div className={styles.left}>
      <Link to={"/"}>
          News<span>4</span>You
      </Link>
        </div>
      <div className={styles.mid}>
        <ul className={styles.navbar_list}>
          <Link to="/home">
            <li className={styles.navbar_item}>Home</li>
          </Link>
          <Link to="/search">
            <li className={styles.navbar_item}>Search</li>
          </Link>
          <Link to="/categories">
            <li className={styles.navbar_item}>Categories</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
