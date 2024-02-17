module.exports = (app) => {
  const students = require("../controllers/student.controller.js");

  var router = require("express").Router();

  // Create a new students
  router.post("/", students.createStudents);

  // Retrieve all students
  router.get("/", students.findAllStudents);

  // Retrieve a single students with id
  router.get("/:id", students.findOneStudents);

  // Update a students with id
  router.put("/:studentId", students.updateStudent);

  // Delete a students with id
  router.delete("/:studentId", students.delete);

  app.use("/api/students", router);
};
