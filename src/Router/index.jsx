import { MemoryRouter, Route, Switch } from "react-router-dom";

import Login from "../telas/Login/index.jsx";
import React from "react";

function Router() {
  return (
    <MemoryRouter>
      <Switch>
        <Route component={Login} exact path="/" />
      </Switch>
    </MemoryRouter>
  );
}

export default Router;
