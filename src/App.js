import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

const App = () => (
  // <Router>
  //   <Switch>
  //     <Route path="/" component={Home} />
  //   </Switch>
  // </Router>
  <Home />
);

export default App;
