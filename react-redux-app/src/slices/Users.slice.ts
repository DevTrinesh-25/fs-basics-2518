import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id?: number;
  email: string;
  username: string;
  password: string;
}

interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};
export const fetchUsers = createAsyncThunk('fetchUsers', async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/users');
        return response.data;
    } catch(error) {
        return error;
    }
});

export const addUser = createAsyncThunk("users/addUser",async (user: User) => { 
    try
    {const response = await axios.post("https://fakestoreapi.com/users", user);
    return response.data;
  }catch(error) {
    return error;
  }
});

const userSlice = createSlice({
    name: 'users',
    initialState: {
        isLoading: false,
        data: [],
        error: null
    },
    reducers: {
            
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        });

        builder.addCase(addUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(addUser.fulfilled, (state, action: PayloadAction<User>) => {
            state.users.push(action.payload);
            state.isLoading = false;
        });
    }
});

export default userSlice.reducer;