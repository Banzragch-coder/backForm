import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import "./App.css";
import "antd/dist/antd.css";
//components and layouts
import Header from "./layout/header";
import Content from "./layout/content";
import Footer from "./layout/footer";
import axios from "axios";
// import onFinish from "./layout/conten"

function App() {

  const [phoneNumber, setPhoneNumber] = useState("");
  const [addressDate, setAddressDate] = useState("");
  const [addressDetail, AddressDetail] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [education, setEducation] = useState("");
  const [familyFirstName_1, setFamilyFirstName_1] = useState("");
  const [familyPhoneNumber_1, setFamilyPhoneNumber_1] = useState("");
  const [familyWhoName_1, setFamilyWhoName_1] = useState("");
  const [firstName, setFirstName] = useState("");
  const [gender, setGender] = useState("");
  const [familyType, setFamilyType] = useState("");
  const [khoroo, setKhoroo] = useState("");
  const [lastName, setLastName] = useState("");
  const [monthExpense, setMonthExpense] = useState("");
  const [monthIncome, setMonthIncome] = useState("");
  const [ownerType, setOwnerType] = useState("");
  const [rd1, setRd1] = useState("");
  const [rd2, setRd2] = useState("");
  const [registerNumber, setRegisterNumber] = useState("");
  const [uragiinOvog, setUragiinOvog] = useState("");

  // const onFinish = (Values) => { 
  //  axios.post("http://localhost:5001/create",values

  //  {
  //     phoneNumber:phoneNumber,
  //     addressDate:addressDate, 
  //     addressDetail:addressDetail, 
  //     city:city, 
  //     district:district, 
  //     education:education, 
  //     familyFirstName_1:familyFirstName_1, 
  //     familyLastName_1:familyLastName_1, 
  //     familyPhoneNumber_1:familyPhoneNumber_1, 
  //     familyType:familyType, 
  //     familyWhoName_1:familyWhoName_1, 
  //     firstName:firstName, 
  //     gender:gender, 
  //     khoroo:khoroo, 
  //     lastName:lastName, 
  //     monthExpense:monthExpense, 
  //     monthIncome:monthIncome, 
  //     ownerType:ownerType, 
  //     rd1:rd1, 
  //     rd2:rd2, 
  //     registerNumber:registerNumber, 
  //     uragiinOvog:uragiinOvog
  //    }
  //    )
    
  //     .then((response) => {
  //       console.log("res:", response);
  //       message.success("Амжилттай хадгалагдлаа");
  //       form.resetFields();
  //     });
  // };
  return (
    <Layout className="layout" style={{ minHeight: "100vh" }}>
      {/* #0000FF  background:"#FFD700"   color: "white", fontSize: "1.5rem", font: "bold"*/}
      <Header />
      <Content />
      <Footer />
    </Layout>
  );
}

export default App;
