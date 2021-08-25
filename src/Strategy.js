import React from "react";

import { List, Avatar } from "antd";

const strategies = [
  {
    title: "Серый кардинал",
    img: "https://cdn3.iconfinder.com/data/icons/military-glyph-3/100/military-21-512.png",
    text: "Поддержка мотивации на высоком уровне у офицерского состава, основываясь на двусторонней обратной связи."
  },
  {
    title: "Военная дисциплина",
    img: "https://cdn.iconscout.com/icon/premium/png-512-thumb/self-discipline-1659150-1408433.png",
    text: "Использование положительного опыта других подразделений и углубление военных традиций внутри нашего батальона."  },
  {
    title: "Боевые отряды",
    img: "https://static.thenounproject.com/png/2851845-200.png",
    text: "Создание фиксированных боевых отрядов внутри батальона, утверждение упрощенной схемы снаряжения для основного боевого отряда."  },
];

const Strategy = () => (
  <List
    itemLayout="vertical"
    dataSource={strategies}
    renderItem={({title, text, img}) => (
      <List.Item>
        <List.Item.Meta
          avatar={
            <Avatar src={img} />
          }
          title={<a href="https://ant.design">{title}</a>}
          description={text}
        />
      </List.Item>
    )}
  />
);

export default Strategy;
