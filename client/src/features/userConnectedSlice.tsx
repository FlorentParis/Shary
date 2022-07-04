import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import useLogin from "../hooks/useLogin";
import useRegister from "../hooks/useRegister";
import UserInterface from "../interfaces/UserInterface";

const initialState = {
    mail: "",
    password: "",
    firstName: "",
    lastName: "",
    token: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: ""
}

export const signupUser = createAsyncThunk('users/signupUser', async(formInput: UserInterface) => {
    const register = useRegister();
    register(formInput)
        .then(res => setLoggedUser(res.data.token));
})

export const loginUser = createAsyncThunk('users/loginUser', async(formInput: UserInterface) => {
    const login = useLogin();
    login(formInput.email, formInput.password)
        .then(res => setLoggedUser(res.data.token));
})

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setLoggedUser: (state, action) => {
            state.token = action.payload;
        },
        logoutLoggedUser: () => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(signupUser.fulfilled, (state, {payload}) => {
            state.isFetching = false;
            state.isSuccess = true;
            console.log(payload);
            /* state.token = payload.user.token;
            state.mail = payload.user.mail;
            state.firstName = payload.user.firstName;
            state.lastName = payload.user.lastName; */
        })
    }
})

export const { setLoggedUser } = userSlice.actions;
export default userSlice.reducer;

export const userSelector = (state: any) => state.user;