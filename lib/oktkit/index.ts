import { Octokit } from "octokit";

const [owner, repo] = process.env.GITHUB_TARGET_REPOSITORY!.split('/');

const client = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN
});

export { client, owner, repo };
