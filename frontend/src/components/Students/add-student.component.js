import React, { Component } from "react";
import { connect } from "react-redux";
import { createStudent } from "../../actions/students";

class AddStudent extends Component {
  constructor(props) {
    super(props);

    this.saveStudent = this.saveStudent.bind(this);

    this.state = {
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
  }

  saveStudent() {
    const {
      studentId,
      firstName,
      lastName,
      emailAddress,
      contactNo,
      courseCode,
      specialisationCode,
      yearEnrolled,
      nationality,
      userId,
    } = this.state;

    this.props
      .createStudent(
        studentId,
        firstName,
        lastName,
        emailAddress,
        contactNo,
        courseCode,
        specialisationCode,
        yearEnrolled,
        nationality,
        userId
      )
      .then((data) => {
        // this.setState({
        //   studentId: data.studentId,
        //   firstName: data.firstName,
        //   lastName: data.lastName,
        //   emailAddress: data.emailAddress,
        //   contactNo: data.contactNo,
        //   courseCode: data.courseCode,
        //   specialisationCode: data.specialisationCode,
        //   yearEnrolled: data.yearEnrolled,
        //   nationality: data.nationality,
        //   userId: data.userId,
        // });
        console.log(data);
        // Reset the state after successful form submission
        this.resetState();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  resetState() {
    // Reset the state to its initial values
    this.setState({
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
    });
  }

  onChangeInputField(e, fieldName) {
    this.setState({
      [fieldName]: e.target.value,
    });
  }

  render() {
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
            <label htmlFor="title">studentId</label>
            <input
              type="number"
              className="form-control"
              id="studentId"
              required
              value={this.state.studentId}
              onChange={(e) => this.onChangeInputField(e, "studentId")}
              name="studentId"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="title">firstName</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              required
              value={this.state.firstName}
              onChange={(e) => this.onChangeInputField(e, "firstName")}
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
              value={this.state.lastName}
              onChange={(e) => this.onChangeInputField(e, "lastName")}
              name="lastName"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="title">emailAddress</label>
            <input
              type="email"
              className="form-control"
              id="emailAddress"
              required
              value={this.state.emailAddress}
              onChange={(e) => this.onChangeInputField(e, "emailAddress")}
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
              value={this.state.contactNo}
              onChange={(e) => this.onChangeInputField(e, "contactNo")}
              name="contactNo"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="title">courseCode</label>
            <input
              type="number"
              className="form-control"
              id="courseCode"
              required
              value={this.state.courseCode}
              onChange={(e) => this.onChangeInputField(e, "courseCode")}
              name="courseCode"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="title">specialisationCode</label>
            <input
              type="number"
              className="form-control"
              id="specialisationCode"
              required
              value={this.state.specialisationCode}
              onChange={(e) => this.onChangeInputField(e, "specialisationCode")}
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
              value={this.state.yearEnrolled}
              onChange={(e) => this.onChangeInputField(e, "yearEnrolled")}
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
              value={this.state.nationality}
              onChange={(e) => this.onChangeInputField(e, "nationality")}
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
              value={this.state.userId}
              onChange={(e) => this.onChangeInputField(e, "userId")}
              name="userId"
            />
          </div>

          <div className="col-12">
            <button onClick={this.saveStudent} className="btn btn-success">
              Submit
            </button>
          </div>
        </div>
        {/* )} */}
      </div>
    );
  }
}

export default connect(null, { createStudent })(AddStudent);
