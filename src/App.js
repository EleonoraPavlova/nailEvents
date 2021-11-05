import React from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import "./App.scss"
import Home from "./pages/home/Home";
import Header from "./components/home/Header";
import resources from './resources';

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
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}