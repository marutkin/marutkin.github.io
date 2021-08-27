import React from "react";
import { Empty, Spin, Steps, Space, Button } from "antd";
import { SettingOutlined } from "@ant-design/icons";

import useSteps from "../hooks/useSteps";

const { Step } = Steps;

const StepsFlow = () => {
  const { data, isLoading, isError } = useSteps();

  if (!data || isLoading) {
    return <Spin />;
  }

  if (isError) {
    return <Empty />;
  }

  const { current, steps } = data;
  return (
    <Space direction="vertical" align="center">
      <Steps
        direction="vertical"
        size="small"
        current={current}
        style={{ backgroundColor: "#fff", padding: 12, borderRadius: 6 }}
      >
        {steps.map((item) => (
          <Step key={item.title} {...item} />
        ))}
      </Steps>
      <Button
        type="primary"
        icon={<SettingOutlined />}
        size={"large"}
        href="https://www.npoint.io/docs/55614fb93c3ef732f73b"
      >
        Настроить список
      </Button>
    </Space>
  );
};

export default StepsFlow;
