

type repoType = {
  id: string;
  name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
    type: string;
  },
  topic: string[];
  html_url: string;
  description: string | null;
  fork: boolean;
  collaborators_url: string;
  languages_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  language: string | null;
  watchers_count: number;
  stargazers_count: number;
  forks_count: number;
  homepage: string | null;
}

type graphQlRepoType = {
  id: string;
  name: string;
  description: string | null;
  stargazerCount: number;
  forkCount: number;
  url: string;
  primaryLanguage: { name: string }
  openGraphImageUrl: string
  homepageUrl: string | null;
}
