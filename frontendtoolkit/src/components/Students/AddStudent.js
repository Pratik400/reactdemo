import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createStudent } from "../../slices/students";
// import StudentService from "../services/StudentService";

const AddStudent = () => {
  const initialStudentState = {
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

  const [student, setStudent] = useState(initialStudentState);

  const dispatch = useDispatch();

  // onChangeInputField(e, fieldName) {
  //   this.setState({
  //     [fieldName]: e.target.value,
  //   });
  // }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStudent({ ...student, [name]: value });
  };

  const saveStudent = () => {
    const {
      firstName,
      lastName,
      emailAddress,
      contactNo,
      courseCode,
      specialisationCode,
      yearEnrolled,
      nationality,
      userId,
    } = student;

    dispatch(
      createStudent({
        firstName,
        lastName,
        emailAddress,
        contactNo,
        courseCode,
        specialisationCode,
        yearEnrolled,
        nationality,
        userId,
      })
    )
      .unwrap()
      .then((data) => {
        console.log(data);
        setStudent(data);
        // setSubmitted(true);
      })
      .then(() => resetStudent())
      .catch((e) => {
        console.log(e);
      });
  };

  const resetStudent = () => {
    // console.log("this.state" + this.student);
    // console.log("this.initialStudentState" + this.initialStudentState);
    // console.log("initialStudentState" + initialStudentState.data);
    // this.initialStudentState({
    //   studentId: null,
    //   firstName: "",
    //   lastName: "",
    //   emailAddress: "",
    //   contactNo: "",
    //   courseCode: "",
    //   specialisationCode: "",
    //   yearEnrolled: "",
    //   nationality: "",
    //   userId: "",
    // });

    setStudent(initialStudentState);
  };

  return (
    <div className="student-form">
      {/* {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : ( */}
      <div className="row">
        <div className="form-group col-md-6">
          <label htmlFor="title">firstName</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            required
            value={student.firstName}
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
            value={student.lastName}
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
            value={student.emailAddress}
            onChange={handleInputChange}
            name="emailAddress"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="title">contactNo</label>
          <input
            type="number"
            className="form-control"
            id="contactNo"
            required
            value={student.contactNo}
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
            value={student.courseCode}
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
            value={student.specialisationCode}
            onChange={handleInputChange}
            name="specialisationCode"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="title">yearEnrolled</label>
          <input
            type="number"
            className="form-control"
            id="yearEnrolled"
            required
            value={student.yearEnrolled}
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
            value={student.nationality}
            onChange={handleInputChange}
            name="nationality"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="title">userId</label>
          <input
            type="number"
            className="form-control"
            id="userId"
            required
            value={student.userId}
            onChange={handleInputChange}
            name="userId"
          />
        </div>

        <div className="col-12">
          <button onClick={saveStudent} className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default AddStudent;
