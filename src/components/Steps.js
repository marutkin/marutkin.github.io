import React from "react";
import { Empty, Spin, Steps } from "antd";
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
    <Steps direction="vertical" size="small" current={current}>
      {steps.map((item) => (
        <Step key={item.title} {...item} />
      ))}
    </Steps>
  );
};

export default StepsFlow;
