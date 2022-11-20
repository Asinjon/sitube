import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    isExpanded: false,
}
export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        toggleState: (state) => {
            state.isExpanded = !state.isExpanded;
        }
    }
});

export const {toggleState} = menuSlice.actions;
export default menuSlice.reducer;