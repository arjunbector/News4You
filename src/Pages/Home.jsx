import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import styles from "../styles/Home.module.css";
import NewsCard from "../Components/NewsCard/NewsCard";
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [newsCards, setNewsCards] = useState(null);

  const api_key = import.meta.env.VITE_API_KEY;
  fetch(
    `https://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&apiKey=${api_key}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setIsLoading(false);
      setData(data);
      setIsLoading(false);
      const CardsArray = data.articles.map((article) => {
        return (
          <NewsCard
            key={article.url}
            author={article.author}
            title={article.title}
            imgURL={article.urlToImage}
            url={article.url}
          />
        );
      });
      setNewsCards(CardsArray);
    });


    

  return (
    <>
      <Navbar />
      <section className={styles.top_headlines_section}>
        <div className={styles.title_wrapper}>
          <h1 className={styles.title}>Top-Headlines</h1>
        </div>
        <div className={styles.cards_list}>
            {isLoading ? "Loading..." : newsCards}
        </div>
      </section>
    </>
  );
};

export default Home;
