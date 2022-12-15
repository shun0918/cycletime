import { client, owner, repo } from '../lib/oktkit/index.js';

type RequestBody = {
  perPage?: number;
  page?: number;
};

const pulls = ({ perPage, page }: RequestBody) => client.request('GET /repos/{owner}/{repo}/pulls', {
  owner,
  repo,
  state: 'all',
  sort: 'created',
  direction: 'desc',
  per_page: perPage || 10,
  page: page || 1,
});

export { pulls };
