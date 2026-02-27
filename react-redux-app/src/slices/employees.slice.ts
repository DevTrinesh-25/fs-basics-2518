import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
    name: 'employees',
    initialState: {
        data:[
            {
      "id": 1,
      "name": "Rahul Mehta",
      "position": "Software Engineer",
      "salary": 60000,
      "createdAt": "2025-12-09T10:00:00Z"
    },
    {
      "id": 2,
      "name": "Sneha Gupta",
      "position": "Project Manager",
      "salary": 85000,
      "createdAt": "2025-12-09T10:05:00Z"
    },
    {
      "id": 3,
      "name": "Arjun Rao",
      "position": "UI/UX Designer",
      "salary": 55000,
      "createdAt": "2025-12-09T10:10:00Z"
    },
    {
      "id": 4,
      "name": "Nisha Reddy",
      "position": "QA Engineer",
      "salary": 50000,
      "createdAt": "2025-12-09T10:15:00Z"
    },
    {
      "id": 5,
      "name": "Karan Patel",
      "position": "DevOps Engineer",
      "salary": 70000,
      "createdAt": "2025-12-09T10:20:00Z"
    }
        ]
    },
    reducers:{
        deleteEmployee: (state, action) => {
            state.data = state.data.filter((employees) => employees.id !== action.payload);
            return state;
        }
    }
});

export const { deleteEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;

