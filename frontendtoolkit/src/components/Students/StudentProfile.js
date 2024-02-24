import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StudentService from "../../services/StudentService";
import { updateStudent } from "../../slices/students";
import { useDispatch } from "react-redux";

const StudentProfile = () => {
  const { id } = useParams();
  // let navigate = useNavigate();

  // console.log(id);
  // console.log(navigate);

  const initialStudentState = {
    studentId: "",
    firstName: "",
    lastName: "",
    emailAddress: "",
    contactNo: "",
    courseCode: "",
    specialisationCode: "",
    yearEnrolled: "",
    nationality: "",
    userId: "",
  };

  const [currentStudent, setCurrentStudent] = useState(initialStudentState);
  const dispatch = useDispatch();

  const getStudent = (id) => {
    StudentService.get(id)
      .then((response) => {
        setCurrentStudent(response.data);
        // console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id) {
      getStudent(id);
    }
  }, [id]);

  // console.log("aaa" + JSON.stringify(currentStudent));

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentStudent({ ...currentStudent, [name]: value });
  };

  const updateStudentProfile = () => {
    dispatch(
      updateStudent({ id: currentStudent.studentId, data: currentStudent })
    )
      .unwrap()
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentStudent ? (
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="title">firstName</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              required
              value={currentStudent.firstName}
              onChange={handleInputChange}
              name="firstName"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="title">lastName</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              required
              value={currentStudent.lastName}
              onChange={handleInputChange}
              name="lastName"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="title">emailAddress</label>
            <input
              type="text"
              className="form-control"
              id="emailAddress"
              required
              value={currentStudent.emailAddress}
              onChange={handleInputChange}
              name="emailAddress"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="title">contactNo</label>
            <input
              type="text"
              className="form-control"
              id="contactNo"
              required
              value={currentStudent.contactNo}
              onChange={handleInputChange}
              name="contactNo"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="title">courseCode</label>
            <input
              type="text"
              className="form-control"
              id="courseCode"
              required
              value={currentStudent.courseCode}
              onChange={handleInputChange}
              name="courseCode"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="title">specialisationCode</label>
            <input
              type="text"
              className="form-control"
              id="specialisationCode"
              required
              value={currentStudent.specialisationCode}
              onChange={handleInputChange}
              name="specialisationCode"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="title">yearEnrolled</label>
            <input
              type="text"
              className="form-control"
              id="yearEnrolled"
              required
              value={currentStudent.yearEnrolled}
              onChange={handleInputChange}
              name="yearEnrolled"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="title">nationality</label>
            <input
              type="text"
              className="form-control"
              id="nationality"
              required
              value={currentStudent.nationality}
              onChange={handleInputChange}
              name="nationality"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="title">userId</label>
            <input
              type="text"
              className="form-control"
              id="userId"
              required
              value={currentStudent.userId}
              onChange={handleInputChange}
              name="userId"
            />
          </div>

          <div className="col-12">
            <button onClick={updateStudentProfile} className="btn btn-success">
              Submit
            </button>
            <button
              className="btn btn-danger mr-2"
              // onClick={this.removeStudent}
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <p>aaa</p>
      )}
    </div>
  );
};

export default StudentProfile;
