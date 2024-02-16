module.exports = app => {
  const students = require("../controllers/student.controller.js");

  var router = require("express").Router();

  // Create a new students
  router.post("/", students.createStudents);

  // Retrieve all students
  router.get("/", students.findAllStudents);

  // Retrieve a single Tutorial with id
  router.get("/:id", students.findOneStudents);

  // Update a Tutorial with id
  router.put("/:id", students.updateStudent);

  // // Retrieve all published Tutorials
  // router.get("/published", tutorials.findAllPublished);

  // // Delete a Tutorial with id
  // router.delete("/:id", tutorials.delete);

  // // Delete all Tutorials
  // router.delete("/", tutorials.deleteAll);

  app.use("/api/students", router);
};
