const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json());

const db = mysql.createConnection({
    user: 'admin',
    host: '10.10.15.189',
    password: '1123',
    database: 'saindb'
})

app.post("/create", (req, res) => {
    const PhoneNumber = req.body.PhoneNumber;
    const addressDate = req.body.addressDate;
    const addressDetail= req.body.addressDetail;
    const city = req.body.city;
    const district = req.body.district;
    const education = req.body.education;
    const familyFirstName_1 = req.body.familyFirstName_1;
    const familyLastName_1 = req.body.familyLastName_1;
    const familyPhoneNumber_1 = req.body.familyPhoneNumber_1;
    const familyType = req.body.familyType;
    const familyWhoName_1 = req.body.familyWhoName_1;
    const firstName = req.body.firstName;
    const gender = req.body.gender;
    const khoroo = req.body.khoroo;
    const lastName = req.body.lastName;
    const monthExpense = req.body.monthExpense;
    const monthIncome = req.body.monthIncome;
    const ownerType = req.body.ownerType;
    const rd1 = req.body.rd1;
    const rd2 = req.body.rd2;
    const registerNumber = req.body.registerNumber;
    const uragiinOvog = req.body.uragiinOvog;
  
    db.query(
      `INSERT INTO leasing (
        phonenumber, 
        addressdate, 
        addressdetial, 
        city, 
        district, 
        education,
        familyFristName_1,
        familyLastName_1,
        familyPhoneNumber_1,
        familyType,
        familyWhoName_1,
        firstName,
        gerder,
        khoroo,
        lastName,
        monthExpense,
        monthIncome,
        ownerType,
        rd1,
        rd2,
        registerNumber,
        uragiinOvog) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [PhoneNumber,
        addressDate,
        addressDetail,
        city,
        district,
        education,
        familyFirstName_1,
        familyLastName_1,
        familyPhoneNumber_1,
        familyType,
        familyWhoName_1,
        firstName,
        gender,
        khoroo,
        lastName,
        monthExpense,
        monthIncome,
        ownerType,
        rd1,
        rd2,
        registerNumber,
        uragiinOvog],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });

app.listen(3001, () => {
    console.log('check')
} )