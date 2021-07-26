import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import "./App.css";
import "antd/dist/antd.css";
//components and layouts
import Header from "./layout/header";
import Content from "./layout/content";
import Footer from "./layout/footer";

function App() {
  return (
    <Layout className="layout" style={{ minHeight: "100vh" }}>
      {/* #0000FF  background:"#FFD700"   color: "white", fontSize: "1.5rem", font: "bold"*/}
      <Header />
      <Content />
      <Footer />
    </Layout>
  );
}

export default App;
