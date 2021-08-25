import React from "react";
import { Avatar, Card, Image, Typography } from "antd";

const RANKS = {
  captain: {
    width: 50,
    height: 50,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/US-O3_insignia.svg/1200px-US-O3_insignia.svg.png",
  },
  lieutenant: {
    width: 25,
    height: 50,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/US-O1_insignia.svg/200px-US-O1_insignia.svg.png",
  },
  sergeant: {
    width: 40,
    height: 50,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Army-USA-OR-05.svg/776px-Army-USA-OR-05.svg.png",
  },
};

const OfficerCard = ({ src, title, rank, description }) => {
  return (
    <Card
      title={title}
      style={{ minWidth: 300 }}
      extra={
        <Image
          width={RANKS[rank].width}
          height={RANKS[rank].height}
          src={RANKS[rank].src}
          preview={false}
        />
      }
    >
      <Avatar
        style={{ float: "left", margin: 5 }}
        shape="square"
        size={120}
        src={<Image src={src} />}
      />
      <Typography.Text>{description}</Typography.Text>
    </Card>
  );
};

export default OfficerCard;
