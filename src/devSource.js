import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Blog from './components/Blog';


render(
  <Router history={browserHistory}>
    <Route path="/" component={Blog}/>
  </Router>
);
