import { useState } from 'react';
import { MyContext } from './MyContext';
import './App.css';

import Articles from './components/Articles';
import Filters from './components/Filters';
import LinearProgress from '@mui/material/LinearProgress';

function App() {
  const [articles, setArticles] = useState([]);
  const [dateApplied, setDateApplied] = useState(false);
  const [apiLoader, setApiLoader] = useState(false);

  console.log('apiLoader ', apiLoader);

  return (
    <MyContext.Provider
      value={JSON.stringify({
        articles,
        setArticles,
        dateApplied,
        setDateApplied,
        apiLoader,
        setApiLoader,
      })}
    >
      <div className="mainwrapper">
        {apiLoader ? (
          <LinearProgress />
        ) : (
          <div id="wrapper">
            <div id="left">
              <Filters />
            </div>
            <div id="right">
              <Articles />
            </div>
          </div>
        )}
      </div>
    </MyContext.Provider>
  );
}

export default App;
