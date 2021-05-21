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
import LoginPage from '../views/LoginPage'
import RegisterPage from '../views/RegisterPage'
import PasswordResetPage from '../views/PasswordResetPage'
import PasswordRequestPage from '../views/PasswordRequestPage'
import ConfirmRegistration from '../views/ConfirmRegistration'


const PageRoutes = () => {
  return (
    <Container>
      <Switch>
        <Route
          path='/products/:id'
          render={props => <ProductDetails sortBy='newest' {...props} />}
        />
        <Route
          path='/products'
          render={props => <ProductsPage sortBy='newest' {...props} />}
        />
        <Route
          path='/login'
          render={props => <LoginPage sortBy='newest' {...props} />}
        />
        <Route
          path='/register'
          render={props => <RegisterPage sortBy='newest' {...props} />}
        />
        <Route
          path='/request-password'
          render={props => <PasswordRequestPage sortBy='newest' {...props} />}
        />
        <Route
          path='/confirm-registration'
          render={props => <ConfirmRegistration sortBy='newest' {...props} />}
        />
        <Route
          path='/password-reset'
          render={props => <PasswordResetPage sortBy='newest' {...props} />}
        />
        <Route
          path='/login'
          render={props => <LoginPage sortBy='newest' {...props} />}
        />
        <Route
          path='/posts/:year?/:month?'
          render={props => <PostsPage {...props} />}
        />

        <Redirect from='/messages' to='/posts' />
        <Route path='/admin' component={Dashboard} />
        <Route path='/not-found' component={NotFoundPage} />
        <Route path="/" exact component={HomePage} />
        <Redirect to="/not-found" />
      </Switch>
    </Container>
  )
}

export default PageRoutes
