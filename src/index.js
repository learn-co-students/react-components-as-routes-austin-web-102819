import React from "react";
import ReactDOM from "react-dom";
/* Add NavLink to importer */
import Navbar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <divt>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </divt>
  </Router>,
  document.getElementById("root")
);
