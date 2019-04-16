import { RECEIVE_DATA, REQUEST_DATA} from '../actions/Header';

/*
* 初始化state
 */
export default function reducer(state = {}, action) {
    // console.log(action)
    switch (action.type) {
        case RECEIVE_DATA:
            return {
                visible: false
            };
        default:
            return state
    }
}
