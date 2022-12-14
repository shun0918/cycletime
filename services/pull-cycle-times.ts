import { cycleTime } from "../cycle-time/cycletime.js";
import { PullCycleTime } from "../type.js";
import { pulls } from "../repositories/pulls.js";
import { commits } from "../repositories/commits.js";

const pullCycleTimes = async (perPage: number, page: number): Promise<PullCycleTime[]> => {
  const pullsResponse = await pulls({ perPage, page});

  return await Promise.all(pullsResponse.data.map(async (pull) => {
    const { data } = await commits(pull.number);
    return {
      title: pull.title,
      url: pull.html_url,
      cycleTime: cycleTime(data, pull.merged_at),
      commits: data.map((commit) => ({
        message: commit.commit.message,
        date: commit.commit.author?.date || 'unknown',
      })),
    };
  }));
}

export { pullCycleTimes };
