import {
  CREATE_STUDENT,
  RETRIEVE_STUDENTS,
  UPDATE_STUDENT,
  DELETE_STUDENT,
} from "./types";

import StudentDataService from "../services/student.service";

export const createStudent =
  (
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
  ) =>
  async (dispatch) => {
    try {
      const res = await StudentDataService.create({
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
      });

      dispatch({
        type: CREATE_STUDENT,
        payload: res.data,
      });

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

export const retrieveStudents = () => async (dispatch) => {
  try {
    const res = await StudentDataService.getAllStudents();

    dispatch({
      type: RETRIEVE_STUDENTS,
      payload: res.data,
    });

    console.log();
  } catch (err) {
    console.log(err);
  }
};

export const updateStudent = (studentId, data) => async (dispatch) => {
  try {
    const res = await StudentDataService.update(studentId, data);

    dispatch({
      type: UPDATE_STUDENT,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    console.error("Axios error on the frontend:", err);
    console.error("Request URL:", err.config.url); // Log the request URL
    return Promise.reject(err);
  }
};

export const deleteStudent = (studentId) => async (dispatch) => {
  try {
    await StudentDataService.delete(studentId);

    dispatch({
      type: DELETE_STUDENT,
      payload: { studentId },
    });
  } catch (err) {
    console.log(err);
  }
};
