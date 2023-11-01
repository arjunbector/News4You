import news4you from "../../assets/img1.png";
import CustomButton from "../CustomButton/CustomButton";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section>
      <div className={styles.img_div}>
        <img className={styles.main_img} src={news4you} alt="news4you" />
      </div>
      <div className={styles.main}>
        <div className={styles.title}><h1>News<span>4</span>You</h1></div>
        <div className={styles.description}>News Beyond the Headlines</div>
        <div className={styles.btn_wrapper}>
            <Link to="/home" style={{
              textDecoration:"none"
            }}><CustomButton content = "Get Started"/></Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
