import { useState } from 'react';
import { useCombobox } from 'downshift';
import debounce from 'lodash.debounce';

import { useFindStudentMutation } from 'store';

import { Input } from 'components/atoms/Input/Input.styles';
import { SearchBarWrapper, SearchResults, SearchResultsItem, SearchWrapper, StatusInfo } from './SearchBar.styles';

const SearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const [findStudent] = useFindStudentMutation();

  const getMatchingStudents = debounce(async ({ inputValue }) => {
    const { data } = await findStudent({ searchPhrase: inputValue });
    setMatchingStudents(data.students);
  }, 500);

  const { isOpen, getToggleButtonProps, getLabelProps, getMenuProps, getInputProps, highlightedIndex, getItemProps, selectedItem } = useCombobox({
    items: matchingStudents,
    onInputValueChange: getMatchingStudents,
    itemToString(item) {
      return item ? item.title : '';
    },
  });

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchWrapper>
        <Input {...getInputProps()} name="Search" id="Search" placeholder="Search" />
        <SearchResults isVisible={isOpen && matchingStudents.length > 0} {...getMenuProps()} aria-label="results">
          {isOpen &&
            matchingStudents.map((item, index) => (
              <SearchResultsItem isHighlighted={highlightedIndex === index} {...getItemProps({ item, index })} key={item.id}>
                {item.name}
              </SearchResultsItem>
            ))}
        </SearchResults>
      </SearchWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
