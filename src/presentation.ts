import { PullCycleTime } from './domain/cycle-time/type.js'

const messageHeader = (pullName: string, cycleTime: string) =>
`========================
PR: ${pullName}: ${cycleTime}
------------------------
| Commit message | Date |`

const messageBody = (message: string, date: string) =>
`| ${message} | ${date} |`

const messageFooter = () => '========================\n'

export const showTable = (pulls: PullCycleTime[] | PullCycleTime) => {
  const _pulls = Array.isArray(pulls) ? pulls : [pulls];
  _pulls.forEach((pull) => {
    console.log(messageHeader(pull.title, pull.cycleTime));
    pull.commits.forEach((commit) => {
      console.log(messageBody(commit.message, commit.date));
    });
    console.log(messageBody('message', 'date'));
    console.log(messageFooter());
  })
}
