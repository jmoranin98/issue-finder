import { FC, useRef, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import {
  CheckboxLabel,
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
  const wrapperRef = useRef<HTMLDivElement>(null);

  const selectedItems = items.filter(i => selectedValues.includes(i.value))
    .map(i => i.label).join(', ');

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
    () => {
      setOpenList(false);
    },
    openList
  );

  return (
    <MultiSelectRoot ref={wrapperRef}>
      <TextBox onClick={() => setOpenList(!openList)}>
        <TextBoxContent>{selectedItems}</TextBoxContent>
      </TextBox>
      {
        openList &&
        <ItemsList>
          {items.map(item => (
            <SelectItem onClick={handleChange(item.label)}>
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
      }
    </MultiSelectRoot>
  );
};
