import React, { useContext } from 'react';
import { AppContext } from './provider/AppProvider';

import Navigation from './components/Navigation';
import Signin from './components/Signin';
import Register from './components/Register';
import RestaurantCardList from './components/RestaurantCardList';
import DetailPage from './components/DetailPage';

import './App.css';


function App() {
  const { route } = useContext(AppContext);

  return (
    <div className="container">
      <Navigation />
      { route === "signin" ? (
          <Signin />
        ) : route === "register" ? (
          <Register />
        ) : route === "list" ? (
          <RestaurantCardList />
        ) : (
          <DetailPage />
        )
      }
    </div>   
  );
}

export default App;
