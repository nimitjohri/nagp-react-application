import { LOGIN_USER, LOGOUT_USER, LOGIN_FAILED } from "../actions/loginAction"

const LOGIN_INITIAL_STATE = {
    isLoggedIn: false,
    user: {},
    loginErrMsg: '',
    loginErr: {}
}

const loginReducers = (state= LOGIN_INITIAL_STATE, action) => {
    switch(action.type) {
        case LOGIN_USER:
            if (action.user.password === action.password) {
                return {
                    ...state,
                    user: action.user,
                    isLoggedIn: true,
                }
            } else {
                return {
                    ...state,
                    loginErrMsg: 'Please check your password'
                }
            }
        case LOGOUT_USER:
            return {
                ...state,
                user: {},
                isLoggedIn: false
            }
        case LOGIN_FAILED:
            return{
                ...state,
                loginErrMsg: 'Please check your Email'
            }
        default:
            return state
    }
}

export default loginReducers;
