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
  // Получение функции dispatch из хука useDispatch
  const dispatch = useDispatch();
  // Получение видимых контактов из хранилища с помощью хука useSelector
  const visibleContacts = useSelector(selectVisibleContacts);

  // Обработчик удаления контакта
  const onContactRemoving = id => {
    dispatch(deleteContactsThunk(id)); // Вызов Thunk-действия для удаления контакта
  };

  // Отображение списка контактов или уведомления, если список пустой
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
