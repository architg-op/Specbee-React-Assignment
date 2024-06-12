import { useEffect, useState } from 'react';
import Article from './Article';
import Pagination from '@mui/material/Pagination';

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://dev-storm-rest-api.pantheonsite.io/api/v1/news')
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  console.log(articles);

  return (
    <div>
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
        sx={{ paddingLeft: 160, paddingTop: 5, paddingBottom: 5 }}
      />
    </div>
  );
}

export default Articles;
