import React from "react";
import { Switch, Route } from "react-router-dom";

import OfficersPage from "../pages/officers";
import PortalPage from "../pages/portal";
import StrategyPage from "../pages/strategy";

function PortalRouter() {
  return (
    <Switch>
      <Route path="/officers">
        <OfficersPage />
      </Route>
      <Route path="/strategy">
        <StrategyPage />
      </Route>
      <Route path="/">
        <PortalPage />
      </Route>
    </Switch>
  );
}

export default PortalRouter;
