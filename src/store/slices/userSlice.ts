import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    avatar: string;
    name: string;
    email: string;
    currency: 'USD' | 'EUR';
}

const initialState: UserState = {
    avatar: '',
    name: '',
    email: '',
    currency: 'USD',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAvatar: (state, action: PayloadAction<string>) => {
            state.avatar = action.payload;
        },
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setCurrency: (state, action: PayloadAction<'USD' | 'EUR'>) => {
            state.currency = action.payload;
        },
        toggleCurrency: (state) => {
            state.currency = state.currency === 'USD' ? 'EUR' : 'USD';
        },
    },
});

export const { setAvatar, setName, setEmail, setCurrency, toggleCurrency } = userSlice.actions;
export default userSlice.reducer;
