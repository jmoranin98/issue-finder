import { FormEvent, useState } from 'react';
import { fetchIssues } from './api';
import { languages } from './constants/languages';
import { Issue } from './types/issues';
import { createGlobalStyle } from 'styled-components';
import {
  AppRootContent,
  Filters,
  IssuesContent,
  Title,
} from './styles';
import { IssueCard } from './components/IssueCard/IssueCards';
import { Pagination } from './components/Pagination/Pagination';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul { list-style: none; }
  a { text-decoration: none; }
`;

function App() {
  const [queryText, setQueryText] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [issuesFound, setIssuesFound] = useState<Array<Issue>>([]);
  const [pagination, setPagination] = useState({
    page: 1,
    count: 1,
  });

  const handleQueryChange = (e: any) => setQueryText(e.target.value);

  const handleSelectLanguage = (e: any) => {
    setSelectedLanguage(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    const { issues, count } = await fetchIssues({
      query: queryText,
      languages: [selectedLanguage],
      page: 1,
    });
    setIssuesFound(issues);
    setPagination({
      page: 1,
      count,
    });

    setIsLoading(false);
  };

  const handlePageChange = (page: number) => async () => {
    setIsLoading(true);

    const { issues, count } = await fetchIssues({
      query: queryText,
      languages: [selectedLanguage],
      page,
    });
    setIssuesFound(issues);
    setPagination({
      page,
      count,
    });

    setIsLoading(false);
  }

  return (
    <>
      <GlobalStyle />
      <AppRootContent>
        <Title>Issue Finder</Title>
        <Filters onSubmit={handleSubmit}>
          <input type="text" value={queryText} onChange={handleQueryChange} />
          <select name="" id="" value={selectedLanguage} onChange={handleSelectLanguage}>
            {languages.map((l, index) => (
              <option
                key={`language-${index}`}
                value={l}
              >{l}</option>
            ))}
          </select>
          <button type="submit">
            Buscar
          </button>
        </Filters>
        {
          isLoading ?
            <p>Cargando...</p> :
            issuesFound.length === 0 ?
              <p>No se encontron issues</p> :
              (<>
                <IssuesContent>
                  {issuesFound.map(issue => (
                    <IssueCard key={issue.id} issue={issue} />
                  ))}
                </IssuesContent>
                <Pagination
                  count={pagination.count}
                  page={pagination.page}
                  onNextClick={handlePageChange(pagination.page + 1)}
                  onPreviousClick={handlePageChange(pagination.page - 1)}
                />
              </>)
        }
      </AppRootContent>
    </>
  );
}

export default App;
