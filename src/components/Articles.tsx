import { useState, React, useContext, useEffect } from 'react';
import Article from './Article';
import Pagination from '@mui/material/Pagination';
import { MyContext } from '../MyContext';

function Articles() {
  const { articles, categoriesChecked, authorsChecked, filtersChecked } =
    useContext(MyContext);
  console.log('filtersChecked ', filtersChecked);
  let filteredArticles = articles;
  // filteredArticles.sort(function (b, a) {
  //   var textA = a.date.toUpperCase();
  //   var textB = b.date.toUpperCase();
  //   return textA < textB ? -1 : textA > textB ? 1 : 0;
  // });

  // filtersChecked.length && filtersChecked[filtersChecked.length - 1] === 'Date'
  //   ? filteredArticles.sort(function (a, b) {
  //       var textA = a.date.toUpperCase();
  //       var textB = b.date.toUpperCase();
  //       return textA < textB ? -1 : textA > textB ? 1 : 0;
  //     })
  //   : null;

  if (categoriesChecked.length) {
    filteredArticles = filteredArticles.filter((article) =>
      categoriesChecked.includes(article.source)
    );
  }

  if (authorsChecked.length) {
    filteredArticles = filteredArticles.filter((article) =>
      authorsChecked.includes(article.author)
    );
  }

  // filtersChecked.length && filtersChecked[filtersChecked.length - 1] === 'Title'
  //   ? articles.sort(function (a, b) {
  //       var textA = a.title.toUpperCase();
  //       var textB = b.title.toUpperCase();
  //       return textA < textB ? -1 : textA > textB ? 1 : 0;
  //     })
  //   : articles.sort(function (b, a) {
  //       var textA = a.title.toUpperCase();
  //       var textB = b.title.toUpperCase();
  //       return textA < textB ? -1 : textA > textB ? 1 : 0;
  //     });

  // console.log('filtersChecked', filtersChecked);

  // console.log(articles);

  console.log('filtered articles length', filteredArticles.length);

  return (
    <>
      {filteredArticles?.map((article) => {
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
