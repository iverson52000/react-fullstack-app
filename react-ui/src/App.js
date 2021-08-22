import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppContext } from "./provider/AppProvider";

import Navigation from "./components/Navigation";
import Signin from "./components/Signin";
import Register from "./components/Register";
import ProductCardList from "./components/ProductCardList";
import DetailPage from "./components/DetailPage";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Navigation />
      <Link to="/list">List</Link>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Signin />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/list">
            <ProductCardList />
          </Route>
          {/* <Route path="/list">
            DetailPage
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
