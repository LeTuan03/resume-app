import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isShow: false,
    skill: [],
};

export const skillSlice = createSlice({
    name: "skill",
    initialState,
    reducers: {
        addSkill: (state, action) => {
            state.skill = [...state.skill, action.payload];
        },
        editSkill: (state, action) => {
            state.skill = state.skill.map((item) =>
                item.key === action.payload.key ? action.payload : item
            );
        },
        deleteSkill: (state, action) => {
            state.skill = state.skill.filter(
                (item) => item.key !== action.payload
            );
        },
        setShow: (state) => {
            state.isShow = !state.isShow;
        },
    },
});

export const { addSkill, editSkill, deleteSkill, setShow } = skillSlice.actions;

export default skillSlice.reducer;
