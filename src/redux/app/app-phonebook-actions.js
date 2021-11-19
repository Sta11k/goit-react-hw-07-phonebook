import { createAction } from '@reduxjs/toolkit';
// import { defaults } from 'gh-pages';

// import { useState } from 'react';
// import { v4 as uuid } from 'uuid';
// const contactId = uuid();
import shortid from 'shortid';
// import {
//   useFetchContactQuery,
//   useAddContactsMutation,
//   useDeleteContactsMutation,
// } from '../../redux/app/operation';

export const addContacts = createAction(
  'contacts/add',
  (name, number, association) => ({
    payload: {
      id: shortid.generate(),
      name,
      number,
      association,
    },
  }),
);

export const deleteContacts = createAction('contacts/delete');
export const changeFilter = createAction('filter/value');
