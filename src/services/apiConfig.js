// Импорт библиотеки Axios из установленного модуля.
import axios from "axios";

// Создание базовой настройки для Axios с указанием базового URL.
export const BASE_URL = axios.create({
  baseURL: 'https://64d914bfe947d30a2609e4f0.mockapi.io',
});
