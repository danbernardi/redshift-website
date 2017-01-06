import { asyncRequestObject } from './boilerplate';

export const githubAPI = {
  getRepo: (owner, repoName) => asyncRequestObject(
    'GITHUB_REPO',
    `https://api.github.com/repos/${owner}/${repoName}`,
    { addThisIDToResponse: repoName }
  )
};
