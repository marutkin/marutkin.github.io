import React from "react";
import { Divider, Typography, Layout } from "antd";

import Strategy from "../components/Strategy";
import Steps from "../components/Flow";

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
    </Layout>
  );
};

export default StrategyPage;
