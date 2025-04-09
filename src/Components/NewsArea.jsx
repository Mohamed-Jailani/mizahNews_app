import { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import image from "../assets/breakingnews.png";

const NewsArea = ({category}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
      try {
        const response = await fetch(url);
        const data = await response.json();        
        if (data.status === "ok") {
          setArticles(data.articles);
        } else {
          setError("Failed to load news.");
        }
      } catch (err) {
        console.error("Error fetching news:", err);
        setError("Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">
        <span className="badge bg-danger">Latest News</span>
      </h2>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-danger">{error}</p>}

      {!loading && !error && articles.length === 0 && (
        <p className="text-center">No news available.</p>
      )}

      <div className="row">
        {articles.map((news, index) => (
          <NewsItems
            key={index}
            title={news.title || "No Title"}
            description={news.description || "No Description Available"}
            src={news.urlToImage || image}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsArea;
