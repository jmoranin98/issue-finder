import styled from "styled-components";

export const InputRoot = styled.input`
  display: block;
  height: 2.8rem;
  border-radius: .25rem;
  border: 1px solid #6c42eb;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  font-size: 0.8rem;
  padding: .5rem 1rem;

  &:focus {
    outline: 1px solid #6c42eb;
  }
`;
