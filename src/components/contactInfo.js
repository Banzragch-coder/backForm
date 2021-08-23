import React, { useState, useEffect } from "react";
import { 
  Form, 
  Input, 
  Select ,
  InputNumber
} from "antd";
import styles from '../mystyle.module.css'; 
const { Option } = Select;
const { TextArea } = Input;

export default function ContactInfo() {
  return (
    <>
    {/* INPUT Group hasaw */}
      <Form.Item
        className={styles.form}
        label="Facebook хаяг"
        name="fb"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <Input className={styles.input} />
      </Form.Item>
      <Form.Item
          className={styles.form}
          label="Email хаяг"
          name="email"
          rules={[
            {required: true,message: "Талбарын утга хоосон байна.!", },
            {type: "email",message: "email хаягаа бичнэ үү", },
            ]}
            // rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
            >
          <Input className={styles.input} />
       </Form.Item>
       <Form.Item
        className={styles.form}
        label="Одоо амьдарч байгаа хаяг"
        name="addressNow"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <TextArea
          className={styles.input}
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      </Form.Item>
      <Form.Item
        className={styles.form}
        label="Албан ёсны бүртгэлтэй хаяг"
        name="addressReal"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <TextArea
          className={styles.input}
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      </Form.Item>
      <Form.Item
        className={styles.form}
        style={{ display: "flex", justifyContent: "flex-end"  }}
        label="Утасны дугаар  "
        name="phoneNumber"
        rules={[
          {
              required: true,
              message: 'Заавал бөглөнө үү',
          },{
              pattern: /^[8-9]{1,7}/,
              message: 'утасны дугаар буруу байна',
          },
          {
            pattern: /^[\d]{0,8}$/,
            message: "утасны дугаар 8 орон хэтэрсэн байна",
          },
      ]}
          >
        <Input
          className={styles.input}

          />
      </Form.Item>
    </>
  );
}