import {  DESCRIPTION_DATA} from '../actions/Description';


const descriptionData = (state = {}, action) => {
    // console.log(action)
    switch (action.type) {
       
        case DESCRIPTION_DATA:
            return {...state, isFetching: false, data: action.data};
        default:
            return {...state};
    }
};
export default descriptionData