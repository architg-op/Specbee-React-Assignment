import { useState, React, useContext, useEffect } from 'react';
import Article from './Article';
import Pagination from '@mui/material/Pagination';
import { MyContext } from '../MyContext';

function Articles() {
  const { articles, setArticles, setApiLoader } = useContext(MyContext);

  useEffect(() => {
    // setApiLoader(true);
    fetch('https://dev-storm-rest-api.pantheonsite.io/api/v1/news')
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .then(() => setApiLoader(false));
  }, []);

  console.log(articles);

  return (
    <>
      {articles.map((article) => {
        return (
          <Article
            date={article.date}
            title={article.title}
            body={article.body}
            image={article.image}
            source={article.source}
            author={article.author}
          />
        );
      })}

      <Pagination
        variant="outlined"
        color="primary"
        count={10}
        sx={{ paddingLeft: 110, paddingTop: 5, paddingBottom: 5 }}
      />
    </>
  );
}

export default Articles;
