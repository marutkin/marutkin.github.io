import React from "react";
import { Divider, Layout, BackTop } from "antd";

import Strategy from "../components/Strategy";
import Steps from "../components/Steps";

const { Content } = Layout;

const StrategyPage = () => {
  return (
    <Layout style={{padding: '15px'}}>
      <Content>
        <Steps />
        <Divider />
        <Strategy />
        <Divider />
      </Content>
      <BackTop visibilityHeight={30} />
    </Layout>
  );
};

export default StrategyPage;
