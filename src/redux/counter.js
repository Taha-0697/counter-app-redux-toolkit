import { createSlice } from "@reduxjs/toolkit";

export const counterSlixe = createSlice({
    name: "counter",

//initial value / state
    initialState: {
        countValue: 0,
    },

//reduxer / functions
    reducers: {
        increment: (state) => {
            state.countValue += 1;
        },
        decrement: (state) => {
            state.countValue -= 1;
        },
        reset : (state) => {
            state.countValue = 0;
        }

    },
});

//Actions
export const {increment,decrement,reset} =counterSlixe.actions;

export default counterSlixe.reducer;