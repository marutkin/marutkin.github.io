import React from "react";
import { Layout, Card, BackTop, Space } from "antd";
import { Link } from "react-router-dom";

import command from "../assets/command.jpg";
import officers from "../assets/officers.jpg";
import warehouse from "../assets/warehouse.jpg";

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
            cover={<img alt="strategy" src={command} />}
          >
            <Meta
              title="Command"
              description="Текущие задачи для офицерского состава и концепции развития подразделения"
            />
          </Card>
        </Link>

        <Link to="/officers">
          <Card
            style={{ width: 345 }}
            hoverable
            cover={<img alt="officers" src={officers} />}
          >
            <Meta
              title="Officers"
              description="Список офицеров с кратким описанием личных обязанностей"
            />
          </Card>
        </Link>

        <Link to="/warehouse">
          <Card
            style={{ width: 345 }}
            hoverable
            cover={<img alt="Warehouse" src={warehouse} />}
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
