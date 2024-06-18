import { useState, useEffect, useContext } from 'react';

import Articles from './Articles';
import Filters from './Filters';
import LinearProgress from '@mui/material/LinearProgress';
import { MyContext } from '../MyContext';

function Home() {
  const [apiLoader, setApiLoader] = useState(false);
  const { setArticles } = useContext(MyContext);

  useEffect(() => {
    const fetchArticles = async () => {
      setApiLoader(true);
      try {
        await fetch('https://dev-storm-rest-api.pantheonsite.io/api/v1/news')
          .then((res) => res.json())
          .then((data) => setArticles(data))
          .then(() => setApiLoader(false));
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <>
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
    </>
  );
}

export default Home;
