import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    history: [
        {
            key: Math.random(),
            job_title: "",
            employer: "",
            start: "",
            end: "",
            city: "",
            description: "",
        },
    ],
};

export const historySlice = createSlice({
    name: "history",
    initialState,
    reducers: {
        addHistory: (state, action) => {
            state.history = [...state.history, action.payload];
        },
        editHistory: (state, action) => {
            state.history = state.history.map((item) =>
                item.key === action.payload.key ? action.payload : item
            );
        },

        deleteHistory: (state, action) => {
            state.history = state.history.filter(
                (item) => item.key !== action.payload
            );
        },
    },
});

export const { addHistory, editHistory, deleteHistory } = historySlice.actions;

export default historySlice.reducer;
