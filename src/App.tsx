import { useState, useEffect } from 'react';
import { MyContext } from './MyContext';
import './App.css';

import Articles from './components/Articles';
import Filters from './components/Filters';
import LinearProgress from '@mui/material/LinearProgress';

function App() {
  const [articles, setArticles] = useState([]);
  const [dateApplied, setDateApplied] = useState(false);
  const [filtersChecked, setFiltersChecked] = useState([]);
  const [apiLoader, setApiLoader] = useState(false);

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
