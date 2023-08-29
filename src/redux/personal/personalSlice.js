import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const personalSlice = createSlice({
    name: "personal",
    initialState,
    reducers: {
        add: (state, action) => action.payload,
    },
});

export const { add } = personalSlice.actions;

export default personalSlice.reducer;
