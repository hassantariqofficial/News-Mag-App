import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";

const NewsBoard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return (
    <>
      <div className="head">
        <h2 className="text-center">
          Latest <span className="badge bg-danger">News</span>
        </h2>
      </div>
      {articles.map((news, index) => (
        <div key={index}>
          <NewsItems
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        </div>
      ))}
    </>
  );
};

export default NewsBoard;
