import { configureStore } from "@reduxjs/toolkit";
import { personalSlice } from "./personal/PersonalSlice";
import { profileSlice } from "./profile/profileSlice";
import { historySlice } from "./history/historySlice";

export const store = configureStore({
    reducer: {
        personal: personalSlice.reducer,
        profile: profileSlice.reducer,
        history: historySlice.reducer,
    },
});
