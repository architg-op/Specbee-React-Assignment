import { useState, React } from 'react';
import { MyContext } from './MyContext';

import Articles from './components/Articles';
import Filters from './components/Filters';

function App() {
  const [articles, setArticles] = useState([]);

  return (
    <MyContext.Provider value={{ articles, setArticles }}>
      <Filters />
      <Articles />
    </MyContext.Provider>
  );
}

export default App;
