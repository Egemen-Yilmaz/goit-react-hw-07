// TODO: Implement contacts slice with createSlice, extraReducers, and selectors.

export const contactsReducer = (
  state = { items: [], loading: false, error: null }
) => state;

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = () => [];
