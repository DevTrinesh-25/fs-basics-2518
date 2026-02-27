import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counter.slice';
import vendorReducer from './slices/vendor.slice';
import userReducer from './slices/Users.slice';
import employeeReducer from './slices/employees.slice';

const store = configureStore({
    reducer: {
        counter: counterReducer, // { value: 0 }
        vendors: vendorReducer,
        users: userReducer,
        employees: employeeReducer
    },
    devTools: true,
})

export default store;