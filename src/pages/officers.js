import React from "react";
import { Layout, Space, BackTop } from "antd";

import logan from "../assets/logan.jpg";
import neal from "../assets/neal.jpg";
import blackwood from "../assets/blackwood.jpg";

import OfficerCard from "../components/OfficerCard";

const { Content } = Layout;

const OfficersPage = () => {
  return (
    <Layout style={{ padding: "15px" }}>
      <Content>
        <Space direction="vertical" style={{ width: "100%" }}>
          <OfficerCard
            title="Capt.Logan"
            rank="captain"
            src={logan}
            description="The commander of the 101 airborn team, the main tasks are to maintain the morale at the proper level, to support the motivation of the entire officer corps, to resolve global issues of the battalion"
          />
          <OfficerCard
            title="Lt.Neal"
            rank="lieutenant"
            src={neal}
            description="Second lieutenant of command 101 airborn, main tasks of control within personnel, training of junior officers, command of the main combat unit"
          />
          <OfficerCard
            title={"Sgt.Blackwood"}
            rank="sergeant"
            src={blackwood}
            description="Sergeant of command 101 airborn, the main tasks of monitoring personnel in the field, monitoring the observance of command on the ground"
          />
        </Space>
      </Content>
      <BackTop visibilityHeight={30} />
    </Layout>
  );
};

export default OfficersPage;
