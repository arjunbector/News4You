import { Link } from "react-router-dom";
import styles from "./NewsCard.module.css";

const NewsCard = (props) => {
  const publishedDate = props.date;
  const isoDate = new Date(publishedDate);
  const options = {
    month: "long",
    day: "numeric",
  };
  const standardDateFormat = isoDate.toLocaleDateString("en-US", options);
  const handleClick = ()=>{
    console.log("Click registered");
    window.open(props.url);
  }

  return (
    <div onClick={handleClick} className={styles.card}>
      <div className={styles.imgWrapper}>
        <img
          className={styles.card_img}
          src={props.imgURL}
          alt="Unable to load image"
        />
      </div>
      <div className={styles.text_wrapper}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.details}>
          <div className={styles.author_name}>{props.author}</div>
          <div className={styles.date}>{standardDateFormat}</div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
