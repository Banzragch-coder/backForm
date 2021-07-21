import React from "react";
import { Form, Input, Select, InputNumber, Collapse } from "antd";
const { Option } = Select;
export default function FamilyInfo() {
  const { Panel } = Collapse;
  function callback(key) {
    console.log(key);
  }
  return (
    <>
      <Collapse 
      // span={24}
      style={{marginTop:"20px"}}
      defaultActiveKey={["1"]} onChange={callback}>
        <Panel header="Гэр бүлийн гишүүн 1" key="1">
          <Form.Item 
          //  style={{ marginLeft: "110px", margin:"40px"}}
            label="Овог"
            name="familyLastName_1"
            rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Нэр"
            name="familyFirstName_1"
            rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Таны хэн болох"
            name="familyWhoName_1"
            rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
          >
            <Select defaultValue="Сонгох">
              <Option value="mother">Ээж</Option>
              <Option value="father">Аав</Option>
              <Option value="brother">Ах</Option>
              <Option value="sister">Эгч</Option>
              <Option value="grandma">Эмээ</Option>
              <Option value="grandfa">Өвөө</Option>
              <Option value="wife">Эхнэр</Option>
              <Option value="husband">Нөхөр</Option>
              <Option value="son">Хүү</Option>
              <Option value="girl">Охин</Option>
              <Option value="youngerbro">Дүү Эрэгтэй</Option>
              <Option value="youngersis">Дүү Эмэгтэй</Option>
            </Select>
          </Form.Item>
          <Form.Item
            style={{ display: "flex", justifyContent: "flex-end"  }}
            label="Утасны дугаар  "
            name="familyPhoneNumber_1"
            rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
          >
           <InputNumber  
               style={{ width: 150 }}
               defaultValue={88112233}
               min={10000000}
               max={99999999}
              //  formatter={value => ` ${value}`.replace(/\B(?=(\d{2})+(?!\d))/g, "'")}
       />
          </Form.Item>
        </Panel>
        <Panel header="Гэр бүлийн гишүүн 2" key="2">
          <p>Test</p>
        </Panel>
      </Collapse>
      ,
    </>
  );
}