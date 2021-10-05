import styled from "styled-components";

export const MultiSelectRoot = styled.div`
  position: relative;
  width: 12rem;
  height: 2.8rem;
`;

export const TextBox = styled.div`
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
  `;

export const TextBoxContent = styled.p`
  white-space: nowrap;
  overflow: hidden;
`;

export const ItemsList = styled.ul`
  left: 0;
  right: 0;
  position: absolute;
  top: calc(100% + 0.5rem);
  border: 1px solid #6c42eb;
  border-radius: .25rem;
  height: 8rem;
  overflow-y: auto;
  background-color: #ffffff;
  z-index: 2;
`;

export const SelectItem = styled.li`
  margin: 0.5rem;
  display: flex;
  align-items: center;
`;

export const CheckboxLabel = styled.label`
  font-size: 0.8rem;
  margin-left: 0.2rem;
`;
