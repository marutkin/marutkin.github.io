import React from "react";
import { Layout, Space, BackTop } from "antd";

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
            src={
              "http://101airborne.ru/wp-content/uploads/2016/03/Grenadier.jpg"
            }
            description="The commander of the 101 airborn team, the main tasks are to maintain the morale at the proper level, to support the motivation of the entire officer corps, to resolve global issues of the battalion"
          />
          <OfficerCard
            title="Lt.Neal"
            rank="lieutenant"
            src={
              "http://101airborne.ru/wp-content/uploads/2016/03/Field-medic.jpg"
            }
            description="Second lieutenant of command 101 airborn, main tasks of control within personnel, training of junior officers, command of the main combat unit"
          />
          <OfficerCard
            title={"Sgt.Blackwood"}
            rank="sergeant"
            src={"http://101airborne.ru/wp-content/uploads/2016/03/Boets-4.jpg"}
            description="Sergeant of command 101 airborn, the main tasks of monitoring personnel in the field, monitoring the observance of command on the ground"
          />
        </Space>
      </Content>
      <BackTop visibilityHeight={30} />
    </Layout>
  );
};

export default OfficersPage;
