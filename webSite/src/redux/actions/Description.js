export const DESCRIPTION_DATA = 'DESCRIPTION_DATA';
export const descriptionData = (data, category) => ({
    type: DESCRIPTION_DATA,
    data,
    category
});