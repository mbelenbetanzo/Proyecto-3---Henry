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
    }






  }


});

export const { addUser } = userSlice.actions
