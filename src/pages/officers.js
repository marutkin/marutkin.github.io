import React from "react";
import { Layout, Space, BackTop } from "antd";

import Media from "../components/Media";

import logan from "../assets/logan.jpg";
import neal from "../assets/neal.jpg";
import blackwood from "../assets/blackwood.jpg";

import OfficerCard from "../components/OfficerCard";

const { Content } = Layout;

const DESCRIPTIONS = {
  logan: "327th Infantry Regiment captain. Контроль офицерского состава и планированием операций.",
  neal: "327th Infantry Regiment lieutenant. Управление подразделением в поле, локальный контроль операции.",
  blackwood: "327th Infantry Regiment sergeant. Контроль личного состава, выполнение краткосрочных задач.",
};

const OfficersPage = () => (
  <Layout style={{ padding: "15px" }}>
    <Content>
      <Space direction="vertical" style={{ width: "100%" }}>
        <OfficerCard
          title="Capt.Logan"
          rank="captain"
          src={logan}
          description={DESCRIPTIONS.logan}
        />
        <OfficerCard
          title="Lt.Neal"
          rank="lieutenant"
          src={neal}
          description={DESCRIPTIONS.neal}
        />
        <OfficerCard
          title={"Sgt.Blackwood"}
          rank="sergeant"
          src={blackwood}
          description={DESCRIPTIONS.blackwood}
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Media />
        </div>
      </Space>
    </Content>
    <BackTop visibilityHeight={30} />
  </Layout>
);

export default OfficersPage;
