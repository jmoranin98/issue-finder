export interface GHIssue {
  title: string;
  comments: number;
  assignees: Array<any>;
  body: string;
  comments_url: string;
  created_at: Date;
  updated_at: Date;
  html_url: string;
  reactions: Array<any>;
  labels: Array<{
    color: string;
    description: string;
    name: string;
  }>;
  user: {
    avatar_url: string;
    html_url: string;
    login: string;
  };
}

export interface IFetchIssuesReponse {
  incomplete_results: boolean;
  items: Array<GHIssue>;
  total_count: number;
}

export interface IFetchIssuesResult {
  issues: Array<Issue>;
  count: number;
}

export interface Issue {
  title: string;
  comments: number;
  assignees: Array<any>;
  body: string;
  commentsUrl: string;
  createdAt: Date;
  updatedAt: Date;
  htmlUrl: string;
  reactions: Array<any>;
  labels: Array<{
    color: string;
    description: string;
    name: string;
  }>;
  user: {
    avatarUrl: string;
    htmlUrl: string;
    login: string;
  };
}

export interface IFetchIssuesParams {
  query: string;
  languages: Array<string>;
  page: number;
  perPage?: number;
  sort?: 'created';
  order?: 'asc' | 'desc';
}

export interface GHFetchIssuesParams {
  q: string;
  sort: 'created';
  order: 'asc' | 'desc';
  per_page: number;
  page: number;
}
