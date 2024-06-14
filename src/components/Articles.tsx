import { useState, React, useContext, useEffect } from 'react';
import Article from './Article';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { MyContext } from '../MyContext';

function Articles() {
  const { articles, setArticles } = useContext(MyContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://dev-storm-rest-api.pantheonsite.io/api/v1/news')
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .then(() => setLoading(false));
  }, []);

  console.log(articles);
  console.log(loading);

  return (
    <Box sx={{ width: '100%' }}>
      {loading ? (
        <LinearProgress />
      ) : (
        articles.map((article) => {
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
        })
      )}

      <Pagination
        variant="outlined"
        color="primary"
        count={10}
        // sx={{ paddingLeft: 160, paddingTop: 5, paddingBottom: 5 }}
      />
    </Box>
  );
}

export default Articles;
