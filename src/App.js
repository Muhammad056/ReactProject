import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
        <Router>
          <Switch>
            <Route path="/" component={LoginPage} exact />
            <Route path="/ForgotPage" component={ForgotPage} exact />
            <Route
              path="/RegistrationForm"
              component={RegistrationForm}
              exact
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
