import PropTypes from 'prop-types';

// Компонент уведомления
export const Notification = ({ message = 'There is no contacts' }) => (
  <h3>{message}</h3>
);

// Проверка типов пропсов с использованием PropTypes
Notification.propTypes = {
  message: PropTypes.string.isRequired, // Ожидается строка (обязательно)
};
