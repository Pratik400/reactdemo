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

  update(userId, data) {
    return http.put(`/students/${userId}`, data);
  }

 
}

const studentDataServiceInstance = new StudentDataService();
export default studentDataServiceInstance;
