import { FC, useEffect, useRef, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import useOutsideClick from "../../hooks/useOutsideClick";
import {
  CheckboxLabel,
  DropdownInput,
  DropdownList,
  ItemsList,
  MultiSelectRoot,
  SelectItem,
  TextBox,
  TextBoxContent,
} from "./styles";

interface ItemValue {
  value: string;
  label: string;
}

interface IMultiSelectProps {
  items: Array<ItemValue>;
  selectedValues: Array<string>;
  onChange(items: Array<string>): void;
};

export const MultiSelect: FC<IMultiSelectProps> = ({
  items,
  selectedValues,
  onChange,
}) => {
  const [openList, setOpenList] = useState(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const debouncedSearchValue = useDebounce(searchValue, 200);
  const [filteredItems, setFilteredItems] = useState<Array<ItemValue>>(items);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const selectedItems = items.filter(i => selectedValues.includes(i.value))
    .map(i => i.label).join(', ');

  useEffect(() => {
    if (debouncedSearchValue === '') {
      setFilteredItems(items);
    } else {
      const filteredListItems = items.filter(item => (
        item.value.toLowerCase()
          .includes(debouncedSearchValue.toLowerCase())
      ));

      setFilteredItems(filteredListItems);
    }
  }, [debouncedSearchValue, items]);

  useEffect(() => {
    if (!openList) {
      setSearchValue('');
    }
  }, [openList]);

  const handleChange = (value: string) => () => {
    let newValues = [...selectedValues];

    const index = newValues.indexOf(value);

    if (index === -1) {
      newValues = [ ...newValues, value ];
    } else {
      newValues.splice(index, 1);
    }

    onChange(newValues);
  };

  useOutsideClick(
    wrapperRef,
    () => setOpenList(false),
    openList
  );

  return (
    <MultiSelectRoot ref={wrapperRef}>
      <TextBox open={openList} onClick={() => setOpenList(!openList)}>
        <TextBoxContent>{selectedItems}</TextBoxContent>
      </TextBox>
      <DropdownList open={openList}>
        <DropdownInput
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
        <ItemsList>
          {filteredItems.map(item => (
            <SelectItem
              key={`option-${item.label}`}
              onClick={handleChange(item.label)}
            >
              <input
                type="checkbox"
                checked={selectedValues.indexOf(item.value) !== -1}
                onChange={handleChange(item.value)}
              />
              <CheckboxLabel>
                {item.label}
              </CheckboxLabel>
            </SelectItem>
          ))}
        </ItemsList>
      </DropdownList>
    </MultiSelectRoot>
  );
};
