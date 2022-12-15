import { client, owner, repo } from '../lib/oktkit/index.js';

const findPull = (pull_number: number) =>
  client.request('GET /repos/{owner}/{repo}/pulls/{pull_number}', {
    owner,
    repo,
    pull_number,
  });

export { findPull };
