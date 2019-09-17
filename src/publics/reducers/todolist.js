let initialState = {
    todoLists: [],
    isLoading: false,
    isRejected: false,
    isFulFilled: false
}

export default todolist = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_NAME_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulFilled: false
            }
        case 'GET_NAME_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_NAME_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulFilled: true,
                todoLists: action.payload.data.result
            }
        case 'GET_BYNAME_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulFilled: false
            }
        case 'GET_BYNAME_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_BYNAME_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulFilled: true,
                todoLists: action.payload.data.result
            }
        default:
            return state
    }
}