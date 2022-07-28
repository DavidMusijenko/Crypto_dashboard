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
      url: "https://crypto-news-live3.p.rapidapi.com/news",
      headers: {
        "X-RapidAPI-Key": "82120f930dmshbde2f6c1441f9d3p16199djsn82edf2efbfd8",
        "X-RapidAPI-Host": "crypto-news-live3.p.rapidapi.com",
      },
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

  const first7Articles = articles?.slice(0, 7);

  return (
    <div className="news-feed">
      <h2>NewsFeed</h2>
      {first7Articles?.map((e, i) => (
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
