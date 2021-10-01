import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../constants/config';
import {
  IFetchIssuesReponse,
  IFetchIssuesParams,
  GHFetchIssuesParams,
  Issue,
  IFetchIssuesResult,
} from '../types/issues';
import { Converter } from 'showdown';
import DOMPurify from 'dompurify';

const converter = new Converter();

const buildFetchIssuesParams = (params: IFetchIssuesParams):GHFetchIssuesParams => {
  const inLineLanguages = params.languages.map(language => (
    language.toLowerCase().replace(' ', '-')
  )).join(',');

  const finalQuery = `${params.query}+type:issue+language:${inLineLanguages}+state:open`;

  return {
    q: finalQuery,
    sort: params.sort || 'created',
    order: params.order || 'desc',
    per_page: params.perPage || 20,
    page: params.page,
  };
};

export const fetchIssues = async (params: IFetchIssuesParams): Promise<IFetchIssuesResult> => {
  const requestParams = buildFetchIssuesParams(params);
  const { data } : AxiosResponse<IFetchIssuesReponse> = await axios.get(
    `${BASE_URL}/search/issues?q=${requestParams.q}&sort=${requestParams.sort}&order=${requestParams.order}&per_page=${requestParams.per_page}&page=${requestParams.page}`
  );

  const {
    items,
    total_count,
  } = data;

  const formattedIssues: Array<Issue> = items.map(item => ({
    title: item.title,
    comments: item.comments,
    assignees: item.assignees,
    body: DOMPurify.sanitize(converter.makeHtml(item.body)),
    commentsUrl: item.comments_url,
    createdAt: item.created_at,
    updatedAt: item.updated_at,
    htmlUrl: item.html_url,
    reactions: item.reactions,
    labels: item.labels,
    user: {
      avatarUrl: item.user.avatar_url,
      htmlUrl: item.user.html_url,
      login: item.user.login,
    },
  }));

  return {
    issues: formattedIssues,
    count: total_count,
  };
};
