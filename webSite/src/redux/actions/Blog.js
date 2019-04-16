export const GET_BLOG_REQUEST = "blog/GET_BLOG_REQUEST";
export const GET_BLOG_SUCCESS = "blog/GET_BLOG_SUCCESS";
export const GET_BLOG_FAIL = "blog/GET_BLOG_FAIL";
export const _DATA = '_DATA';



export function getBlog() {
    return {
        types: [GET_BLOG_REQUEST, GET_BLOG_SUCCESS, GET_BLOG_FAIL],
        promise: client => client.get(`/api/admin/blog/list`)
    }
}
export const Data = (data, category) => ({
    type: _DATA,
    data,
    category
});