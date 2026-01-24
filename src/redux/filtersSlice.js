// TODO: Implement filters slice with createSlice and changeFilter reducer.

export const filtersReducer = (state = { name: '' }) => state;

export const changeFilter = () => ({ type: 'filters/changeFilter' });

export const selectNameFilter = (state) => state.filters.name;
