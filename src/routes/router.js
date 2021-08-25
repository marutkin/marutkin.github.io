import React from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  SnippetsOutlined,
  UserOutlined,
} from "@ant-design/icons";

import OfficersPage from "../pages/officers";
import PortalPage from "../pages/portal";
import StrategyPage from "../pages/strategy";

const { Header } = Layout;

function PortalRouter() {
  const PortalImage = () => (
    <img
      alt="portal"
      width="35"
      height="44"
      src="https://upload.wikimedia.org/wikipedia/commons/9/98/US_101st_Airborne_Division_patch.svg"
    />
  );
  return (
    <Router>
      <Header style={{padding: 0, background: 'none'}}>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link to="/">
              <PortalImage />              
            </Link>
          </Menu.Item>
          <Menu.Item icon={<SnippetsOutlined />}>
            <Link to="/strategy">Strategy</Link>
          </Menu.Item>
          <Menu.Item icon={<UserOutlined />}>
            <Link to="/officers">Officers</Link>
          </Menu.Item>
        </Menu>
      </Header>

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
    </Router>
  );
}

export default PortalRouter;
