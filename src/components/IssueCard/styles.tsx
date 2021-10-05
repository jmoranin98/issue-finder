import styled from "styled-components";

export const RootElement = styled.div`
  font-family: 'Poppins', sans-serif;
  border: 1px solid #d8dee4;
  padding: 2rem;
  border-radius: 0.5rem;
`;

export const IssueHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const IssueComments = styled.p`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-family: monospace;
  flex: 1;
  justify-content: flex-end;
`;

export const IssueTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
`;

export const IssueLink = styled.a`
  color: #6c42eb;

  &:visited {
    color: #6c42eb;
  }
`;

export const BodyContentContainer = styled.div<{ expanded?: boolean }>`
  overflow: hidden;
  max-height: ${props => props.expanded ? 'auto' : '120px'};
  background-color: #f8f8f8;
  padding: 1rem;
  position: relative;
`;

export const ExpandButton = styled.span`
  font-size: 0.8rem;
  font-family: monospace;
  color: #6c42eb;
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  cursor: pointer;
`;

export const BodyContent = styled.div`
  font-size: .8rem;
  line-height: 1.4rem;
  word-break: break-all;

  h1, h2, h3, h4, h5, h6 {
    font-size: 1rem;
    margin-bottom: .5rem;
  }

  p {
    margin: 0.2rem 0;
  }

  ul, ol {
    margin: 0.2rem 0;
    margin-left: 1rem;
  }

  pre {
    margin: 0.5rem 0;
  }
`

export const HelperText = styled.p`
  margin-top: 1rem;
  font-size: .9rem;
  font-family: monospace;
  color: #7e7e7e;
`;
