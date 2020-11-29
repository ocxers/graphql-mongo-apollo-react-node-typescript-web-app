import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cats from '../modules/cat/Cats'

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/cats" component={Cats} />
    </Switch>
  </BrowserRouter>
);
