import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        key: Math.random(),
        lable: "",
        link: "",
    },
];

export const linkSlice = createSlice({
    name: "link",
    initialState,
    reducers: {
        addLink: (state, action) => [...state, action.payload],
        editLink: (state, action) =>
            state.map((item) =>
                item.key === action.payload.key ? action.payload : item
            ),
        deleteLink: (state, action) =>
            state.filter((item) => item.key !== action.payload),
    },
});

export const { addLink, editLink, deleteLink } = linkSlice.actions;

export default linkSlice.reducer;
