// Импорт необходимых функций из библиотеки Redux Toolkit
import { createAsyncThunk } from '@reduxjs/toolkit';
// Импорт функций для работы с API контактов
import { getContacts, addContacts, deleteContacts } from '../services/contacts-api';

// Создание асинхронного Thunk для получения контактов
export const getContactsThunk = createAsyncThunk(
  'contacts/allContacts', // Уникальное имя для действия
  async (_, { reject }) => {
    try {
      const data = await getContacts(); // Вызов функции для получения контактов
      return data; // Возвращаем полученные данные
    } catch (error) {
      return reject(error.message); // В случае ошибки возвращаем сообщение об ошибке
    }
  }
);

// Создание асинхронного Thunk для добавления контакта
export const addContactsThunk = createAsyncThunk(
  'contacts/addContact', // Уникальное имя для действия
  async (contact, { reject }) => {
    try {
      const data = await addContacts(contact); // Вызов функции для добавления контакта
      return data; // Возвращаем данные нового контакта после добавления
    } catch (error) {
      return reject(error.message); // В случае ошибки возвращаем сообщение об ошибке
    }
  }
);

// Создание асинхронного Thunk для удаления контакта
export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact', // Уникальное имя для действия
  async (id, { reject }) => {
    try {
      const data = await deleteContacts(id); // Вызов функции для удаления контакта
      return data; // Возвращаем данные, которые могут подтвердить успешное удаление
    } catch (error) {
      return reject(error.message); // В случае ошибки возвращаем сообщение об ошибке
    }
  }
);
