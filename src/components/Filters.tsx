import { useState, React, useContext } from 'react';
import { MyContext } from '../MyContext.tsx';
import { Checkbox } from '@mui/material/Checkbox';

import CheckboxList from './CheckboxList';
import Typography from '@mui/material/Typography';

export default function Filters() {
  const { articles, setArticles } = useContext(MyContext);
  //   console.log('articles ', articles);
  function eliminateDuplicates(numbers) {
    const sortedArray = [];

    numbers?.forEach(function (element, index) {
      if (numbers.indexOf(element) === index) {
        sortedArray.push(element);
      }
    });
    return sortedArray;
  }
  let categories = articles?.map((article) => article?.source);
  let authors = articles?.map((article) => article.author);
  let sortby = ['Date', 'Title'];
  categories = eliminateDuplicates(categories);
  authors = eliminateDuplicates(authors);
  sortby = eliminateDuplicates(sortby);
  console.log('categories ', categories);
  console.log('authors ', authors);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Category
      </Typography>
      <CheckboxList data={categories} />
      <Typography variant="h6" gutterBottom>
        Author
      </Typography>
      <CheckboxList data={authors} />
      <Typography variant="h6" gutterBottom>
        Sort By
      </Typography>
      <CheckboxList data={sortby} />
    </>
  );
}
