import React from "react";
import { Layout } from "antd";

import Media from "../components/Media";

const { Content } = Layout;

const OfficersPage = () => {
  return (
    <Layout>
      <Content>
        OfficersPage
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Media />
        </div>
      </Content>
    </Layout>
  );
};

export default OfficersPage;
