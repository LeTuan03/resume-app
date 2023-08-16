import { configureStore } from "@reduxjs/toolkit";
import { personalSlice } from "./personal/PersonalSlice";
import { profileSlice } from "./profile/profileSlice";
import { historySlice } from "./history/historySlice";
import { educationSlice } from "./education/educationSlice";
import { linkSlice } from "./link/linkSlice";
import { skillSlice } from "./skill/skillSlice";

export const store = configureStore({
    reducer: {
        personal: personalSlice.reducer,
        profile: profileSlice.reducer,
        history: historySlice.reducer,
        education: educationSlice.reducer,
        link: linkSlice.reducer,
        skill: skillSlice.reducer,
    },
});
