import React from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { TableOutlined, SnippetsOutlined, UserOutlined } from '@ant-design/icons';

import OfficersPage from "../pages/officers";
import PortalPage from "../pages/portal";
import StrategyPage from "../pages/strategy";

const { Header } = Layout;

function PortalRouter() {
  return (
    <Router>
      <Header>
        <Menu mode="horizontal">
          <Menu.Item icon={<TableOutlined />}>
            <Link to="/">Portal</Link>
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
