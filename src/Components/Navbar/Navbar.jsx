import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
       <div className={styles.left}>News<span>4</span>You</div>
       <div className={styles.mid}>
        <ul className={styles.navbar_list}>
          <a href='#'><li className={styles.navbar_item}>Home</li></a>
          <a href='#'><li className={styles.navbar_item}>Discover</li></a>
          <a href='#'><li className={styles.navbar_item}>Search</li></a>
          <a href='#'><li className={styles.navbar_item}>Categories</li></a>
        </ul>
       </div>
    </div>
  )
}

export default Navbar
