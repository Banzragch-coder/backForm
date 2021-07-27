import React, { useState, useEffect } from "react";
import { 
  Form, 
  Input, 
  Select ,
  InputNumber
} from "antd";
const { Option } = Select;
const { TextArea } = Input;

export default function ContactInfo() {
  return (
    <>
      <Input.Group
        >
 
      <Form.Item
        label="Facebook хаяг"
        name="fb"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
          label="Email хаяг"
          name="email"
          rules={[
            {required: true,message: "Талбарын утга хоосон байна.!", },
            {type: "",message: "email хаягаа бичнэ үү", },
            ]}
            // rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
            >
          <Input />
       </Form.Item>
       <Form.Item
        label="Одоо амьдарч байгаа хаяг"
        name="addressNow"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <TextArea
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      </Form.Item>
      <Form.Item
        label="Албан ёсны бүртгэлтэй хаяг"
        name="addressReal"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <TextArea
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      </Form.Item>
      <Form.Item
            style={{ display: "flex", justifyContent: "flex-end"  }}
            label="Утасны дугаар  "
            name="phoneNumber"
            rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
          >
          <InputNumber  
               style={{ width: 150 }}
              //placeholder="88123456"
          />
      </Form.Item>
      </Input.Group>
    </>
  );
}