

import React from "react";

import { Form, Input, Select, InputNumber, Button, Card, Meta } from "antd";

const { Option } = Select;
export default function IncomeVerification() {
  const { Meta } = Card;
  return (
    <>
      <Card 
       align={"center"}
       style={{ marginBlockEnd: "20px", marginTop: "20px", justify:"center" }}
      // xs = {{span:6}}
      // sm = {{span:6}} 
      // md = {{span:8}} 
      // lg = {{span:8}}
      // xl = {{span:8}}
      // xxl = {{span:8}}
        hoverable
        // style={{ width: 240 }}
        cover={
          <img
            alt="e-mongolia"
            src="https://leasing.shoppy.mn/11872cfa10e99812b62cefad16689020.png"
          />
        }
      >
        <Meta title="E-Mongolia" align={"center"} style={{ marginBottom: "15px" }} />

        <Button type="primary"  justify="center"  
         //  style={{ marginLeft:"100px"  }} 
         size={"large"}>
          {"Үргэлжлүүлэх"}
        </Button>
      </Card>
    </>
  );
}