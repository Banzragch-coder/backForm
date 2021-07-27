import React from "react";
import { Form, Input, Select, InputNumber, DatePicker} from "antd";
const { Option } = Select;

export default function WorkInfo() {
  return (
    <>
          
      <Form.Item
        label="Албан байгууллага"
        name="organization"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Газар хэлтэс"
        name="heltes"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Албан тушаал"
        name="alba"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Ажлын хаяг"
        name="workAddress"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
            style={{ display: "flex", justifyContent: "flex-end"  }}
            label="Удирдах ажилтны утас"
            name="workPhoneNumber"
            rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
          >
          <InputNumber  
               placeholder="88123456"
               style={{ width: 150 , margin: "20px 0px", marginTop: "3px"}}
          />
      </Form.Item>
      <Form.Item
        label="Орсон он-сар"
        name="workIn"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        label="Гарсан он-сар"
        name="workEnd"
      >
        <DatePicker />
      </Form.Item>
    </>
  );
}


