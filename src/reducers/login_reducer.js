import { LOGIN_USER } from "../actions/loginAction"

const LOGIN_INITIAL_STATE = {
    isLoggedIn: false,
    user: {},
    loginErrMsg: '',
    loginErr: {}
}

const loginReducers = (state= LOGIN_INITIAL_STATE, action) => {
    switch(action.type) {
        case LOGIN_USER:
            console.log('inside here')
            console.log('email', action.email)
            console.log('password', action.password)   
            console.log('user', action.user)   
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
        default:
            return state
    }
}

export default loginReducers;
