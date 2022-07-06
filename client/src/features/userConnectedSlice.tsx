import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import useLogin from "../hooks/useLogin";
import useRegister from "../hooks/useRegister";
import useUpdateUser from "../hooks/useUpdateUser";
import UserInterface from "../interfaces/UserInterface";

const initialState = {
    id: "",
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

export const updateUser = createAsyncThunk('users/updateUser', async(formInput: UserInterface) => {
    const update = useUpdateUser();
    update(formInput)
        .then(res => res)
})

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setLoggedUser: (state, action) => {
            state.token = action.payload;
        },
        setUpdateUser: (state, action) => {
            console.log(action)
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
            state.id = payload.user._id;
            state.mail = payload.user.email;
            state.firstName = payload.user.firstname;
            state.lastName = payload.user.lastname;
        })
    }
})

export const { setLoggedUser, setUpdateUser, logoutLoggedUser } = userSlice.actions;
export default userSlice.reducer;

export const userSelector = (state: any) => state.user;