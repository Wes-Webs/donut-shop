import './App.css';
import './Components/css/Navigation.css';
import './Components/css/LandingPage.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';
import PickupBanner from './Components/PickupBanner';
import LandingPage from './Components/LandingPage';
import Footer from './Components/Footer';
import FavoritesHomePage from './Components/FavoritesHomePage';
import OrderPage from './Components/OrderPage';
import Location from './Components/Location';
import SignUp from './Components/SignUp';
import ErrorPage from './Components/ErrorPage';

function App() {
  return (
    <Router>
      <div>
        <div class="">
          <Navigation/>
          <Routes>
            <Route exact path="/" element={<><PickupBanner/><LandingPage/><FavoritesHomePage/><Location/><SignUp/><Footer/></>}/>
            <Route exact path="/order" element={<><PickupBanner/><OrderPage/><Footer/></>}/>
            <Route exact path="*" element={<><ErrorPage/></>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
