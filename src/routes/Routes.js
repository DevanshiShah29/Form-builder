import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Formheader from "../components/Formheader";
import Header from "../components/Header";
import Mainbody from "../components/Mainbody";
import SubmitForm from "../components/SubmitForm";
import CenteredTabs from "../components/Tabs";
import Templates from "../components/Templates";
import UserForm from "../components/UserForm";

const Routes = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/form/:id">
            <Formheader />
            <CenteredTabs />
          </Route>

          <Route path="/response/:id">
            <UserForm />
          </Route>

          <Route path="/submitted">
            <SubmitForm />
          </Route>

          <Route path="/">
            <Header />
            <Templates />
            <Mainbody />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
