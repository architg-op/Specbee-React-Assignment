import { useContext } from 'react';
import { MyContext } from '../MyContext.tsx';

import CategoryCheckboxList from './CategoryCheckboxList.tsx';
import AuthorCheckboxList from './AuthorCheckboxList.tsx';
import FilterCheckboxList from './FilterCheckboxList.tsx';
import Typography from '@mui/material/Typography';

export default function Filters() {
  const { articles } = useContext(MyContext);

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
  categories.sort();
  let authors = articles?.map((article) => article.author);
  authors.sort();
  let sortby = ['Date', 'Title'];
  sortby.sort();
  categories = eliminateDuplicates(categories);
  authors = eliminateDuplicates(authors);
  sortby = eliminateDuplicates(sortby);
  // console.log('categories ', categories);
  // console.log('authors ', authors);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Category
      </Typography>
      <CategoryCheckboxList data={categories} />
      <Typography variant="h6" gutterBottom>
        Author
      </Typography>
      <AuthorCheckboxList data={authors} />
      <Typography variant="h6" gutterBottom>
        Sort By
      </Typography>
      <FilterCheckboxList data={sortby} />
    </>
  );
}
