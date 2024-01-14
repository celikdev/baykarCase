import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
    isAuth: boolean;
}

const initialState: AuthState = {
    isAuth: false,
};

export const authSlice = createSlice({
    name: "authState",
    initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload;
        },
    },
})

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
