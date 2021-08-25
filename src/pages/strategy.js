import React from "react";
import { Divider, Typography, Layout, BackTop } from "antd";

import Strategy from "../components/Strategy";
import Steps from "../components/Steps";

const { Title } = Typography;
const { Content } = Layout;

const StrategyPage = () => {
  return (
    <Layout style={{padding: '15px'}}>
      <Content>
        <Strategy />
        <Divider />
        <Title level={4}>Steps</Title>
        <Steps />
        <Divider />
      </Content>
      <BackTop visibilityHeight={30} />
    </Layout>
  );
};

export default StrategyPage;
