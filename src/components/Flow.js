import React from "react";
import { Steps } from "antd";

const { Step } = Steps;

const data = [
  {
    title: "Finished",
    description: "Инициировать стратегию поддержки батальона.",
  },
  {
    title: "In Progress",
    description: "Провести приватные беседы с личным составом.",
  },
  {
    title: "Waiting",
    description: "Осуществить сбор активного состава до первого боевого вылета.",
  },
  {
    title: "Waiting",
    description: "Подготовиться к боевой операции 11.09.2021.",
  },
];

const Flow = () => (
  <Steps progressDot current={1} direction="vertical">
    {data.map((item) => (
      <Step key={item.title} {...item} />
    ))}
  </Steps>
);

export default Flow;
