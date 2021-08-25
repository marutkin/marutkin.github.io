import React from "react";
import { Layout, Card, BackTop, Space } from "antd";
import { Link } from "react-router-dom";

import Media from "../components/Media";

const { Meta } = Card;
const { Content } = Layout;

const PortalPage = () => {
  return (
    <Layout style={{ padding: "15px" }}>
      <Content>
        <Space
          style={{ width: "100%" }}
          align="center"
          direction="vertical"
          size="small"
        >
          <Link to="/strategy">
            <Card
              style={{ width: 345 }}
              hoverable
              cover={
                <img
                  alt="strategy"
                  src="https://upload.wikimedia.org/wikipedia/commons/0/03/CH-47_Chinook_helicopter_flyby.jpg"
                />
              }
            >
              <Meta
                title="Strategy page"
                description="Основные направления развития комманды и статус текущих задач для офицерского состава"
              />
            </Card>
          </Link>

          <Link to="/officers">
            <Card
              style={{ width: 345 }}
              hoverable
              cover={
                <img alt="officers" src="https://i.redd.it/v62t498mf0j51.jpg" />
              }
            >
              <Meta
                title="Officers page"
                description="Список офицеров со списком личных задач и обязанностей"
              />
            </Card>
          </Link>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Media />
          </div>
        </Space>
      </Content>
      <BackTop visibilityHeight={30} />
    </Layout>
  );
};

export default PortalPage;
