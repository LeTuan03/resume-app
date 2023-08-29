import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        key: Math.random(),
        school: "",
        degree: "",
        start: "",
        end: "",
        city: "",
        description: "",
    },
];

export const educationSlice = createSlice({
    name: "education",
    initialState,
    reducers: {
        addEducation: (state, action) => [...state, action.payload],
        editEducation: (state, action) =>
            state.map((item) =>
                item.key === action.payload.key ? action.payload : item
            ),
        deleteEducation: (state, action) =>
            state.filter((item) => item.key !== action.payload),
    },
});

export const { addEducation, editEducation, deleteEducation } =
    educationSlice.actions;

export default educationSlice.reducer;
