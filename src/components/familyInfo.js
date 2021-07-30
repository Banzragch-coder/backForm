import React from "react";
import { Form, Input, Select, InputNumber, Collapse ,Checkbox , Cascader, Row, Col, Button, AutoComplete,
  onChange } from "antd";

import styles from '../mystyle.module.css'; 
import ThanksInfo from "./thanksInfo";
const { Option } = Select;
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};


function Click(e) {
  console.log(`checked = ${e.target.checked}`);
}

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
            className={styles.form}
            label="Овог"
            name="familyLastName_1"
            rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
          >
            <Input className={styles.input}/>
          </Form.Item>
          <Form.Item
            className={styles.form}
            label="Нэр"
            name="familyFirstName_1"
            rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
          >
            <Input className={styles.input}/>
          </Form.Item>
          <Form.Item
            className={styles.form}
            label="Таны хэн болох"
            name="familyWhoName_1"
            rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
          >
            <Select style={{width:"240px" , textAlign:"start"}} defaultValue="Сонгох">
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
            className={styles.form}
            style={{ display: "flex", justifyContent: "flex-end"  }}
            label="Утасны дугаар  "
            name="familyPhoneNumber_1"
            rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
          >
           <InputNumber  
             className={styles.input}
          />
          </Form.Item>
          <div style={{color:"red", textAlign: "center", padding: "20px", fontSize:"12px"  }}>
      2-c дээш гэр бүлийн гишүүний мэдээлэл бөглөх шаардлагатайг анхаарна уу!
    </div>
        </Panel>
         <Panel header="Гэр бүлийн гишүүн 2" key="2">
          <Form.Item 
            className={styles.form}
            label="Овог"
            name="familyLastName_2"
            rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
          >
            <Input className={styles.input}/>
          </Form.Item>
          <Form.Item
            className={styles.form}
            label="Нэр"
            name="familyFirstName_2"
            rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
          >
            <Input className={styles.input}/>
          </Form.Item>
          <Form.Item
            className={styles.form}
            label="Таны хэн болох"
            name="familyWhoName_2"
            rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
          >
            <Select style={{width:"240px", textAlign:"start"}}defaultValue="Сонгох">
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
            className={styles.form}
            label="Утасны дугаар  "
            name="familyPhoneNumber_2"
            rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
          >
           <InputNumber
             className={styles.input} 
       />
          </Form.Item>
        </Panel>
         <Panel header="Гэр бүлийн гишүүн 3" key="3">
          <Form.Item 
            className={styles.form}
            label="Овог"
            name="familyLastName_3"
          >
            <Input className={styles.input}/>
          </Form.Item>
          <Form.Item
            className={styles.form}
            label="Нэр"
            name="familyFirstName_3"
          >
            <Input className={styles.input}/>
          </Form.Item>
          <Form.Item
            className={styles.form}
            label="Таны хэн болох"
            name="familyWhoName_3"
          >
            <Select style={{width:"240px", textAlign:"start"}}defaultValue="Сонгох">
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
            className={styles.form}
            style={{ display: "flex", justifyContent: "flex-end"  }}
            label="Утасны дугаар  "
            name="familyPhoneNumber_3"
          >
           <InputNumber  
             className={styles.input}
       />
          </Form.Item>
        </Panel>
         <Panel header="Гэр бүлийн гишүүн 4" key="4">
          <Form.Item 
            className={styles.form}
            label="Овог"
            name="familyLastName_4"
          >
            <Input className={styles.input} />
          </Form.Item>
          <Form.Item
            className={styles.form}
            label="Нэр"
            name="familyFirstName_4"
          >
            <Input className={styles.input}/>
          </Form.Item>
          <Form.Item
            className={styles.form}
            label="Таны хэн болох"
            name="familyWhoName_4"
          >
            <Select style={{width:"240px", textAlign:"start"}} defaultValue="Сонгох">
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
            className={styles.form}
            label="Утасны дугаар  "
            name="familyPhoneNumber_4"
          >
           <InputNumber  
             className={styles.input}
       />
          </Form.Item>
        </Panel>
        <Form.Item 
        
        className={styles.but}
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Заавал бөглөнө үү')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox className={styles.check} >
        Зээлийн мэдээллийн сангаас миний мэдээллийг авахыг <a style={{color:"green"}}>зөвшөөрөв</a>
        </Checkbox>
      </Form.Item>
          </Collapse>
          
    </>
  );
}