import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../Store/Store';
import { User } from './../../Models/User';

interface userInitState{
    user: User | null,
    onlineUsersOnProject: User[] | null
}

const initialState: userInitState = {
    user: null,
    onlineUsersOnProject: null
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        setOnlineUsersOnProject: (state, action: PayloadAction<User[]>) => {
            state.onlineUsersOnProject = action.payload;
        }
    }
})

export const { setUser, setOnlineUsersOnProject } = userSlice.actions;

export const getUser = (state: RootState) => state.user.user;
export const getAllUsers = (state: RootState) => state.user.onlineUsersOnProject;

export default userSlice.reducer;