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
import { labels } from './constants/labels';
import { Button } from './components/Button/Button';
import { Input } from './components/Input/Input';
import { MultiSelect } from './components/MultiSelect/MultiSelect';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul { list-style: none; }
  a { text-decoration: none; }
  label { font-family: 'Poppins', sans-serif; }
`;

function App() {
  const [queryText, setQueryText] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [issuesFound, setIssuesFound] = useState<Array<Issue>>([]);
  const [selectedLabels, setSelectedLabels] = useState<Array<string>>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<Array<string>>([]);
  const [pagination, setPagination] = useState({
    page: 1,
    count: 1,
  });

  const handleQueryChange = (e: any) => setQueryText(e.target.value);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    const { issues, count } = await fetchIssues({
      query: queryText,
      languages: selectedLanguages,
      labels: selectedLabels,
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
      languages: selectedLanguages,
      labels: selectedLabels,
      page,
    });
    setIssuesFound(issues);
    setPagination({
      page,
      count,
    });

    setIsLoading(false);
  };

  return (
    <>
      <GlobalStyle />
      <AppRootContent>
        <Title>Issue Finder</Title>
        <Filters onSubmit={handleSubmit}>
          <div>
            <label>Search</label>
            <Input type="text" value={queryText} onChange={handleQueryChange} />
          </div>
          <div>
            <label>Labels</label>
            <MultiSelect
              items={labels.map(label => ({ value: label, label }))}
              onChange={labels => setSelectedLabels(labels)}
              selectedValues={selectedLabels}
            />
          </div>
          <div>
            <label>Languages</label>
            <MultiSelect
              items={languages.map(language => ({ value: language, label: language }))}
              onChange={languages => setSelectedLanguages(languages)}
              selectedValues={selectedLanguages}
            />
          </div>
          <Button type="submit">
            Buscar
          </Button>
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
                  totalPages={Math.ceil(pagination.count / 20)}
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
