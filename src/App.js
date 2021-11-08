import React from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import "./App.scss"

import Home from "./pages/home/Home";
import Tickets from "./pages/tickets/Tickets";
import resources from './resources';

import Nav from './components/common/Nav';
import Footer from './components/common/Footer';

import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "ua",
    interpolation: {
      escapeValue: false
    }
  });

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/tickets">
            <Tickets />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}