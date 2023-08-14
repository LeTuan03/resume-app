import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profile: [],
};

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        addProfile: (state, action) => action.payload,
    },
});

export const { addProfile } = profileSlice.actions;

export default profileSlice.reducer;
