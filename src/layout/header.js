import React from "react";
import { Layout } from "antd";
import axios from "axios";

export default function Header() {
  const { Header } = Layout;
  return (
    <Header
      style={{ background: "#3d3c3a", color: "white", fontSize: "1.8rem" }}
    >
      <div>Leasing.mn</div>
    </Header>
  );
}
