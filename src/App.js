import React from "react";
import HomePage from "./components/pages/homepage/homepage";
import ShopPage from "./components/pages/shop/shop";
import Header from "./components/header/header";

import "./App.css";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
