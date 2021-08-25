import React from "react";
import { Steps } from "antd";

const { Step } = Steps;

const data = [
  {
    title: "Finished",
    description: "Инициировать стратегию поддержки батальона.",
  },
  {
    title: "Finished",
    description: "Создать портал для офицерского состава",
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

const StepsFlow = () => (
  <Steps direction="vertical" size="small" current={2}>
    {data.map((item) => (
      <Step key={item.title} {...item} />
    ))}
  </Steps>
);

export default StepsFlow;
