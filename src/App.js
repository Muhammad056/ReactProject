import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, browserHistory, Route } from "react-router";
import HeaderTitle from "./Component/HeaderTitle";
import LoginPage from "./Component/LoginPage";
import ForgotPage from "./Component/ForgotPage";
import RegistrationForm from "./Component/RegistrationForm";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderTitle />
        <Router history={browserHistory}>
          <Route path="/" component={LoginPage} exact />
          <Route path="/ForgotPage" component={ForgotPage} exact />
          <Route path="/RegistrationForm" component={RegistrationForm} exact />
        </Router>
      </div>
    );
  }
}

export default App;
