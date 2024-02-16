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
    // studentId: req.body.studentId,
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

  Student.updateById(req.params.userId, new Student(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Student with userId ${req.params.userId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Student with userId " + req.params.userId,
        });
      }
    } else res.send(data);
  });
};

// // find all published Tutorials
// exports.findAllPublished = (req, res) => {
//   Tutorial.getAllPublished((err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials.",
//       });
//     else res.send(data);
//   });
// };



// // Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {
//   Tutorial.remove(req.params.id, (err, data) => {
//     if (err) {
//       if (err.kind === "not_found") {
//         res.status(404).send({
//           message: `Not found Tutorial with id ${req.params.id}.`,
//         });
//       } else {
//         res.status(500).send({
//           message: "Could not delete Tutorial with id " + req.params.id,
//         });
//       }
//     } else res.send({ message: `Tutorial was deleted successfully!` });
//   });
// };

// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
//   Tutorial.removeAll((err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all tutorials.",
//       });
//     else res.send({ message: `All Tutorials were deleted successfully!` });
//   });
// };
