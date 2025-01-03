import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
}

const initialState : AuthState = {
    token: localStorage.getItem('token') || null,
    isAuthenticated: !!localStorage.getItem('token'),
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<{token: string;}>) => {
            state.token = action.payload.token;
            state.isAuthenticated = true;
            localStorage.setItem('token', action.payload.token);
        },
        logout: (state) => {
            state.token = null;
            state.isAuthenticated = false;
            localStorage.removeItem('token');
        }
    }
})


export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;