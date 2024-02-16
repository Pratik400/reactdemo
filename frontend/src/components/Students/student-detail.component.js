import React, { Component } from "react";
import { connect } from "react-redux";
import { updateStudent } from "../../actions/students";
import StudentDataService from "../../services/student.service";

class StudentDetails extends Component {
  constructor(props) {
    super(props);

    // this.saveStudent = this.saveStudent.bind(this);
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
        this.state.currentStudent.userId,
        this.state.currentStudent
      )
      .then((reponse) => {
        console.log(reponse);
        this.setState({ message: "The Student was updated successfully!" });
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
        <h4>Student detail #{currentStudent.userId}</h4>
        <br />
        {currentStudent ? (
          <div className="row">
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

            <div className="col-12">
              <button
                onClick={this.updateStudentProfile}
                className="btn btn-success"
              >
                Submit
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
export default connect(null, { updateStudent })(StudentDetails);
