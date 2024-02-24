const sql = require("./db.js");

// constructor
const Student = function (student) {
  this.studentId = student.studentId;
  this.firstName = student.firstName;
  this.lastName = student.lastName;
  this.emailAddress = student.emailAddress;
  this.contactNo = student.contactNo;
  this.courseCode = student.courseCode;
  this.specialisationCode = student.specialisationCode;
  this.yearEnrolled = student.yearEnrolled;
  this.nationality = student.nationality;
  this.userId = student.userId;
};

Student.createStudents = (newStudent, result) => {
  sql.query("INSERT INTO student SET ?", newStudent, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("New student created: ", {
      studentId: res.insertId,
      ...newStudent,
    });
    result(null, { studentId: res.insertId, ...newStudent });
  });
};

Student.getAllStudents = (studentId, result) => {
  let query = "SELECT * FROM student";

  if (studentId) {
    query += ` WHERE studentId LIKE '%${studentId}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("All Students: ", res);
    result(null, res);
  });
};

Student.findById = (id, result) => {
  sql.query(`SELECT * FROM student WHERE studentId = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found Student: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Student with the id
    result({ kind: "not_found" }, null);
  });
};

Student.updateById = (studentId, student, result) => {
  sql.query(
    "UPDATE student SET firstName = ?, lastName = ?, emailAddress = ?, contactNo = ?, courseCode = ?, specialisationCode = ?, yearEnrolled = ?, nationality = ?, userId = ? WHERE studentId = ?",
    [
      student.firstName,
      student.lastName,
      student.emailAddress,
      student.contactNo,
      student.courseCode,
      student.specialisationCode,
      student.yearEnrolled,
      student.nationality,
      student.userId,
      studentId,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Tutorial with the studentId
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated student: ", { studentId: studentId, ...student });
      result(null, { id: studentId, ...student });
    }
  );
};

Student.remove = (studentId, result) => {
  sql.query(
    "DELETE FROM student WHERE studentId = ?",
    studentId,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("deleted student with studentId: ", studentId);
      result(null, res);
    }
  );
};

module.exports = Student;
