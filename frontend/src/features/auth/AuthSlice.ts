import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface AuthState {
    userId: string | null,
    token: string | null;
    isAuthenticated: boolean;
}

const initialState : AuthState = {
    userId: localStorage.getItem('userId') || null,
    token: localStorage.getItem('token') || null,
    isAuthenticated: !!localStorage.getItem('token'),
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<{token: string, userId: string;}>) => {
            state.userId = action.payload.userId;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('userId', action.payload.userId);
        },
        logout: (state) => {
            state.token = null;
            state.userId = null;
            state.isAuthenticated = false;
            localStorage.removeItem('token');
            localStorage.removeItem('userId');

        }
    }
})


export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;