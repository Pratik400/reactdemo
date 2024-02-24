// StudentService.js

import http from "../http-common";

const create = (data) => {
  return http.post("/students", data);
};

const getAll = () => {
  return http.get("/students");
};

const get = (id) => {
  return http.get(`/students/${id}`);
};

const update = (id, data) => {
  return http.put(`/students/${id}`, data);
};

const StudentService = {
  create,
  getAll,
  get,
  update,
};

export default StudentService;
