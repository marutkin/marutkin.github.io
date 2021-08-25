import React from "react";
import { Divider, Space, Typography, PageHeader, Layout } from "antd";

import Strategy from "./Strategy";
import Steps from "./Flow";
import Media from "./Media";

import "./App.css";

const { Footer, Content } = Layout;
const { Title } = Typography;

const App = () => (
  <Layout style={{ minHeight: "100vh", padding: "25px" }}>
    <PageHeader
      title="101st officer page"
      avatar={{
        src: "https://p.kindpng.com/picc/s/88-881168_101st-airborne-division-vinyl-logo-decal-high-glossy.png",
      }}
    />
    <Content>
      <Title level={4}>Strategy</Title>
      <Strategy />
      <Divider />
      <Title level={4}>Steps</Title>
      <Steps />
      <Divider />
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Media />
      </div>
    </Content>
    <Footer style={{ textAlign: "center" }}>Rendezvous With Destiny</Footer>
  </Layout>
);

export default App;
