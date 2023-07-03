import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const localUser = localStorage.getItem('user')



const initialState = {
    user : localUser ? JSON.parse(localUser) : null,
    isLoading : false,
    isError : false,
    isSuccess : false,
    message : ""
}

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {

    },
    extraReducers : (builder) => {
        builder
        .addCase(register.pending , (state)=>{
            state.isLoading = true
        })
        .addCase(register.fulfilled , (state , action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(register.rejected , (state,action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(logout.fulfilled , (state)=>{
            state.user = null
            state.isSuccess = false
            state.isError = false
        })
    }
})


export const register = createAsyncThunk('auth/register' , async(userData , thunkAPI)=>{

    try {
        return await authService.registerUser(userData)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }

})


export const login = createAsyncThunk('auth/login' , async(userData)=>{
   authService.loginUser(userData)
})


export const logout = createAsyncThunk('auth/logout' , async()=>{
    localStorage.removeItem('user')
})


export default authSlice.reducer