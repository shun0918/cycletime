import { cycleTime } from "../cycle-time/cycletime.js";
import { PullCycleTime } from "../type.js";
import { findPull } from "../repositories/find-pull.js";
import { commits } from "../repositories/commits.js";

const findCycleTime = async (pullNumber: number): Promise<PullCycleTime> => {
  const pull = await findPull(pullNumber);
  const { data } = await commits(pullNumber);
  return {
    title: pull.data.title,
    url: pull.data.html_url,
    cycleTime: cycleTime(data, pull.data.merged_at),
    commits: data.map((commit) => ({
      message: commit.commit.message,
      date: commit.commit.author?.date || 'unknown',
    })),
  };
}

export { findCycleTime };
