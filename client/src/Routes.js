import React from "react";
import { Route, Switch } from "react-router-dom";
import LocationIdentifier from "./Containers/LocationIdentifier";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <LocationIdentifier />
      </Route>
    </Switch>
  );
}
