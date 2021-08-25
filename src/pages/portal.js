import React from "react";
import { Layout } from "antd";

import Media from "../components/Media";

const { Content } = Layout;

const PortalPage = () => {
  return (
    <Layout style={{padding: '15px'}}>
      <Content>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Media />
        </div>
      </Content>
    </Layout>
  );
};

export default PortalPage;
