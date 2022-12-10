import { Octokit } from "octokit";
import { cycleTime } from "./cycletime";

const [owner, repo] = process.env.GITHUB_TARGET_REPOSITORY!.split('/');

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN
});

const pulls = () => octokit.request('GET /repos/{owner}/{repo}/pulls', {
  owner,
  repo,
  state: 'open',
  sort: 'created',
  direction: 'desc',
  per_page: 1
});

const commits = (pullNumber: number) => octokit.request('GET /repos/{owner}/{repo}/pulls/{pull_number}/commits', {
  owner,
  repo,
  pull_number: pullNumber
});

const messageHeader = (pullName: string) => 
`========================
PR: ${pullName}
------------------------
| commit message | date |`

const messageBody = (message: string, date: string) =>
`------------------------
| ${message} | ${date} |`

const messageFooter = () => '========================\n'

const main = () => {
  pulls().then((pullsResponse) => {
    pullsResponse.data.forEach((pull) => {
      commits(pull.number).then((response) => {
        const cycleTime = cycleTime(response.data);
        console.log(messageHeader(pull.title));
        response.data.forEach((commit) => {
          const commitMessage = commit.commit.message;
          const commitDate = commit.commit.author?.date || 'unknown';
          console.log(messageBody(commitMessage, commitDate));
        });
        console.log(messageFooter());
      });
    });
  });
}


main();