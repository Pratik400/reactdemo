import http from "../http-common";

class StudentDataService {
  getAllStudents() {
    return http.get("/students");
  }

  get(id) {
    return http.get(`/students/${id}`);
  }

  create(data) {
    return http.post("/students", data);
  }

  update(studentId, data) {
    return http.put(`/students/${studentId}`, data);
  }

  delete(studentId) {
    return http.delete(`/students/${studentId}`);
  }
}

const studentDataServiceInstance = new StudentDataService();
export default studentDataServiceInstance;
