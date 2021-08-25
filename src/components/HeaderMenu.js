import React from "react";
import { Menu } from "antd";
import { Link, useRouteMatch } from "react-router-dom";
import { SnippetsOutlined, UserOutlined } from "@ant-design/icons";

const HeaderMenu = () => {
  const isStrategyPath = useRouteMatch("/strategy");
  const isOfficersPath = useRouteMatch("/officers");

  const getSelectedKeys = () => {
    if (isStrategyPath) return isStrategyPath.path;
    if (isOfficersPath) return isOfficersPath.path;
    return "/portal";
  };

  const PortalImage = () => (
    <img
      alt="portal"
      width="35"
      height="44"
      src="https://upload.wikimedia.org/wikipedia/commons/9/98/US_101st_Airborne_Division_patch.svg"
    />
  );
  return (
    <Menu mode="horizontal" selectedKeys={[getSelectedKeys()]}>
      <Menu.Item key="/portal">
        <Link to="/">
          <PortalImage />
        </Link>
      </Menu.Item>
      <Menu.Item key="/strategy" icon={<SnippetsOutlined />}>
        <Link to="/strategy">Strategy</Link>
      </Menu.Item>
      <Menu.Item key="/officers" icon={<UserOutlined />}>
        <Link to="/officers">Officers</Link>
      </Menu.Item>
    </Menu>
  );
};

export default HeaderMenu;
