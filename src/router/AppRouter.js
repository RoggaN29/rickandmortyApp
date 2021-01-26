import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Character } from "../components/character/Character";
import { RickandMortyApp } from "../RickandMortyApp";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={RickandMortyApp} />
          <Route exact path="/:id" component={Character} />

          <Redirect to="/"/>
        </Switch>
      </div>
    </Router>
  );
};
