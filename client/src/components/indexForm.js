import React, { useState, useEffect } from "react";
import { Steps, Form, Button, Row, Col, message } from "antd";
import "../../src/App.css";
import axios from "axios";
import PersonalInfo from "./personalInfo";
import AddressInfo from "./addressInfo";
import FinanceInfo from "./financeInfo";
import IncomeVerification from "./incomeVerification";
import FamilyInfo from "./familyInfo";


//-------------------------------------------------Hook----------------------------------------------------
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

//-------------------------------------------------------------------------------------------------------------

export default function IndexForm() {
  const { Step } = Steps;
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();
  const layout = { labelCol: { span: 26 } , wrapperCol: { span: 26 }, };
  const steps = [
    {
      title: "ХУВИЙН МЭДЭЭЛЭЛ",
      content: <PersonalInfo />,
      status: current == 0 ? "process" : "wait",
      // description: "Та өөрийн мэдээллээ үнэн зөв бөглөнө үү",
      step: 0,
    },
    {
      title: "ОРШИН СУУГАА ХАЯГ",
      content: <AddressInfo />,
      status: current == 1 ? "process" : "wait",
      // description: "Одоо оршин сууж байгаа хаяг",
      step: 1,
    },
    {
      title: "ОРЛОГЫН МЭДЭЭЛЭЛ",
      content: <FinanceInfo />,
      status: current == 2 ? "process" : "wait",
      // description: "30 хоног тутамд орж ирдэг орлого",
      step: 2,
    },
    {
      title: "ГЭР БҮЛИЙН МЭДЭЭЛЭЛ",
      content: <FamilyInfo />,
      status: current == 3 ? "process" : "wait",
      // description: "Яаралтай үед холбоо барих хүмүүсийн мэдээлэл",
      step: 3,
    },
    // {title: "ОРЛОГО НОТЛОХ ТӨРӨЛ",content: <IncomeVerification />,status: current == 4 ? "process" : "wait",description: "E-Mongolia -р баталгаажуулах боломжтой",step: 4, },
  ];
 
  const size = useWindowSize();
  function onChange(current) {
    console.log("onChange:", current);
    setCurrent(current);
  }


  const onFinish = (values) => {
    console.log("Success123:", values);
   // const obj = { 'овог': values.uragiinOvog, 'хот': values.city, };
   axios.post("http://localhost:5001/create",values)
      .then((response) => {
        console.log("res:", response);
        message.success("Амжилттай хадгалагдлаа");
        form.resetFields();
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
  }, []); // Empty array ensures that effect is only run on mount
  return (
    <div
        style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* <div>
        {size.width}px / {size.height}px
      </div> */}
      <div className="cardStyle">
        <Steps
          direction= {size.width > 640 ? "horizontal" : "vertical"} 
          className="step"
          size="small"
          current={1}
          onChange={onChange}
          status="stepStatus"
          // mode="horizontal"
          // type="navigation"
        >
          {steps.map((item) => (
            <Step
              key={item.title}
              title={item.title}
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
        {steps[current].title}     
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
                <Col xs={24} sm={22} md={20} lg={20} xl={10} xxl={8}>
                  {steps.map((item) => (
                    <div style={{ display: item.step == current ? "block" : "none", }} >
                      {item.content}
                    </div>
                  ))}
                  <Form.Item style={{display: "flex", justifyContent: "flex-end"}}   >
                    {current > 0 && (
                      <Button 
                        style={{ margin: "8px" , width: 200 }}
                        onClick={() => prev()}
                      > Өмнөх алхам руу буцах
                      </Button> )}
                    {current < steps.length - 1 && (
                      <Button 
                      style={{ margin: "8px" , width: 200 }} 
                      type="primary" onClick={() => next()}
                      > Үргэлжлүүлэх
                      </Button> )}
                    {current === steps.length - 1 && (
                      <Button
                        style={{ margin: "8px", width: 200 }}
                        type="primary"
                        htmlType="submit"
                        // onClick={() => message.success("Processing complete!")}
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
