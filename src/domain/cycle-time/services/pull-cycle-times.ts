import { cycleTime } from "../cycletime.js";
import { PullCycleTime } from "../type.js";
import { pulls } from "../../../repositories/pulls.js";
import { commits } from "../../../repositories/commits.js";

const pullCycleTimes = async (): Promise<PullCycleTime[]> => {
  const pullsResponse = await pulls();
  return await Promise.all(pullsResponse.data.map(async (pull) => {
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
}

export { pullCycleTimes };
