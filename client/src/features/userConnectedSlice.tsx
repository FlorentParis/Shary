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
        .then(res => setLoggedUser(res.token));
})

export const loginUser = createAsyncThunk('users/loginUser', async(formInput: UserInterface) => {
    const login = useLogin();
    return login(formInput.email, formInput.password)
        .then(res => res)
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
            /* state.mail = payload.user.email;
            state.firstName = payload.user.firstname;
            state.lastName = payload.user.lastname; */
        })
        builder.addCase(loginUser.fulfilled, (state, {payload}) => {
            state.isFetching = false;
            state.isSuccess = true;
            state.mail = payload.user.email;
            state.firstName = payload.user.firstname;
            state.lastName = payload.user.lastname;
        })
    }
})

export const { setLoggedUser, logoutLoggedUser } = userSlice.actions;
export default userSlice.reducer;

export const userSelector = (state: any) => state.user;