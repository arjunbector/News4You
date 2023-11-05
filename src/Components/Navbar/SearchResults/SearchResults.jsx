import styles from "./SearchResults.module.css";
import { api_key } from "../../../Pages/Home";
import { useEffect, useState } from "react";
import NewsCard from "../../NewsCard/NewsCard";
import SkeletonCard from "../../Skeleton/SkeletonCard";

const SearchResults = (props) => {
  const [data, setData] = useState(null);
  const[isLoading, setIsLoading] = useState(true);
  const query = props.searchInput.toLowerCase();
  const [newsCards, setNewsCards] = useState(null);
  const getData = () => {
    setIsLoading(true);
    fetch(
      `https://newsapi.org/v2/everything?q=${query}&language=en&apiKey=${api_key}`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
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
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (props.showResult) {
      getData();
    }
  }, [props.searchInput]);

  const skeletonCards = Array(8).fill(<SkeletonCard/>)

  return (
    <div className={styles.search_results_section}>
      <h1 className={styles.heading}>Search results for {props.searchInput}</h1>
      <div className={styles.card_list}>{isLoading ? skeletonCards : newsCards}</div>
    </div>
  );
};

export default SearchResults;
