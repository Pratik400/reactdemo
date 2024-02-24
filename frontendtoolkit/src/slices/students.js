// students.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StudentDataService from "../services/StudentService";

const initialState = [];

export const createStudent = createAsyncThunk(
  "students/create",
  async ({
    firstName,
    lastName,
    emailAddress,
    contactNo,
    courseCode,
    specialisationCode,
    yearEnrolled,
    nationality,
    userId,
  }) => {
    const res = await StudentDataService.create({
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
    return res.data;
  }
);

export const retrieveStudents = createAsyncThunk(
  "students/retrieve",
  async () => {
    const res = await StudentDataService.getAll();
    return res.data;
  }
);

export const updateStudent = createAsyncThunk(
  "students/update",
  async ({ id, data }) => {
    const res = await StudentDataService.update(id, data);
    return res.data;
  }
);

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createStudent.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(retrieveStudents.pending, (state, action) => {
        console.log("Loading all Students to state");
      })
      .addCase(retrieveStudents.fulfilled, (state, action) => {
        return [...action.payload];
      })
      .addCase(updateStudent.fulfilled, (state, action) => {
        const index = state.findIndex(
          (student) => student.id === action.payload.id
        );
        state[index] = {
          ...state[index],
          ...action.payload,
        };
      });
  },
});

export default studentSlice.reducer;

// const { reducer } = studentSlice;
// export default reducer;
