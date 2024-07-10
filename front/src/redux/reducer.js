import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 userActive: {},
 userAppointments: []
}

export const userSlice = createSlice({
  name: "userData",
  initialState : initialState,
  reducers: {
    addUser: (state, action) => {
        state.userActive = action.payload
    },
    addUserAppointments: (state, action) => {
      state.userAppointments = action.payload
    }






  }


});

export const { addUser, addUserAppointments } = userSlice.actions
