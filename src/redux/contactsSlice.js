import { createSlice } from '@reduxjs/toolkit';
import {
  getContactsThunk,
  addContactsThunk,
  deleteContactsThunk,
} from './contactsAsyncThunk';

// Функция для обработки состояния "pending" (ожидание)
const handlePending = state => {
  state.isLoading = true;
};

// Функция для обработки состояния "rejected" (ошибка)
const handleRejected = (state, { payload }) => {
  state.error = payload;
};

// Создание среза состояния и редюсера с использованием createSlice
const contactsSlice = createSlice({
  name: 'contacts', // Имя среза
  initialState: {
    items: [], // Массив контактов
    isLoading: false, // Флаг загрузки
    error: null, // Ошибка
  },
  extraReducers: builder => {
    builder
      // Обработка состояний для getContactsThunk
      .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.rejected, handleRejected)
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.items = payload; // Запись полученных данных контактов в состояние
      })
      // Обработка состояний для addContactsThunk
      .addCase(addContactsThunk.pending, handlePending)
      .addCase(addContactsThunk.rejected, handleRejected)
      .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
        state.items = [payload, ...state.items]; // Добавление нового контакта в начало списка
      })
      // Обработка состояний для deleteContactsThunk
      .addCase(deleteContactsThunk.pending, handlePending)
      .addCase(deleteContactsThunk.rejected, handleRejected)
      .addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id); // Удаление контакта из списка
      });
  },
});

// Экспорт редюсера из среза состояния
export const contactsReducer = contactsSlice.reducer;
