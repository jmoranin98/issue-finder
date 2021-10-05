import styled from "styled-components";

export const AppRootContent = styled.div`
  max-width: 1200px;
  padding: 2rem;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 3.5rem;
  letter-spacing: -1.5px;
  margin-bottom: 1rem;
  line-height: 4rem;
  color: #6c42eb;
`;

export const Filters = styled.form`
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-end;
  gap: .5rem;
  flex-wrap: wrap;
`;

export const LanguagesSelectWrapper = styled.div`
  width: 15rem;
`;

export const IssuesContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
