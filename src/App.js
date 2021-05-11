import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import AboutPage from "./Views/AboutPage";
import HomePage from "./Views/HomePage";
import NotFoundPage from "./Views/NotFoundPage";
import ProductsPage from "./Views/ProductsPage";
import Container from "./components/Container";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Container>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/about'>
            <AboutPage />
          </Route>
          <Route path='/products/'>
            <ProductsPage />
          </Route>
          {/* <Route path='*'>
            <NotFoundPage />
          </Route> */}
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
