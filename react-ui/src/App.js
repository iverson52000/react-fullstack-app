import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Navigation from "./components/Navigation";
import Signin from "./components/Signin";
import Register from "./components/Register";
import ProductCardList from "./components/ProductCardList";
import DetailPage from "./components/DetailPage";

import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <Navigation />
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
            <Route path="/detail/:id">
              <DetailPage />
            </Route>
          </Switch>
          <Link to="/list">List</Link>
        </Router>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
