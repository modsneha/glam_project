import { createSlice } from '@reduxjs/toolkit';

const courseRegisterSlice = createSlice({
  name: 'courseRegister',
  initialState: {
    name: '',
    address: '',
    course: '',
  },
  reducers: {
    setCourseRegisterDetail(state, action) {
      return action.payload;
    },
  },
});

export const { setCourseRegisterDetail } = courseRegisterSlice.actions;

export default courseRegisterSlice.reducer;
