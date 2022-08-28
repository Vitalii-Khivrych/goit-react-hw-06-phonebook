import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contactsSlice';
import { getFilter } from 'redux/selectors';

import { FilterLabel, FilterInput } from './Filter.styled';

export function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        value={filter}
        onChange={evt => dispatch(changeFilter(evt.target.value))}
      />
    </FilterLabel>
  );
}
