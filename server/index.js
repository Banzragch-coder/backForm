const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "0525",
  database: "sainleasing",
});

app.post("/create", (req, res) => {
  const phoneNumber = req.body.phoneNumber;
  const addressDate = req.body.addressDate;
  const addressDetail = req.body.addressDetail;
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
    "INSERT INTO leasing (phoneNumber, addressDate, addressDetail, city, district, education, familyFirstName_1, familyLastName_1, familyPhoneNumber_1, familyType, familyWhoName_1, firstName, gender, khoroo, lastName, monthExpense, monthIncome, ownerType, rd1, rd2, registerNumber, uragiinOvog ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                         [phoneNumber, addressDate, addressDetail, city, district, education, familyFirstName_1, familyLastName_1, familyPhoneNumber_1, familyType, familyWhoName_1, firstName, gender, khoroo, lastName, monthExpense, monthIncome, ownerType, rd1, rd2, registerNumber, uragiinOvog],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

// app.get("/employees", (req, res) => {
//   db.query("SELECT * FROM employees", (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

// app.put("/update", (req, res) => {
//   const id = req.body.id;
//   const wage = req.body.wage;
//   db.query(
//     "UPDATE employees SET wage = ? WHERE id = ?",
//     [wage, id],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });

// app.delete("/delete/:id", (req, res) => {
//   const id = req.params.id;
//   db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

app.listen(5001, () => {
  console.log("Yey, your server is running on port 5001");
});

// PhoneNumber: 99999999
// addressDate: "2year"
// addressDetail: "БГД 12-34-45"
// city: "Ulaanbaatar"
// district: "Khan-Uul"
// education: "bechelor"
// familyFirstName_1: "Бан"
// familyLastName_1: "Банбан"
// familyPhoneNumber_1: 88112277
// familyType: "married"
// familyWhoName_1: "sister"
// firstName: "Банзрагчч"
// gender: "women"
// khoroo: "2khoroo"
// lastName: "Чимэддорж"
// monthExpense: 1080000
// monthIncome: 10080000
// ownerType: "renter"
// rd1: "Б"
// rd2: "Б"
// registerNumber: 10000000
// uragiinOvog: "Боржгон"