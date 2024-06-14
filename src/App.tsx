import { useState, React } from 'react';
import { MyContext } from './MyContext';
import './App.css';

import Articles from './components/Articles';
import Filters from './components/Filters';

function App() {
  const [articles, setArticles] = useState([]);

  return (
    <MyContext.Provider value={{ articles, setArticles }}>
      <div id="wrapper">
        <div id="left">
          <Filters />
        </div>
        <div id="right">
          <Articles />
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;
