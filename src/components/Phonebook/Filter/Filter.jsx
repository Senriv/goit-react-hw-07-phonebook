import { setFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FilterText, FilterInput } from './Filter.styled';
import { selectFilter } from 'redux/selectors';

// Компонент фильтрации контактов
export const Filter = () => {
  // Получение текущего значения фильтра из хранилища
  const value = useSelector(selectFilter);
  // Получение функции dispatch из хука useDispatch
  const dispatch = useDispatch();

  // Обработчик изменения значения фильтра
  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value)); // Вызов действия для установки фильтра
  };

  return (
    <div>
      {/* Текстовая метка для фильтрации */}
      <FilterText>Find contacts by name</FilterText>
      {/* Поле ввода для фильтрации */}
      <FilterInput type="text" value={value} onChange={changeFilter} />
    </div>
  );
};
