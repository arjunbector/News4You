import styles from "./SkeletonCard.module.css";
const SkeletonCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card_img}></div>
      <div className={styles.title}></div>
      <div className={styles.title}></div>
      <div className={styles.title}></div>
      <div className={styles.details}>
        <p className={styles.author_name}></p>
        <p className={styles.date}></p>
      </div>
    </div>
  );
};

export default SkeletonCard;
