import {GET_BLOG_REQUEST, GET_BLOG_SUCCESS, GET_BLOG_FAIL} from 'actions/Blog';


const initState = {
    isLoading: false,
    blog: {},
    errorMsg: ''
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_BLOG_REQUEST:
            return {
                ...state,
                isLoading: true,
                blog: {},
                errorMsg: ''
            };
        case GET_BLOG_SUCCESS:
            return {
                ...state,
                isLoading: false,
                blog: action.result.data,
                errorMsg: ''
            };
        case GET_BLOG_FAIL:
            return {
                ...state,
                isLoading: false,
                blog: {},
                errorMsg: '请求错误'
            };
        default:
            return state;
    }
}