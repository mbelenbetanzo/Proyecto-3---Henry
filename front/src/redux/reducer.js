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
    },
    cancelAppointmentBoton: (state, action) => {
      state.userAppointments = state.userAppointments.map((appointment) => {
        if (appointment.id === action.payload) {
          return {...appointment, status: "cancelado"}
        } 
        return appointment;
      })
    },
  }
});

export const { addUser, addUserAppointments, cancelAppointmentBoton } = userSlice.actions
