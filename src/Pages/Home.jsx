import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import styles from "../styles/Home.module.css";
import NewsCard from "../Components/NewsCard/NewsCard";
import SkeletonCard from "../Components/Skeleton/SkeletonCard";
const api_key = import.meta.env.VITE_API_KEY;
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [newsCards, setNewsCards] = useState(null);



  const getData = () => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${api_key}`
    )
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setData(data);
        const CardsArray = data.articles.map((article) => {
            if (article.urlToImage  === null)
            return null;
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

  console.log(data);

  useEffect(() => {
    getData();
  }, []);

  const skeletonCardsArray = [
   Array(8).fill(<SkeletonCard/>)
  ];

  return (
    <>
      <Navbar />
      <section className={styles.top_headlines_section}>
        <div className={styles.title_wrapper}>
          <h1 className={styles.title}>Top-Headlines</h1>
        </div>
        <div className={styles.cards_list}>
          {isLoading ? skeletonCardsArray : newsCards}
        </div>
      </section>
    </>
  );
};

export default Home;
export {api_key};