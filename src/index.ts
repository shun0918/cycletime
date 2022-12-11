import { Octokit } from "octokit";
import { cycleTime } from "./cycletime.js";
import { showTable } from "./presentation.js";
import { PullCycleTime } from "./type.js";

const [owner, repo] = process.env.GITHUB_TARGET_REPOSITORY!.split('/');

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN
});

const pulls = () => octokit.request('GET /repos/{owner}/{repo}/pulls', {
  owner,
  repo,
  state: 'closed',
  sort: 'created',
  direction: 'desc',
  per_page: 1
});

const commits = (pullNumber: number) => octokit.request('GET /repos/{owner}/{repo}/pulls/{pull_number}/commits', {
  owner,
  repo,
  pull_number: pullNumber
});

const main = async () => {
  const pullsResponse = await pulls();
  const res: PullCycleTime[] = await Promise.all(pullsResponse.data.map(async (pull) => {
    const { data } = await commits(pull.number);
    return {
      title: pull.title,
      url: pull.html_url,
      cycleTime: cycleTime(data),
      commits: data.map((commit) => ({
        message: commit.commit.message,
        date: commit.commit.author?.date || 'unknown',
      })),
    };
  }));
  showTable(res);
}


main();