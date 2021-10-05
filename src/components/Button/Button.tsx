import styled from "styled-components";

export const Button = styled.button`
  padding: .5rem 1rem;
  font-family: 'Poppins', sans-serif;
  font-size: .8rem;
  background-color: transparent;
  border: 1px solid #6c42eb;
  border-radius: .25rem;
  font-weight: 500;
  color: #6c42eb;
  text-transform: uppercase;
  cursor: pointer;
  transition: 200ms ease-in-out;
  height: 2.8rem;

  &:hover {
    background-color: rgba(108, 66, 235,0.1);
  }
`;
