//userSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsers } from './api';

export const fetchUsersAsync = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = fetchUsers();
    //console.log(response)
    return response;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    addEmployee: (state, action) => {
    
    /*** ADD EMPLOYEE BY API ***/

    var raw = action.payload;
    

    var requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(raw),
        redirect: 'follow'
    };

    fetch("https://interviewtesting.onrender.com/v1/users/employee/create", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

      state.users.push(action.payload);
    },
    removeEmployee: (state, action) => {

    /*** REMOVE EMPLOYEE BY API ***/

    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      };
      
      fetch("https://interviewtesting.onrender.com/v1/users/employee-remove/"+action.payload, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));


      state.users = state.users.filter(user => user._id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
     .addCase(fetchUsersAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsersAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
  
});

export const { addEmployee, removeEmployee } = userSlice.actions;

export default userSlice.reducer;