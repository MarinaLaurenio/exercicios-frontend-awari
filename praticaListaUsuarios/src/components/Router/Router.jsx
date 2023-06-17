import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './../../pages/Home/Home';
import DetailsPage from "../../pages/Details/DetailsPage";
import ErrorPage from './../../pages/Error/Error';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/details/:id" element={<DetailsPage/>} />
        <Route path="*" element={<ErrorPage/>} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
