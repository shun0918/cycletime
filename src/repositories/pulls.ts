import { client, owner, repo } from '../lib/oktkit/index.js';

const pulls = () => client.request('GET /repos/{owner}/{repo}/pulls', {
  owner,
  repo,
  state: 'closed',
  sort: 'created',
  direction: 'desc',
  per_page: 1
});

export { pulls };
