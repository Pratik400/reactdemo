const Student = require("../models/student.model.js");

// Create and Save a new Student
exports.createStudents = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a student
  const student = new Student({
    studentId: req.body.studentId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    emailAddress: req.body.emailAddress,
    contactNo: req.body.contactNo,
    courseCode: req.body.courseCode,
    specialisationCode: req.body.specialisationCode,
    yearEnrolled: req.body.yearEnrolled,
    nationality: req.body.nationality,
    userId: req.body.userId || false,
  });

  // Save student in the database
  Student.createStudents(student, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the student.",
      });
    else res.send(data);
  });
};

// Retrieve all student from the database (with condition).
exports.findAllStudents = (req, res) => {
  const studentId = req.query.studentId;

  Student.getAllStudents(studentId, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    else res.send(data);
  });
};

// Find a single student by Id
exports.findOneStudents = (req, res) => {
  Student.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Student with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Student with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

// Update a single identified by the id in the request
exports.updateStudent = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  console.log(req.body);

  Student.updateById(req.params.studentId, new Student(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Student with studentId ${req.params.studentId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Student with studentId " + req.params.studentId,
        });
      }
    } else res.send(data);
  });
};




