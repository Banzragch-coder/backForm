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
      style={{marginTop:"20px"}}
      defaultActiveKey={["1"]} onChange={callback}>
        <Panel header="Гэр бүлийн гишүүн 1" key="1">
          <Form.Item 
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
              <Option value="grandfa">Хүргэн</Option>
              <Option value="grandfa">Бэр</Option>
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
               placeholder="88123456"
               style={{ width: 150 }}
          />
          </Form.Item>
          <div style={{color:"red", textAlign: "center", padding: "20px", fontSize:"12px"  }}>
      2-c дээш гэр бүлийн гишүүний мэдээлэл бөглөх шаардлагатайг анхаарна уу!
    </div>
        </Panel>
         <Panel header="Гэр бүлийн гишүүн 2" key="2">
          <Form.Item 
            label="Овог"
            name="familyLastName_2"
            rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Нэр"
            name="familyFirstName_2"
            rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Таны хэн болох"
            name="familyWhoName_2"
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
            name="familyPhoneNumber_2"
            rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
          >
           <InputNumber  
               style={{ width: 150 }}
               placeholder="88123456"
       />
          </Form.Item>
        </Panel>
         <Panel header="Гэр бүлийн гишүүн 3" key="3">
          <Form.Item 
            label="Овог"
            name="familyLastName_3"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Нэр"
            name="familyFirstName_3"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Таны хэн болох"
            name="familyWhoName_3"
            
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
            name="familyPhoneNumber_3"
          >
           <InputNumber  
               style={{ width: 150 }}
               placeholder="88123456"
       />
          </Form.Item>
        </Panel>
         <Panel header="Гэр бүлийн гишүүн 4" key="4">
          <Form.Item 
            label="Овог"
            name="familyLastName_4"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Нэр"
            name="familyFirstName_4"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Таны хэн болох"
            name="familyWhoName_4"
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
            name="familyPhoneNumber_4"
          >
           <InputNumber  
               style={{ width: 150 }}
               placeholder="88123456"
       />
          </Form.Item>
        </Panel>
      </Collapse>
    </>
  );
}