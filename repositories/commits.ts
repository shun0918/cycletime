import { client, owner, repo } from '../lib/oktkit/index.js';

const commits = (pullNumber: number) => client.request('GET /repos/{owner}/{repo}/pulls/{pull_number}/commits', {
  owner,
  repo,
  pull_number: pullNumber
});

export { commits };