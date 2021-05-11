import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";

import "../App";
import Container from './Container';

import HomePage from "../views/HomePage";
import NotFoundPage from '../views/NotFoundPage'
import Dashboard from '../views/admin/dashboard'
import ProductDetails from '../views/ProductDetails'
import ProductsPage from '../views/ProductsPage'
import PostsPage from '../views/PostsPage'


const PageRoutes = () => {
  return (
    <Switch>
      <Container>
        <Route
          path='/products/:id'
          render={props => <ProductDetails sortBy='newest' {...props} />}
        />
        <Route
          path='/products'
          render={props => <ProductsPage sortBy='newest' {...props} />}
        />
        <Route
          path='/posts/:year?/:month?'
          render={props => <PostsPage {...props} />}
        />
        <Route path='/admin' component={Dashboard} />
        <Route path='/not-found' component={NotFoundPage} />
        <Route path="/" exact component={HomePage} />
        <Redirect to="/not-found" />
      </Container>
    </Switch>
  )
}

export default PageRoutes
