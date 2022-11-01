import { loginFetch } from "../../services/login"

export const loginSuccess = data => ({
    type: "LOGIN_SUCCESS",
    payload: data
})

export const loginFailure = () => ({
    type: "LOGIN_FAILURE"
})

export const logout = () => ({
    type: "LOGOUT"
})

export const postLogin = (values) => dispatch => {
    loginFetch(values)
        .then(data => {
            console.log(data)
            if (data.status_code === 200) {
                dispatch(loginSuccess(data.user))
            } else {
                dispatch(loginFailure())
            }
        })
}