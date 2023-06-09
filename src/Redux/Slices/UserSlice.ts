import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../Store/Store';
import { User } from './../../Models/User';

interface userInitState{
    user: User | null
}

const initialState: userInitState = {
    user: null
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        }
    }
})

export const { setUser } = userSlice.actions;

export const getUser = (state: RootState) => state.user.user;

export default userSlice.reducer;