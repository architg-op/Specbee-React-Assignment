import { useState, React, useContext, useEffect } from 'react';
import Article from './Article';
import { MyContext } from '../MyContext';
import Pagination from './Pagination.tsx';

function Articles() {
  const { articles, categoriesChecked, authorsChecked, filtersChecked } =
    useContext(MyContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  // console.log('filtersChecked ', filtersChecked);
  let filteredArticles = articles;
  filteredArticles.sort(function (b, a) {
    const textA = a.date.toUpperCase();
    const textB = b.date.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });

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

  filtersChecked.length && filtersChecked[filtersChecked.length - 1] === 'Date'
    ? filteredArticles.sort(function (a, b) {
        const textA = a.date.toUpperCase();
        const textB = b.date.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      })
    : null;

  filtersChecked.length && filtersChecked[filtersChecked.length - 1] === 'Title'
    ? filteredArticles.sort(function (a, b) {
        const textA = a.title.toUpperCase();
        const textB = b.title.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      })
    : null;

  // console.log('filtersChecked', filtersChecked);

  // console.log('filtered articles length', filteredArticles.length);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {filteredArticles.length ? (
        filteredArticles?.map((article) => {
          return (
            <Article
              date={article.date}
              title={article.title}
              body={article.body}
              image={article.image}
              source={article.source}
              author={article.author}
              url={article.url}
            />
          );
        })
      ) : (
        <div
          style={{
            textAlign: 'center',
            verticalAlign: 'middle',
            lineHeight: '40',
          }}
        >
          No result found for Selection
        </div>
      )}
      <Pagination
        length={articles.length}
        postsPerPage={postsPerPage}
        handlePagination={handlePagination}
        currentPage={currentPage}
      />
    </>
  );
}

export default Articles;
