import React, { useEffect } from "react";
import {
  Layout,
  Button,
  Form,
  Input,
  Select,
  Col,
  Row,
  InputNumber,
} from "antd";

const { Option } = Select;

export default function PersonalInfo(props) {
  useEffect(() => {
    console.log("props show", props.show);
  });
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <>
    
      <Form.Item
        style={{ marginLeft: "0px", marginTop: "20px", display: "flex", justifyContent: "flex-end"  }}
        label="Ургийн овог"
        name="uragiinOvog"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <Input  />
      </Form.Item>
      <Form.Item
        
        label="Овог"
        name="lastName"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Нэр"
        name="firstName"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item 
        label="Регистрийн дугаар" 
        name="firstName"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
      <Input.Group 
      style={{ display: "flex", justifyContent: "flex-end" 
      }}>
      <Form.Item
            // style={{marginRight:"20px"}}
            name="rd1"
            rules={[{required: true,message: "Заавал бөглөнө үү",},]}
          >
                      <Select placeholder="А-Я" style={{ width: 70 }}>
                        <Option value="А">А</Option>
                        <Option value="Б">Б</Option>
                        <Option value="В">В</Option>
                        <Option value="Д">Д</Option>
                        <Option value="Г">Г</Option>
                        <Option value="Е">Е</Option>
                        <Option value="Ж">Ж</Option>
                        <Option value="З">З</Option>
                        <Option value="Р">Р</Option>
                        <Option value="И">И</Option>
                        <Option value="Й">Й</Option>
                        <Option value="К">К</Option>
                        <Option value="Л">Л</Option>
                        <Option value="М">М</Option>
                        <Option value="Н">Н</Option>
                        <Option value="О">О</Option>
                        <Option value="П">П</Option>
                        <Option value="С">С</Option>
                        <Option value="Т">Т</Option>
                        <Option value="У">У</Option>
                        <Option value="Ф">Ф</Option>
                        <Option value="Ц">Ц</Option>
                        <Option value="Ч">Ч</Option>
                        <Option value="Х">Х</Option>
                        <Option value="Щ">Щ</Option>
                        <Option value="Ы">Ы</Option>
                        <Option value="Ь">Ь</Option>
                        <Option value="Э">Э</Option>
                        <Option value="Я">Я</Option>
                        <Option value="Ю">Ю</Option>
                        <Option value="Ш">Ш</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      // style={{ margin: "15px" }}
                      // style={{marginRight:"20px"}}
                      name="rd2"
                      rules={[{required: true,message: "Заавал бөглөнө үү",},]}
                    >
                      <Select placeholder="А-Я" style={{ width: 70 }}>
                        <Option value="А">А</Option>
                        <Option value="Б">Б</Option>
                        <Option value="В">В</Option>
                        <Option value="Д">Д</Option>
                        <Option value="Г">Г</Option>
                        <Option value="Е">Е</Option>
                        <Option value="Ж">Ж</Option>
                        <Option value="З">З</Option>
                        <Option value="Р">Р</Option>
                        <Option value="И">И</Option>
                        <Option value="Й">Й</Option>
                        <Option value="К">К</Option>
                        <Option value="Л">Л</Option>
                        <Option value="М">М</Option>
                        <Option value="Н">Н</Option>
                        <Option value="О">О</Option>
                        <Option value="П">П</Option>
                        <Option value="С">С</Option>
                        <Option value="Т">Т</Option>
                        <Option value="У">У</Option>
                        <Option value="Ф">Ф</Option>
                        <Option value="Ц">Ц</Option>
                        <Option value="Ч">Ч</Option>
                        <Option value="Х">Х</Option>
                        <Option value="Щ">Щ</Option>
                        <Option value="Ы">Ы</Option>
                        <Option value="Ь">Ь</Option>
                        <Option value="Э">Э</Option>
                        <Option value="Я">Я</Option>
                        <Option value="Ю">Ю</Option>
                        <Option value="Ш">Ш</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      // style={{ marginRight: "10px" }}
                      name="registerNumber"
                      rules={[
                        {required: true,message: "Заавал бөглөнө үү",}]}
                    >
            <InputNumber  
              style={{ width: 150 }}
              // defaultValue={88112233}
              min={10000000}
              max={99999999}
            />
          </Form.Item>
        </Input.Group>
      </Form.Item>
      <Form.Item
        label="Хүйс"
        name="gender"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <Select  defaultValue="Сонгох">
          <Option value="women">Эмэгтэй</Option>
          <Option value="men">Эрэгтэй</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Гэр бүлийн байдал"
        name="familyType"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <Select defaultValue="Сонгох">
          <Option value="married">Гэрэлсэн</Option>
          <Option value="single">Ганц бие</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Боловсрол"
        name="education"
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
            style={{ display: "flex", justifyContent: "flex-end"  }}
            label="Утасны дугаар  "
            name="PhoneNumber"
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
    </>
  );
}