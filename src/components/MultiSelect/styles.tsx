import styled, { css } from "styled-components";

export const MultiSelectRoot = styled.div`
  position: relative;
  width: 12rem;
  height: 2.8rem;
`;

export const TextBox = styled.div<{ open?: boolean }>`
  border-radius: .25rem;
  border: 1px solid #6c42eb;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  font-size: 0.8rem;
  padding: .5rem 1rem;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;

  ${props => props.open === true && css`
    outline: 1px solid #6c42eb;
  `}
`;

export const TextBoxContent = styled.p`
  white-space: nowrap;
  overflow: hidden;
`;

export const DropdownInput = styled.input`
  border: none;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  font-size: 0.8rem;
  padding: 1rem;
  background-color: #E0E0E0;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

export const DropdownList = styled.div<{ open?: boolean }>`
  left: 0;
  right: 0;
  position: absolute;
  top: calc(100% + 0.5rem);
  border-radius: .25rem;
  max-height: 12rem;
  overflow-y: auto;
  background-color: #ffffff;
  z-index: 2;
  transition: opacity 289ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    transform 192ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px,
    rgb(0 0 0 / 14%) 0px 8px 10px 1px,
    rgb(0 0 0 / 12%) 0px 3px 14px 2px;
  display: none;

  ${props => props.open === true && css`
    display: block;
  `}
`;

export const ItemsList = styled.ul`
  padding: 0.5rem 0;
`;

export const SelectItem = styled.li`
  padding: .5rem 1rem;
  display: flex;
  align-items: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

export const CheckboxLabel = styled.label`
  font-size: 0.8rem;
  margin-left: 0.5rem;
`;
