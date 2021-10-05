import { FC, useEffect, useRef, useState } from 'react';
import { Issue } from '../../types/issues';
import {
  BodyContent,
  BodyContentContainer,
  ExpandButton,
  HelperText,
  IssueComments,
  IssueHeaderContainer,
  IssueLink,
  IssueTitle,
  RootElement
} from './styles';
import dayjs from 'dayjs';

interface IIssueCardProps {
  issue: Issue;
}

export const IssueCard: FC<IIssueCardProps> = ({ issue }) => {
  const contentEl = useRef(null);
  const [canOpen, setCanOpen] = useState(false);
  const [fullHeight, setFullHeight] = useState(false);

  useEffect(() => {
    if (contentEl.current) {
      const element: any = contentEl.current;
      console.log(element.clientHeight);
      if (element.clientHeight > 120) {
        setCanOpen(true);
      }
    }
  }, [contentEl]);

  return (
    <RootElement>
      <IssueHeaderContainer>
        <IssueTitle>
          <IssueLink href={issue.htmlUrl} target='_blank' rel='noopener noreferrer'>{issue.title}</IssueLink>
        </IssueTitle>
        <IssueComments>
          {issue.comments} comments
        </IssueComments>
      </IssueHeaderContainer>

      <BodyContentContainer expanded={fullHeight}>
        {
          canOpen &&
          <ExpandButton
            onClick={() => setFullHeight(!fullHeight)}
          >
            {fullHeight ? 'Ver menos' : 'Ver más'}
          </ExpandButton>
        }
        <BodyContent
          ref={contentEl}
          dangerouslySetInnerHTML={{ __html: issue.body }}
        />
      </BodyContentContainer>
      <HelperText>
        Opened by {issue.user.login} at {dayjs(issue.updatedAt).format('MM/DD/YY')}
      </HelperText>
    </RootElement>
  );
};
