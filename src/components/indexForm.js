import React, { useState, useEffect } from "react";
import { Steps, Form, Button, Row, Col, message } from "antd";
import "../../src/App.css";
import axios from "axios";
import UserInfo from "./userInfo";
import ContactInfo from "./contactInfo";
import EducationInfo from "./educationInfo";
import WorkInfo from "./workInfo";
import FamilyInfo from "./familyInfo";
import ThanksInfo from "./thanksInfo";
import styles from '../mystyle.module.css'; 

export default function IndexForm() {
  const { Step } = Steps;
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();
  const layout = { labelCol: { span: 26 } , wrapperCol: { span: 26 }, };
  const steps = [
    { 
      title: "ХУВИЙН МЭДЭЭЛЭЛ",
      content: <UserInfo />,
      status: current == 0 ? "process" : "wait",
      step: 0,
      
    },
    {
      title: "ХОЛБОО БАРИХ МЭДЭЭЛЭЛ",
      content: <ContactInfo />,
      status: current == 1 ? "process" : "wait",
      step: 1,
    },
    {
      title: "БОЛОВСРОЛЫН МЭДЭЭЛЭЛ",
      content: <EducationInfo />,
      status: current == 2 ? "process" : "wait",
      step: 2,
    },
    {
      title: "АЖИЛ ЭРХЛЭЛТИЙН МЭДЭЭЛЭЛ",
      content: <WorkInfo />,
      status: current == 3 ? "process" : "wait",
      step: 3,
    },
    { 
      title: "ГЭР БҮЛИЙН МЭДЭЭЛЭЛ",
      content: <FamilyInfo />,
      status: current == 4 ? "process" : "wait",
      step: 4,
    },
    { 
      title: "",
      content: <ThanksInfo />,
      status: current == 5 ? "process" : "wait",
      step: 5,
    },
  
    // {title: "ОРЛОГО НОТЛОХ ТӨРӨЛ",content: <IncomeVerification />,status: current == 4 ? "process" : "wait",description: "E-Mongolia -р баталгаажуулах боломжтой",step: 4, },
  ];
 
  const onFinish = (values) => {
    console.log("Success123:", values);
    setCurrent(current + 1);

   axios.post(
        "http://10.10.15.2:3001/create", values )
        .then((response) =>
        {
          setCurrent(current + 1);
        console.log("res:", response);
        message.success("Амжилттай хадгалагдлаа");
        form.resetFields();
        })
        .catch(error => {
          onFinishFailed()
       });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.success("Алдаа гарлаа");
  };

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  useEffect(() => {  
  }, []); 
  return (
    <div
        style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="cardStyleStep"  >
        <Steps
          className="step"
          size="small"
          status="stepStatus"
          mode="horizontal"

          
          
        >
          {steps.map((item) => (
            <Step
              key={item.title}
              // title={item.title}
              status={item.status}
              description={item.description}
              content={item.content}
            />
          ))}
        </Steps>
      </div>
      <div
        className="cardStyle"
        style={{ display: "flex", flexDirection: "column", width: "80%",  }}
      >
          <div style={{color:"Black", textAlign: "center", padding: "20px",  margin: "0px 0px", fontWeight: "bold" }}>
            {steps[current].title}
          </div>

            <Form
              {...layout}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              size="large"
            >
              <Row 
              justify="center"
              >
                <Col>
                  {steps.map((item) => (
                    <div style={{ display: item.step == current ? "block" : "none", }} >
                      {item.content}
                    </div>
                  ))}
                  <Form.Item 
                  className={styles.but}
                  >
                    {current <5 && current>0 && (
                      <Button  
                        
                        shape="round"
                        style={{ margin: "8px" , width: 210 }}
                        onClick={() => prev()}
                      > Өмнөх алхам руу буцах
                      </Button> )}
                    {current < steps.length - 2 && (
                      <Button 
                        shape="round"
                        style={{ margin: "8px" , width: 210 }} 
                        type="primary" 
                        onClick={() => next()}
                      > Үргэлжлүүлэх
                      </Button> )}
                    {current === steps.length - 2 && (
                      <Button
                        shape="round"
                        style={{ margin: "8px", width: 210 }}
                        type="primary"
                        htmlType="submit"
                        // onClick={() => onFinish()}
                      >Дуусгах
                      </Button>
                    )}
                  </Form.Item>
                </Col>
              </Row>
            </Form> 
      </div>
    </div>
  );
}
