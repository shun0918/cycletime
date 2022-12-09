import { Octokit } from "octokit";

console.log('Target repository is ' + process.env.GITHUB_TARGET_REPOSITORY || 'not set');

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN
});

const [owner, repo] = process.env.GITHUB_TARGET_REPOSITORY.split('/');

const res = await octokit.request('GET /repos/{owner}/{repo}/pulls', {
  owner,
  repo,
  state: 'open',
  sort: 'created',
  direction: 'desc',
  per_page: 1
});

console.log(res);