import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import "./assets/plugins/nucleo/css/nucleo.css";
import "./assets/scss/dashboard-react.scss";

import Layout from './Layout';
import Analytics from './Analytics';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
      <Route exact path="/analytics" component={() => <Analytics />} />
      <Route path="/cryptocurrency" component={() => <Layout />} />
      <Route path="/home" render={() => <Layout />} />
      <Redirect strict  from="/" to="/analytics" />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
