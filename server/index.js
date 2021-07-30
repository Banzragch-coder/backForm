const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json());

const db = mysql.createConnection({
    user: 'chinzorig',
    host: '10.10.15.189',
    password: 'Sain1234',
    database: 'saindb'
})

app.post("/create", (req, res) => {
    const uragiinOvog = req.body.uragiinOvog;
    const lastName = req.body.lastName;
    const firstName = req.body.firstName;
    const rd1 = req.body.rd1;
    const rd2 = req.body.rd2;
    const registerNumber = req.body.registerNumber;
    const gender = req.body.gender;
    const familyType = req.body.familyType;
    const baraa = req.body.baraa;
    const fb = req.body.fb;
    const email = req.body.email;
    const addressNow = req.body.addressNow;
    const addressReal = req.body.addressReal;
    const phoneNumber = req.body.phoneNumber;
    const educationDegree = req.body.educationDegree;
    const profession = req.body.profession;
    const school = req.body.school;
    const schoolIn = req.body.schoolIn;
    const schoolEnd = req.body.schoolEnd;
    const organization = req.body.organization;
    const heltes = req.body.heltes;
    const alba = req.body.alba;
    const workAddress = req.body.workAddress;
    const workPhoneNumber = req.body.workPhoneNumber;
    const workIn = req.body.workIn;
    const workEnd = req.body.workEnd;
    const familyWhoName_1 = req.body.familyWhoName_1;
    const familyLastName_1 = req.body.familyLastName_1;
    const familyFirstName_1 = req.body.familyFirstName_1;
    const familyPhoneNumber_1 = req.body.familyPhoneNumber_1;
    const familyWhoName_2 = req.body.familyWhoName_2;
    const familyLastName_2 = req.body.familyLastName_2;
    const familyFirstName_2 = req.body.familyFirstName_2;
    const familyPhoneNumber_2 = req.body.familyPhoneNumber_2;
    const familyWhoName_3 = req.body.familyWhoName_3;
    const familyLastName_3 = req.body.familyLastName_3;
    const familyFirstName_3 = req.body.familyFirstName_3;
    const familyPhoneNumber_3 = req.body.familyPhoneNumber_3;
    const familyWhoName_4 = req.body.familyWhoName_4;
    const familyLastName_4 = req.body.familyLastName_4;
    const familyFirstName_4 = req.body.familyFirstName_4;
    const familyPhoneNumber_4 = req.body.familyPhoneNumber_4;

    db.query(
      `INSERT INTO leasing (
        uragiinOvog,
        lastName,
        firstName,
        rd1,
        rd2,
        registerNumber,
        gender,
        familyType,
        baraa,
        fb,
        email,
        addressNow,
        addressReal,
        phoneNumber,
        educationNumber,
        profession,
        school,
        schoolEnd,
        organization,
        heltes,
        alba,
        workAddress,
        workPhoneNumber,
        workIn,
        workEnd,
        familyWhoName_1,
        familyLastName_1,
        familyFirstName_1,
        familyPhoneNumber_1,
        familyWhoName_2,
        familyLastName_2,
        familyFirstName_2,
        familyPhoneNumber_2,
        familyWhoName_3,
        familyLastName_3,
        familyFirstName_3,
        familyPhoneNumber_3,
        familyWhoName_4,
        familyLastName_4,
        familyFirstName_4,
        familyPhoneNumber_4,
        schoolIn
        ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [ uragiinOvog,
        lastName,
        firstName,
        rd1,
        rd2,
        registerNumber,
        gender,
        familyType,
        baraa,
        fb,
        email,
        addressNow,
        addressReal,
        phoneNumber,
        educationDegree,
        profession,
        school,
        schoolEnd,
        organization,
        heltes,
        alba,
        workAddress,
        workPhoneNumber,
        workIn,
        workEnd,
        familyWhoName_1,
        familyLastName_1,
        familyFirstName_1,
        familyPhoneNumber_1,
        familyWhoName_2,
        familyLastName_2,
        familyFirstName_2,
        familyPhoneNumber_2,
        familyWhoName_3,
        familyLastName_3,
        familyFirstName_3,
        familyPhoneNumber_3,
        familyWhoName_4,
        familyLastName_4,
        familyFirstName_4,
        familyPhoneNumber_4,
        schoolIn
        ],
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