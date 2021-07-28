import React from "react";
import { Form, Input, Select,DatePicker} from "antd";
import styles from '../mystyle.module.css'; 
const { Option } = Select;
const { TextArea } = Input;


export default function EducationInfo() {
  return (
    <>
      <Form.Item
        className={styles.form}
        label="Боловсролын зэрэг"
        name="educationDegree"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <Select style={{ marginRigh: "auto" , width:"230px" , textAlign:"start"}}  defaultValue="Сонгох">
          <Option value="bechelor">Бакалавр</Option>
          <Option value="master">Магистр</Option>
          <Option value="doctor">Доктор</Option>
          <Option value="high-school">Бүрэн дунд</Option>
        </Select>
      </Form.Item>
      <Form.Item
        className={styles.form}
        label="Эзэмшсэн мэргэжил"
        name="profession"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <Input className={styles.input} />
      </Form.Item>
      <Form.Item
        className={styles.form}
        label="Хаана, ямар сургууль курст суралцсан"
        name="school"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
      <TextArea
          className={styles.input}
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      </Form.Item>
      
      <Form.Item
        className={styles.form}
        label="Элссэн он-сар"
        name="schoolIn"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <DatePicker className={styles.input}/>
      </Form.Item>
      <Form.Item
        className={styles.form}
        label="Төгссөн он-сар"
        name="schoolEnd"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <DatePicker className={styles.input}/>
      </Form.Item>
    </>
  );
}
