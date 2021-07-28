import React, { useEffect } from "react";
import {
  Form,
  Input,
  Select,
  InputNumber,
} from "antd";
import styles from '../mystyle.module.css'; 

const { Option } = Select;

export default function UserInfo(props) {
  useEffect(() => {
    console.log("props show", props.show);
  });

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <>
      <Form.Item
        label="Ургийн овог"
        name="uragiinOvog"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
        className={styles.form}
      >
        <Input className={styles.input}/>
      </Form.Item>
      <Form.Item
        label="Овог"
        name="lastName"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
        className={styles.form}
      >
        <Input className={styles.input} />
      </Form.Item>
      <Form.Item
        label="Нэр"
        name="firstName"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
        className={styles.form}
      >
        <Input className={styles.input} />
      </Form.Item>
      <Form.Item 
        label="Регистрийн дугаар" 
        name="firstName"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
        className={styles.form}
      >
        <Form className={styles.form}
        >
          <Select 
              name="rd1"
              rules={[{required: true,message: "Заавал бөглөнө үү",},]}  
              placeholder="А-Я" 
              style={{width:"70px", borderRadius:"10px"}}>
            <Option value="А">А</Option>
            <Option value="Б">Б</Option>
            <Option value="В">В</Option>
            <Option value="Г">Г</Option>
            <Option value="Д">Д</Option>
            <Option value="Е">Е</Option>
            <Option value="Ё">Ё</Option>
            <Option value="Ж">Ж</Option>
            <Option value="З">З</Option>
            <Option value="И">И</Option>
            <Option value="Й">Й</Option>
            <Option value="К">К</Option>
            <Option value="Л">Л</Option>
            <Option value="М">М</Option>
            <Option value="Н">Н</Option>
            <Option value="О">О</Option>
            <Option value="Ө">Ө</Option>
            <Option value="П">П</Option>
            <Option value="Р">Р</Option>
            <Option value="С">С</Option>
            <Option value="Т">Т</Option>
            <Option value="У">У</Option>
            <Option value="Ү">Ү</Option>
            <Option value="Ф">Ф</Option>
            <Option value="Х">Х</Option>
            <Option value="Ц">Ц</Option>
            <Option value="Ч">Ч</Option>
            <Option value="Ш">Ш</Option>
            <Option value="Щ">Щ</Option>
            <Option value="Ъ">Ъ</Option>
            <Option value="Ь">Ь</Option>
            <Option value="Ы">Ы</Option>
            <Option value="Э">Э</Option>
            <Option value="Ю">Ю</Option>
            <Option value="Я">Я</Option>
          </Select>
          <Select 
              name="rd2"
              rules={[{required: true,message: "Заавал бөглөнө үү",},]} 
              placeholder="А-Я" 
              style={{width:"70px"}}>
            <Option value="А">А</Option>
            <Option value="Б">Б</Option>
            <Option value="В">В</Option>
            <Option value="Г">Г</Option>
            <Option value="Д">Д</Option>
            <Option value="Е">Е</Option>
            <Option value="Ё">Ё</Option>
            <Option value="Ж">Ж</Option>
            <Option value="З">З</Option>
            <Option value="И">И</Option>
            <Option value="Й">Й</Option>
            <Option value="К">К</Option>
            <Option value="Л">Л</Option>
            <Option value="М">М</Option>
            <Option value="Н">Н</Option>
            <Option value="О">О</Option>
            <Option value="Ө">Ө</Option>
            <Option value="П">П</Option>
            <Option value="Р">Р</Option>
            <Option value="С">С</Option>
            <Option value="Т">Т</Option>
            <Option value="У">У</Option>
            <Option value="Ү">Ү</Option>
            <Option value="Ф">Ф</Option>
            <Option value="Х">Х</Option>
            <Option value="Ц">Ц</Option>
            <Option value="Ч">Ч</Option>
            <Option value="Ш">Ш</Option>
            <Option value="Щ">Щ</Option>
            <Option value="Ъ">Ъ</Option>
            <Option value="Ь">Ь</Option>
            <Option value="Ы">Ы</Option>
            <Option value="Э">Э</Option>
            <Option value="Ю">Ю</Option>
            <Option value="Я">Я</Option>
          </Select>
          <InputNumber 
          name="registerNumber"
          rules={[
            {required: true,message: "Заавал бөглөнө үү",}]}
          />
          </Form>
      </Form.Item>

      <Form.Item 
        label="Хүйс"
        name="gender"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
        className={styles.form}
      >
        <Select defaultValue="Сонгох" style={{width:"230px", justifyContent:"start"}}>
          <Option value="women">Эмэгтэй</Option>
          <Option value="men">Эрэгтэй</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Гэр бүлийн байдал"
        name="familyType"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
        className={styles.form}
      >
        <Select defaultValue="Сонгох" style={{width:"230px", textAlign:"start"}} >
          <Option value="married">Гэрлэсэн</Option>
          <Option value="single">Гэрлээгүй</Option>
        </Select>
      </Form.Item>
    <Form.Item
        label="Авахыг сонирхож байгаа барааны нэр"
        name="baraa"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
        className={styles.form}
      >
        <Input className={styles.input}/>
      </Form.Item>
    </>
  );
}