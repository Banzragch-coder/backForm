import React, { useEffect } from "react";
import {
  Form,
  Input,
  Select,
  InputNumber,
  DatePicker
} from "antd";
import styles from '../mystyle.module.css'; 
const { Option } = Select;
export default function WorkInfo() {
  return (
    <>
          
      <Form.Item
        className={styles.form}
        label="Албан байгууллага"
        name="organization"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <Input 
        className={styles.input}/>
      </Form.Item>
      <Form.Item
        className={styles.form}
        label="Газар хэлтэс"
        name="heltes"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <Input className={styles.input} />
      </Form.Item>
      <Form.Item
        className={styles.form}
        label="Албан тушаал"
        name="alba"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <Input className={styles.input}/>
      </Form.Item>
      <Form.Item
        className={styles.form}
        label="Ажлын хаяг"
        name="workAddress"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <Input className={styles.input} />
      </Form.Item>
      <Form.Item    
        className={styles.form}      
        style={{ display: "flex", justifyContent: "flex-end"  }}
        label="Удирдах ажилтны утас"
        name="workPhoneNumber"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
          >
          <InputNumber  
            className={styles.input}
          />
      </Form.Item>
      <Form.Item
        className={styles.form}
        label="Орсон он-сар"
        name="workIn"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <DatePicker placeholder="" className={styles.input} />
      </Form.Item>
      <Form.Item
        className={styles.form}
        label="Гарсан он-сар"
        name="workEnd"
      >
        <DatePicker  placeholder=""className={styles.input}/>
      </Form.Item>
    </>
  );
}


