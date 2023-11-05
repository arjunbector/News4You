import { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import SkeletonCard from "../Skeleton/SkeletonCard";
import styles from './Category.module.css';
import { api_key } from "../../Pages/Home";


const Category = (props) => {
const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [newsCards, setNewsCards] = useState(null);
  const [buttonState, setButtonState] = useState("View More")
  const handleClick = ()=>{
    setButtonState("");
    getData(20);
  }
  const getData = (numberOfCards) => {
    fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category.toLowerCase()}&pageSize=${numberOfCards}&apiKey=${api_key}`)
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
    Array(4).fill(<SkeletonCard/>)
  ];

  useEffect(() => {
    getData(4);
  }, []);
  return (
    <div>
      <div className={styles.category_section}>
        <h1 className={styles.category_heading}>{props.category}</h1>
        <div className={styles.cards_section}>{isLoading? skeletonCardsArray: newsCards}</div>
        {buttonState &&  <button className={styles.view_more_btn} onClick={handleClick}>{buttonState}</button>}
      </div>
    </div>
  );
};

export default Category;
