// Импорт базового URL из файла apiConfig.js
import { BASE_URL } from "./apiConfig";

// Функция для получения контактов
export const getContacts = async () => {
  // Выполняем GET-запрос для получения списка контактов
  const { data } = await BASE_URL.get(`/contacts`);
  return data; // Возвращаем данные контактов
};

// Функция для добавления нового контакта
export const addContacts = async contact => {
  // Выполняем POST-запрос для добавления нового контакта
  const { data } = await BASE_URL.post(`/contacts`, contact);
  return data; // Возвращаем данные нового контакта после добавления
};

// Функция для удаления контакта по его ID
export const deleteContacts = async id => {
  // Выполняем DELETE-запрос для удаления контакта с указанным ID
  const { data } = await BASE_URL.delete(`/contacts/${id}`);
  return data; // Возвращаем данные, которые могут подтвердить успешное удаление
};
