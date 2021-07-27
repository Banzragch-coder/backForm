import React from "react";
import { Form, Input, Select,DatePicker} from "antd";
const { Option } = Select;
const { TextArea } = Input;


export default function EducationInfo() {
  return (
    <>
      <Form.Item
        label="Боловсролын зэрэг"
        name="educationDegree"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <Select style={{ marginRigh: "auto" }} defaultValue="Сонгох">
          <Option value="bechelor">Бакалавр</Option>
          <Option value="master">Магистр</Option>
          <Option value="doctor">Доктор</Option>
          <Option value="high-school">Бүрэн дунд</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Эзэмшсэн мэргэжил"
        name="profession"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Хаана, ямар сургууль курст суралцсан"
        name="school"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
      <TextArea
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      </Form.Item>
      
      <Form.Item
        label="Элссэн он-сар"
        name="schoolIn"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        label="Төгссөн он-сар"
        name="schoolEnd"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <DatePicker />
      </Form.Item>
    </>
  );
}
