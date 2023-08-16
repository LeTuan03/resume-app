import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    education: [],
};

export const educationSlice = createSlice({
    name: "education",
    initialState,
    reducers: {
        addEducation: (state, action) => {
            state.education = [...state.education, action.payload];
        },
        editEducation: (state, action) => {
            state.education = state.education.map((item) =>
                item.key === action.payload.key ? action.payload : item
            );
        },

        deleteEducation: (state, action) => {
            state.education = state.education.filter(
                (item) => item.key !== action.payload
            );
        },
    },
});

export const { addEducation, editEducation, deleteEducation } =
    educationSlice.actions;

export default educationSlice.reducer;
