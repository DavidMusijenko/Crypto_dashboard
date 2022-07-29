import { useEffect, useState } from "react";
import axios from "axios";

export const NewsFeed = () => {
  const [articles, setArticles] = useState([
    {
      title: "Your news are loading...",
      url: "",
    },
  ]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://localhost:8000/news",
    };

    axios
      .request(options)
      .then((response) => {
        setArticles(response.data);
      })

      .catch((error) => {
        console.error(error);
      });
  }, []);

  const first10Articles = articles?.slice(0, 10);

  return (
    <div className="news-feed">
      <h2>News Feed</h2>
      {first10Articles?.map((e, i) => (
        <div key={i}>
          <a href={e.url}>
            <p>{e.title}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
