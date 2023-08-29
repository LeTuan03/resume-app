import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        key: Math.random(),
        job_title: "",
        employer: "",
        start: "",
        end: "",
        city: "",
        description: "",
    },
];

export const historySlice = createSlice({
    name: "history",
    initialState,
    reducers: {
        addHistory: (state, action) => [...state, action.payload],
        editHistory: (state, action) =>
            state.map((item) =>
                item.key === action.payload.key ? action.payload : item
            ),
        deleteHistory: (state, action) =>
            state.filter((item) => item.key !== action.payload),
    },
});

export const { addHistory, editHistory, deleteHistory } = historySlice.actions;

export default historySlice.reducer;
