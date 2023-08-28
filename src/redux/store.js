import { configureStore } from "@reduxjs/toolkit";
import { profileSlice } from "./profile/profileSlice";
import { historySlice } from "./history/historySlice";
import { educationSlice } from "./education/educationSlice";
import { linkSlice } from "./link/linkSlice";
import { skillSlice } from "./skill/skillSlice";
import { personalSlice } from "./personal/personalSlice";
import { loadingSlice } from "./loading/loadingSlice";

export const store = configureStore({
    reducer: {
        personal: personalSlice.reducer,
        profile: profileSlice.reducer,
        history: historySlice.reducer,
        education: educationSlice.reducer,
        link: linkSlice.reducer,
        skill: skillSlice.reducer,
        loading: loadingSlice.reducer,
    },
});
