import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    link: [
        {
            key: Math.random(),
            lable: "",
            link: "",
        },
    ],
};

export const linkSlice = createSlice({
    name: "link",
    initialState,
    reducers: {
        addLink: (state, action) => {
            state.link = [...state.link, action.payload];
        },
        editLink: (state, action) => {
            state.link = state.link.map((item) =>
                item.key === action.payload.key ? action.payload : item
            );
        },
        deleteLink: (state, action) => {
            state.link = state.link.filter(
                (item) => item.key !== action.payload
            );
        },
    },
});

export const { addLink, editLink, deleteLink } = linkSlice.actions;

export default linkSlice.reducer;
