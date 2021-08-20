import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Coins from "./Routes/Coins";
import Exchanges from "./Routes/Exchanges";
import Prices from "./Routes/Prices";

export default () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/prices" exact component={Prices} />
          <Route path="/exchanges" component={Exchanges} />
          <Route path="/coins" exact component={Coins} />
        </Switch>
      </>
    </Router>
  );
};
