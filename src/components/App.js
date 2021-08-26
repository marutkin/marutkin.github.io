import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import PortalRouter from "../routes/router";
import HeaderMenu from "./HeaderMenu";

import "./App.css";

const { Footer, Header } = Layout;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Header style={{ padding: 0, background: "none" }}>
          <HeaderMenu />
        </Header>
        <PortalRouter />
        <Footer style={{ textAlign: "center" }}>
          Rendezvous With Destiny:{" "}
          <a href="https://vk.com/club339106">
            101st Airborne.{"  "}
            <img
              width="25px"
              height="20px"
              alt="btl327"
              src="http://101airborne.ru/wp-content/themes/Airborne/favicon.ico"
            />
          </a>
        </Footer>
      </Layout>
    </Router>
  </QueryClientProvider>
);

export default App;
