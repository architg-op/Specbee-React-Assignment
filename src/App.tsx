import { useState } from 'react';
import { MyContext } from './MyContext';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Switch,
} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import InvalidPage from './components/InvalidPage';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Home />}>
//       <Route path="*" element={<InvalidPage />} />
//     </Route>
//   )
// );

function App() {
  const [articles, setArticles] = useState([]);
  const [dateApplied, setDateApplied] = useState(false);
  const [categoriesChecked, setCategoriesChecked] = useState([]);
  const [authorsChecked, setAuthorsChecked] = useState([]);
  const [filtersChecked, setFiltersChecked] = useState([]);

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
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/Specbee-React-Assignment/" element={<Home />} />
          <Route path="*" element={<InvalidPage />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
