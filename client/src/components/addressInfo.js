import React, { useState, useEffect } from "react";
import { Form, Input, Select } from "antd";
const { Option } = Select;
export default function AddressInfo() {
  return (
    <>
      <Input.Group
      //  style={{ background: "#FAFAFB", fontSize: "1.8rem" }}
        >
      <Form.Item
        style={{ marginTop: "20px"}}
        label="Хот"
        name="city"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <Select defaultValue="Сонгох">
          <Option value="Ulaanbaatar">Улаанбаатар Хот</Option>
        </Select>
      </Form.Item>
      <Form.Item
        // grid= {{xs: 1,sm: 1,md: 1,lg: 5,xl: 5,xxl: 5,}}
        label="Дүүрэг"
        name="district"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <Select defaultValue="Сонгох">
          <Option value="Bayangol">Баянгол дүүрэг</Option>
          <Option value="Sukhbaatar">Сүхбаатар дүүрэг</Option>
          <Option value="Khan-Uul">Хан-Уул дүүрэг</Option>
          <Option value="Чингэлтэй">Чингэлтэй дүүрэг</Option>
          <Option value="Баянзүрх дүүрэг">Баянзүрх дүүрэг</Option>
          <Option value="Сонгинохайрхан дүүрэг">Сонгинохайрхан дүүрэг</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Хороо"
        name="khoroo"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <Select defaultValue="Сонгох">
          <Option value="1khoroo">1-р хороо</Option>
          <Option value="2khoroo">2-р хороо</Option>
          <Option value="3khoroo">3-р хороо</Option>
          <Option value="4khoroo">4-р хороо</Option>
          <Option value="5khoroo">5-р хороо</Option>
          <Option value="6khoroo">6-р хороо</Option>
          <Option value="7khoroo">7-р хороо</Option>
          <Option value="8khoroo">8-р хороо</Option>
          <Option value="9khoroo">9-р хороо</Option>
          <Option value="10khoroo">10-р хороо</Option>
          <Option value="11khoroo">11-р хороо</Option>
          <Option value="12khoroo">12-р хороо</Option>
          <Option value="13khoroo">13-р хороо</Option>
          <Option value="14khoroo">14-р хороо</Option>
          <Option value="15khoroo">15-р хороо</Option>
          <Option value="16khoroo">16-р хороо</Option>
          <Option value="17khoroo">17-р хороо</Option>
          <Option value="18khoroo">18-р хороо</Option>
          <Option value="19khoroo">19-р хороо</Option>
          <Option value="20khoroo">20-р хороо</Option>
          <Option value="21khoroo">21-р хороо</Option>
          <Option value="22khoroo">22-р хороо</Option>
          <Option value="23khoroo">23-р хороо</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Дэлгэрэнгүй хаяг"
        name="addressDetail"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Оршин суугаа хугацаа"
        name="addressDate"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <Select defaultValue="Сонгох">
          <Option value="1year">1 жил</Option>
          <Option value="2year">2 жил</Option>
          <Option value="3year">3 жил</Option>
          <Option value="4year">4 жил</Option>
          <Option value="5yearUp">5+ жил</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Эзэмшлийн төрөл"
        name="ownerType"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <Select defaultValue="Сонгох">
          <Option value="owner">Өмчлөгч</Option>
          <Option value="renter">Түрээслэгч</Option>
          <Option value="withParents">Эцэг эхийн хамт</Option>
        </Select>
      </Form.Item>
      </Input.Group>
    </>
  );
}