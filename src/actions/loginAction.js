export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const loginUser = (email, password) => 
    (dispatch, getState) => {
        console.log('login user')
        console.log('email', email)
        console.log('password', password)
          fetch(`http://localhost:3100/users?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type: LOGIN_USER,
                user: data[0],
                email: email,
                password: password
            })
        })
        .catch((error) =>{
            dispatch({
                type: LOGIN_FAILED,
                err: error,
            })
        })
    }

export default loginUser;