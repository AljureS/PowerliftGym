import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userId: null,
    userLogged: {}, //
    userAppointments: [],
}

/*
Adaptar la lógica del login para que, si el login es exitoso, la información de usuario se guarde adecuadamente en el store global.
*/
export const turnSlice = createSlice({
    name: 'turn',
    initialState: initialState,
    reducers: {
        
        addLogin: (state, action) =>{
            state.userLogged = action.payload
        },
        addUserId: (state, action) => {
            state.userId = action.payload
        },
        addAppointment: (state, action) => {
            state.userAppointments = action.payload
        },
        cancelAppointment: (state,action) => {
            state.userAppointments = state.userAppointments.map((appointment) => {
                if (appointment.id === action.payload) {
                    return {...appointment, status: "cancelled"}
                }
                return appointment
            })
        }
    }
})


export const { addLogin, addAppointment, addUserId, cancelAppointment } = turnSlice.actions;
