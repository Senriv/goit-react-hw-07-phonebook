import React from 'react';
import { Notification } from '../Notification/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactsThunk } from 'redux/contactsAsyncThunk';
import { selectVisibleContacts } from 'redux/selectors';
import {
  Contacts,
  Contact,
  ContactName,
  ContactBtnDelete,
} from './ContactList.styled';

function ContactList() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts)

  const onContactRemoving = id => {
    dispatch(deleteContactsThunk(id));
  };

  return visibleContacts.length > 0 ? (
    <Contacts>
      {visibleContacts.map(contact => (
        <Contact key={contact.id}>
          <ContactName>{contact.name}:</ContactName>
          <p>{contact.phone}</p>
          <ContactBtnDelete onClick={() => onContactRemoving(contact.id)}>
            Delete
          </ContactBtnDelete>
        </Contact>
      ))}
    </Contacts>
  ) : (
    <Notification message="There is no contacts"></Notification>
  );
}

export default ContactList;
