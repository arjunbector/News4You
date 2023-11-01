import styles from "./NewsCard.module.css";

const NewsCard = (props) => {
  const publishedDate = "2023-10-31T16:56:00Z";
  const isoDate = new Date(publishedDate);
  const options = {
    month: "long",
    day: "numeric",
  };
  const standardDateFormat = isoDate.toLocaleDateString("en-US", options);

  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <img
          className={styles.card_img}
          src={props.imgURL}
          alt="Unable to load image"
        />
      </div>
      <p className={styles.title}>{props.title}</p>
      <div className={styles.details}>
        <p className={styles.author_name}>{props.author}</p>
        <p className={styles.date}>{standardDateFormat}</p>
      </div>
    </div>
  );
};

export default NewsCard;
