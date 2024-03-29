import React, { Component } from "react";
import { connect } from "react-redux";
import { updateStudent, deleteStudent } from "../../actions/students";
import StudentDataService from "../../services/student.service";

class StudentDetails extends Component {
  constructor(props) {
    super(props);

    this.removeStudent = this.removeStudent.bind(this);
    this.updateStudentProfile = this.updateStudentProfile.bind(this);

    this.state = {
      currentStudent: {
        // studentId: "",
        firstName: "",
        lastName: "",
        emailAddress: "",
        contactNo: "",
        courseCode: "",
        specialisationCode: "",
        yearEnrolled: "",
        nationality: "",
        userId: "",
      },
    };
  }

  componentDidMount() {
    this.getStudent(this.props.match.params.id);
  }

  onChangeInputField(e, fieldName) {
    this.setState(function (prevState) {
      return {
        currentStudent: {
          ...prevState.currentStudent,
          [fieldName]: e.target.value,
        },
      };
    });
  }

  getStudent(id) {
    StudentDataService.get(id)
      .then((response) => {
        this.setState({
          currentStudent: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateStudentProfile() {
    this.props
      .updateStudent(
        this.state.currentStudent.studentId,
        this.state.currentStudent
      )
      .then((reponse) => {
        alert("The Student was updated successfully!");
      })
      .catch((e) => {
        console.log("updateStudentProfile()" + e);
      });
  }

  removeStudent() {
    this.props
      .deleteStudent(this.state.currentStudent.studentId)
      .then(() => {
        this.props.history.push("/Studentlist");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentStudent } = this.state;

    return (
      <div>
        <br />
        <h4>
          Student detail studentId #{currentStudent.studentId} userId #
          {currentStudent.userId}
        </h4>
        <br />
        {currentStudent ? (
          <div className="row row border pt-3 pb-3">
            {/* <div className="form-group col-md-6">
              <label htmlFor="title">studentId</label>
              <input
                type="number"
                className="form-control"
                id="studentId"
                required
                value={currentStudent.studentId}
                onChange={(e) => this.onChangeInputField(e, "studentId")}
                name="studentId"
              />
            </div> */}
            <div className="form-group col-md-6">
              <label htmlFor="title">firstName</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                required
                value={currentStudent.firstName}
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
                value={currentStudent.lastName}
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
                value={currentStudent.emailAddress}
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
                value={currentStudent.contactNo}
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
                value={currentStudent.courseCode}
                onChange={(e) => this.onChangeInputField(e, "courseCode")}
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
                onChange={(e) =>
                  this.onChangeInputField(e, "specialisationCode")
                }
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
                value={currentStudent.yearEnrolled}
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
                value={currentStudent.nationality}
                onChange={(e) => this.onChangeInputField(e, "nationality")}
                name="nationality"
              />
            </div>

            <div className="col-12 ">
              <button
                onClick={this.updateStudentProfile}
                className="btn btn-success mr-3"
              >
                UPDATE
              </button>
              <button
                className="btn btn-danger mr-2"
                onClick={this.removeStudent}
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
  }
}

// export default StudentDetails;
export default connect(null, { updateStudent, deleteStudent })(StudentDetails);
