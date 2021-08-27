import React from "react";
import { Layout, Card, BackTop, Space } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;
const { Content } = Layout;

const PortalPage = () => (
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
              title="Command"
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
              title="Officers"
              description="Список офицеров со списком личных задач и обязанностей"
            />
          </Card>
        </Link>

        <Link to="/warehouse">
          <Card
            style={{ width: 345 }}
            hoverable
            cover={
              <img alt="Warehouse" src="https://www.allencorporation.com/wp-content/uploads/2019/08/warehouse-1024x459.jpg" />
            }
          >
            <Meta
              title="Warehouse"
              description="Список полезных статей и ресурсов"
            />
          </Card>
        </Link>
      </Space>
    </Content>
    <BackTop visibilityHeight={30} />
  </Layout>
);

export default PortalPage;
