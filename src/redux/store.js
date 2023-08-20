import { configureStore } from '@reduxjs/toolkit';

// Импорт редюсеров для контактов и фильтрации
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

// Создание хранилища с использованием configureStore
export const store = configureStore({
  reducer: {
    // Комбинирование редюсеров: контактов и фильтрации
    contacts: contactsReducer, // Редюсер для управления контактами
    filter: filterReducer,     // Редюсер для управления фильтром
  },
});
