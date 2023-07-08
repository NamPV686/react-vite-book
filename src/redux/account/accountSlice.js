import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    isLoading: true,
    user: {
        email: "",
        phone: "",
        "fullName": "",
        "role": "",
        "avatar": "",
        "id": ""
    }
}

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        doLoginAction: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.isAuthenticated = true;
            state.isLoading = false;
            state.user = action.payload;
        },
    },

    extraReducers: (builder) => {

    }
});

export const { doLoginAction } = accountSlice.actions;

export default accountSlice.reducer;