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

const remove = (id) => {
  return http.delete(`/students/${id}`);
};

const StudentService = {
  create,
  getAll,
  get,
  update,
  remove,
};

export default StudentService;
