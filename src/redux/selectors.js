import { createSelector } from '@reduxjs/toolkit';

// Селектор для получения массива контактов из состояния
export const selectContacts = state => state.contacts.items;

// Селектор для получения значения фильтра из состояния
export const selectFilter = state => state.filter;

// Создание селектора для видимых контактов с использованием createSelector
export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter], // Селекторы, которые используются как зависимости
  (contacts, filter) => {
    // Функция, выполняющая фильтрацию контактов
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
