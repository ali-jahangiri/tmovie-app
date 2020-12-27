import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import DetailPage from "../Pages/DetailPage";
import FavePage from "../Pages/FavePage";
import HomePage from "../Pages/HomePage";
import NotFound from "../Pages/NotFound";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/detail:id" component={DetailPage} />
      <Route path="/fave" component={FavePage} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
