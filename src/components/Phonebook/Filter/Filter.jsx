import { setFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FilterText, FilterInput } from './Filter.styled';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();
  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <div>
      <FilterText>Find contacts by name</FilterText>
      <FilterInput type="text" value={value} onChange={changeFilter} />
    </div>
  );
};
