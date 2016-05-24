import React from "react";
import { Router, Route, DefaultRoute, RouteHandler, Redirect } from "react-router";

import BaseLayout from "../components/layouts/Base";
import DashboardLayout from "../components/layouts/Dashboard";

import DashboardHomePage from "../components/pages/dashboard/Home";
import DashboardInbox from "../components/pages/dashboard/Inbox";
import DashboardHashtags from "../components/pages/dashboard/Hashtags";
import DashboardCurate from "../components/pages/dashboard/Curate";
import DashboardInfluencers from "../components/pages/dashboard/Influencers";
import DashboardReporting from "../components/pages/dashboard/Reporting";
import DashboardIntegrations from "../components/pages/dashboard/Integrations";
import DashboardSettings from "../components/pages/dashboard/Settings";
import LoginPage from "../components/pages/Login";
import LogoutPage from "../components/pages/Logout";

var Routes = React.createClass({

  statics: {
    getRoutes: function() {
      return (
          <Route name="base" path="/" handler={BaseLayout}>
            <Route name="dashboard" path="/dashboard" handler={DashboardLayout}>
              <Route name="dashboard.hashtags" path="/hashtags" handler={DashboardHashtags} />
              <Route name="dashboard.home" path="/home" handler={DashboardHomePage} />
              <Route name="dashboard.inbox" path="/inbox" handler={DashboardInbox} />
              <Route name="dashboard.curate" path="/curate" handler={DashboardCurate} />
              <Route name="dashboard.influencers" path="/influencers" handler={DashboardInfluencers} />
              <Route name="dashboard.reporting" path="/reporting" handler={DashboardReporting} />
              <Route name="dashboard.integrations" path="/integrations" handler={DashboardIntegrations} />
              <Route name="dashboard.settings" path="/settings" handler={DashboardSettings} />
              <DefaultRoute name="dashboard.default" handler={DashboardHomePage} />
            </Route>
            <Route name="login" path="/login" handler={LoginPage} />
            <Route name="logout" path="/logout" handler={LogoutPage} />
            <DefaultRoute name="default" handler={DashboardLayout} />
            <Redirect from="/" to="dashboard.hashtags" />
          </Route>
      );
    }
  },
  render: function() {
  
  }
  
});

export default Routes;