import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";

import Navigation from "./components/Navigation";
import Signin from "./components/Signin";
import Register from "./components/Register";
import ProductCardList from "./components/ProductCardList";
import DetailPage from "./components/DetailPage";

import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="container">
      <Router>
        <Navigation isLogin={isLogin} setIsLogin={setIsLogin} />
        <Switch>
          <Route
            path="/"
            render={(props) => <Signin {...props} setIsLogin={setIsLogin} />}
            exact
          />
          <Route path="/register" component={Register} />
          <Route path="/list" component={ProductCardList} />
          <Route path="/detail/:id" component={DetailPage} />
        </Switch>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;
