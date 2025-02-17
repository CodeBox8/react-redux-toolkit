import { createSlice } from "@reduxjs/toolkit";


const studentSlice = createSlice({
  name: "students",
  initialState: [],
  reducers: {
    addStudent: (state, action) => {
      state.push(action.payload);
    },
    editStudent: (state, action) => {
      const { index, name } = action.payload;
      state[index] = name;
    },
    deleteStudent: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { addStudent, editStudent, deleteStudent } = studentSlice.actions;
export default studentSlice.reducer;