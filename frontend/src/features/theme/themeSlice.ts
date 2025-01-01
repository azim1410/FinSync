import { createSlice } from '@reduxjs/toolkit'

interface Themes {
    mytheme: string,
}
const initialState: Themes = {
    mytheme: 'dark',
}
export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            const currenttheme = state.mytheme;
            if(currenttheme === 'light'){
                state.mytheme = 'dark'
            }
            else {
                state.mytheme = 'light'
            }
        }
    }

})

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;