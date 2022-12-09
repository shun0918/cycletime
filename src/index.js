import { Octokit } from "octokit";

console.log('Target repository is ' + process.env.GITHUB_TARGET_REPOSITORY || 'not set');

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN
});

const [owner, repo] = process.env.GITHUB_TARGET_REPOSITORY.split('/');

const { data } = await octokit.request("GET /repos/{owner}/{repo}/issues", {
  owner,
  repo,
});

const res = await octokit.request("POST /repos/{owner}/{repo}/issues/{issue_number}/comments", {
  owner,
  repo,
  issue_number: data[0].number,
  body: `commented at ${new Date().toString()} from Octokit`
});

console.log(res);