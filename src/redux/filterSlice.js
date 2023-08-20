import { createSlice } from '@reduxjs/toolkit';

// Начальное состояние для фильтрации
const filterInitialState = '';

// Создание среза состояния и редюсера для фильтрации с использованием createSlice
const filterSlice = createSlice({
  name: 'filter', // Имя среза состояния
  initialState: filterInitialState, // Начальное состояние фильтрации
  reducers: {
    // Действие для установки значения фильтра
    setFilter(state, action) {
      return (state = action.payload); // Устанавливаем значение фильтра из payload
    },
  },
});

// Экспорт действия для установки значения фильтра
export const { setFilter } = filterSlice.actions;

// Экспорт редюсера из среза состояния
export const filterReducer = filterSlice.reducer;
