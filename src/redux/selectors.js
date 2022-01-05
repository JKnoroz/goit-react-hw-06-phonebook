// import { createSelector } from 'reselect';

// export const visibleContacts = state => state.contacts.filter;
// export const allContacts = state => state.contacts.contacts;

export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;

export const getFilteredContacts = state => {
  const allContacts = getContacts(state);
  const filter = getFilter(state);

  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(
    contact =>
      contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.number.includes(normalizedFilter),
  );
};
