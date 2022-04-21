import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from "axios";

export default function Fetch(props) {
    const [articles, setArticles] = useState(null);
    
    useEffect(() => {
        axios
        .get(props.searchURL)
        .then((response) => setArticles(response.data.hits))
        .catch((err) => console.log(err));

    }, []);

    return    (
      <div className="App">
        {articles
        ? articles.map((article) => (
            <div key={article.objectID}>
                <h2>{article.title}</h2>
                <p>{article.author}</p>
            </div>
      ))
    : "Loading....."}
      </div>
  )

}