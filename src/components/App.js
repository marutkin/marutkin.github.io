import React from "react";
import { Layout } from "antd";

import PortalRouter from "../routes/router";

import "./App.css";

const { Footer } = Layout;

const App = () => (
  <Layout style={{ minHeight: "100vh" }}>
    <PortalRouter />
    <Footer style={{ textAlign: "center" }}>Rendezvous With Destiny</Footer>
  </Layout>
);

export default App;
