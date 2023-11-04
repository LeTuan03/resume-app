import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        key: Math.random(),
        child: [{ key: Math.random(), data: {}, title: "Untitled" }],
    },
];

export const untitledSlice = createSlice({
    name: "untitled",
    initialState,
    reducers: {
        addUntitled: (state, action) => [...state, action.payload],
        deleteUntitled: (state, action) =>
            state.filter((item) => item.key !== action.payload),
        editUntitled: (state, action) =>
            state.map((item) =>
                item.key === action.payload.key ? action.payload : item
            ),
        addChild: (state, action) => {
            const getParent = state.find((item) => item.key === action.payload);
            getParent.child.push({ key: Math.random(), data: {} });
        },
        editChild: (state, action) => {
            const getParent = state.find(
                (item) => item.key === action.payload.parentKey
            );
            if (getParent) {
                getParent.child = getParent.child.map((i) =>
                    i.key === action.payload.data.key ? action.payload.data : i
                );
            }
        },
        deleteChild: (state, action) => {
            const getParent = state.find(
                (item) => item.key === action.payload.parentKey
            );
            getParent.child = getParent.child.filter(
                (i) => i.key !== action.payload.keyChild
            );
        },
    },
});

export const {
    addUntitled,
    editUntitled,
    deleteUntitled,
    addChild,
    editChild,
    deleteChild,
} = untitledSlice.actions;

export default untitledSlice.reducer;
