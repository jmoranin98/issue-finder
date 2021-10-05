import { FC, useEffect, useRef, useState } from 'react';
import { Issue } from '../../types/issues';
import {
  AvataImage,
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

      if (element.clientHeight > 88) {
        setCanOpen(true);
      }
    }
  }, [contentEl]);

  return (
    <RootElement>
      <IssueHeaderContainer>
        <IssueTitle>
          <AvataImage src={issue.user.avatarUrl} alt="" />
          <IssueLink href={issue.htmlUrl} target='_blank' rel='noopener noreferrer'>{issue.title}</IssueLink>
        </IssueTitle>
        <IssueComments>
          {issue.comments} comments
        </IssueComments>
      </IssueHeaderContainer>

      {
        issue.body ?
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
        </BodyContentContainer> :
        <p>Description not available</p>
      }
      <HelperText>
        {issue.repository.name} - {issue.humanDate}
      </HelperText>
    </RootElement>
  );
};
