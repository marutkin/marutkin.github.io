import React from "react";
import { Avatar, Layout, List, Button, BackTop } from "antd";
import { SettingOutlined } from "@ant-design/icons";

import usePosts from "../hooks/usePosts";

const { Content } = Layout;

const WarehousePage = () => {
  const { data, isLoading } = usePosts();
  return (
    <Layout style={{ padding: "15px" }}>
      <Content>
        <List
          loading={isLoading}
          itemLayout="horizontal"
          dataSource={data && data.posts}
          renderItem={({ image, link, title, description }) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <a href={link}>
                    <Avatar src={image} />
                  </a>
                }
                title={<a href={link}>{title}</a>}
                description={description}
              />
            </List.Item>
          )}
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            type="primary"
            icon={<SettingOutlined />}
            size={"large"}
            href="https://www.npoint.io/docs/6e028fedc763abdd27ca"
          >
            Настроить список
          </Button>
        </div>
      </Content>
      <BackTop visibilityHeight={30} />
    </Layout>
  );
};

export default WarehousePage;
