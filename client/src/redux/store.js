// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import coursePlanReducer from './coursePlansSlice';
import courseRegisterReducer from './courseRegisterSlice';
import serviceReducer from './serviceSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    coursePlans: coursePlanReducer,
    courseRegister: courseRegisterReducer,
    service: serviceReducer,
  },
});

export default store;