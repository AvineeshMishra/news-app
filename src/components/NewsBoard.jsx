import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import "../App.css";
import ImageGenerator from "./ImageGenerator";
import Chat from "./Chat";

const NewsBoard = ({ category }) => {
  if (category !== "generateImageAI") {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => setArticles(data.articles));
    }, [category]);
    console.log(articles);
    return (
      <>
        <h2 className="text-center">
          Latest
          <span className="badge bg-danger">News</span>
        </h2>
        <div className="container">
          {articles.map((news, index) => {
            return (
              <NewsItem
                key={index}
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
              />
            );
          })}
        </div>
      </>
    );
  } else {
    return <Chat />;
  }
};

export default NewsBoard;
