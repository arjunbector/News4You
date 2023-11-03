import { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import SkeletonCard from "../Skeleton/SkeletonCard";
import styles from './Category.module.css';
import { api_key } from "../../Pages/Home";


const Category = (props) => {
const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [newsCards, setNewsCards] = useState(null);
  const getDataBusiness = () => {
    console.log(props.category.toLowerCase());
    fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category.toLowerCase()}&pageSize=4&apiKey=${api_key}`)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setData(data);
        const CardsArray = data.articles.map((article) => {
          if (article.urlToImage === null) return null;
          return (
            <NewsCard
              key={article.url}
              author={article.author}
              title={article.title}
              imgURL={article.urlToImage}
              url={article.url}
              date={article.publishedAt}
            />
          );
        });
        setNewsCards(CardsArray);
      });
  };

  const skeletonCardsArray = [
    <SkeletonCard />,
    <SkeletonCard />,
    <SkeletonCard />,
    <SkeletonCard />,
  ];

  useEffect(() => {
    getDataBusiness();
  }, []);
  return (
    <div>
      <div className={styles.category_section}>
        <h1 className={styles.category_heading}>{props.category}</h1>
        <div className={styles.cards_section}>{isLoading? skeletonCardsArray: newsCards}</div>
        <button className={styles.view_more_btn}>View More</button>
      </div>
    </div>
  );
};

export default Category;
