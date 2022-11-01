const initialState = {
    login: null
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            localStorage.setItem("token", action.payload.token)
            return {
                ...state,
                login: true
            }
        case "LOGIN_FAILURE":
            return {
                ...state,
                login: false
            }
        case "LOGIN_INCORRECT":
            return {
                login: null
            }
        case "LOGOUT":
            localStorage.removeItem("token")
            return {
                login: null
            }
        default:
            return state

    }
}