import React, { useState } from "react";
import { Modal, Button } from "antd";

const Media = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Gory Gory What a Helluva Way to Die
      </Button>
      <Modal
        title="Motivation Modal"
        visible={isModalVisible}
        onCancel={handleCancel}
        style={{display: "flex", justifyContent: 'center'}}
        footer={null}
      >
        <iframe
          width="300"
          height="200"
          src="https://www.youtube.com/embed/VWgsdexkv18"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Modal>
    </>
  );
};

export default Media;
