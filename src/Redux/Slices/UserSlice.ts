import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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

    }
})