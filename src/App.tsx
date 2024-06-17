import { useState, useEffect } from 'react';
import { MyContext } from './MyContext';
import './App.css';

import Articles from './components/Articles';
import Filters from './components/Filters';
import LinearProgress from '@mui/material/LinearProgress';

function App() {
  const [articles, setArticles] = useState([]);
  const [dateApplied, setDateApplied] = useState(false);
  const [apiLoader, setApiLoader] = useState(false);
  const [categoriesChecked, setCategoriesChecked] = useState([]);
  const [authorsChecked, setAuthorsChecked] = useState([]);
  const [filtersChecked, setFiltersChecked] = useState([]);

  useEffect(() => {
    setApiLoader(true);
    fetch('https://dev-storm-rest-api.pantheonsite.io/api/v1/news')
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .then(() => setApiLoader(false));
  }, []);

  return (
    <MyContext.Provider
      value={{
        articles,
        setArticles,
        dateApplied,
        setDateApplied,
        categoriesChecked,
        setCategoriesChecked,
        authorsChecked,
        setAuthorsChecked,
        filtersChecked,
        setFiltersChecked,
      }}
    >
      {apiLoader ? (
        <LinearProgress />
      ) : (
        <div className="mainwrapper">
          <div id="wrapper">
            <div id="left">
              <Filters />
            </div>
            <div id="right">
              <Articles />
            </div>
          </div>
        </div>
      )}
    </MyContext.Provider>
  );
}

export default App;
