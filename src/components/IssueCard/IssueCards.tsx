import { FC } from 'react';
import { Issue } from '../../types/issues';
import { RootElement } from './styles';

interface IIssueCardProps {
  issue: Issue;
}

export const IssueCard: FC<IIssueCardProps> = ({ issue }) => {
  return (
    <RootElement>
      <h1>
        <a href={issue.htmlUrl} target='_blank'>{issue.title}</a>
      </h1>
      <div style={{ overflow: 'hidden' }} dangerouslySetInnerHTML={{ __html: issue.body }}>
      </div>
    </RootElement>
  );
};
