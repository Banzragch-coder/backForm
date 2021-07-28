import React from "react";
import { Layout } from "antd";

function footer() {
  const { Footer } = Layout;
  return (
    <Footer
      style={{
        position: "sticky",
        textAlign: "center",
        background: "#3d3c3a",
        color: "white",
      }}
    >
      {"©2020 "}
    </Footer>
  );
}

export default footer;
