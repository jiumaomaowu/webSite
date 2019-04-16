/*action*/

export const REQUEST_DATA = 'REQUEST_DATA';

export const RECEIVE_DATA = 'RECEIVE_DATA';

export const receiveData = (data, category) => ({
    type: RECEIVE_DATA,
    data,
    category
});
