"server only"

const githubKey = process.env.GITHUB_PAT;
const githubUrl = "https://api.github.com";
const githubOwner = "vishal-kumar3"
const GITHUB_GRAPHQL_API = 'https://api.github.com/graphql';

export const headers = {
  'Authorization': `Bearer ${githubKey}`,
  'User-Agent': 'Next.js-App-vishalkumar.space'
}

export const apiHeaders = {
  ...headers,
  'X-Github-Api-Version': '2022-11-28',
}

export const getRepoByName = async (repo: string) => {
  if (!githubKey) {
    return {
      error: "GitHub Personal Access Token is not set in environment variables.",
      data: null
    }
  }

  const response = await fetch(`${githubUrl}/repos/${githubOwner}/${repo}`, {
    headers: {
      ...apiHeaders,
      'Accept': 'application/vnd.github.v3+json'
    },
    next: { revalidate: 3600 }
  })

  if (!response.ok) {
    return {
      error: `Failed to fetch repo data: ${response.statusText}`,
      data: null
    }
  }

  const data: repoType = await response.json();

  return {
    error: null,
    data: data
  }
}


export const getReadmeFileOfRepo = async (repo: string) => {
  if (!githubKey) {
    return {
      error: "GitHub Personal Access Token is not set in environment variables.",
      data: null
    }
  }

  const response = await fetch(`${githubUrl}/repos/${githubOwner}/${repo}/contents/README.md`, {
    headers: {
      ...apiHeaders,
      'Accept': 'application/vnd.github.v3.raw'
    },
    next: { revalidate: 3600 }
  })

  if (!response.ok) {
    return {
      error: `Failed to fetch README file: ${response.statusText}`,
      data: null
    }
  }

  const data = await response.text();

  return {
    error: null,
    data: data
  }
}


// GraphQL queries
export const getGithubRepos = async (repoList: string[]) => {
  const repoQueries = repoList.map((repo, index) => `
    repo${index}: repository(owner: "${githubOwner}", name: "${repo}") {
      id
      name
      description
      stargazerCount
      forkCount
      url
      homepageUrl
      openGraphImageUrl
      primaryLanguage {
        name
      }
    }
  `).join('\n');

  const query = `
    query {
      ${repoQueries}
    }
  `;

  try {
    const response = await fetch(GITHUB_GRAPHQL_API, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 }
    });

    if (!response.ok) {
      return {
        error: `Error while fetching repos`,
        data: null
      }
    }

    const result = await response.json();

    if (!result.data) {
      return {
        error: `Error while fetching repos`,
        data: null
      };
    }

    const repos = Object.values(result.data).filter(repo => repo !== null);

    return {
      error: null,
      data: repos as graphQlRepoType[]
    };
  }
  catch (error) {
    console.error("Error fetching repos:", error);
    return {
      error: `Failed to fetch repos: ${error}`,
      data: null
    };
  }
}
