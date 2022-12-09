import { Octokit } from "octokit";

console.log('Target repository is ' + process.env.GITHUB_TARGET_REPOSITORY || 'not set');

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN
});

const [owner, repo] = process.env.GITHUB_TARGET_REPOSITORY.split('/');

octokit.request("GET /repos/{owner}/{repo}/issues", {
  owner,
  repo,
}).then((data) => {
  console.log('success');
  console.log(data);
}).catch((error) => {
  console.log('error');
  console.log(error);
});;