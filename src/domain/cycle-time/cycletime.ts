type Commit = {
  commit: {
    author: {
      date?: string;
    } | null,
    message: string;
  }
}

const _toText = (hour: number) => {
  if (hour <= 24) return `${hour} h`;
  const h = hour % 24;
  return `${Math.floor(hour / 24)} d ${h} h`;
}

export const cycleTime = (commits: Commit[]) => {
  const firstCommit = commits[0];
  const lastCommit = commits[commits.length - 1];
  const firstCommitDate = new Date(firstCommit.commit.author?.date || '2021-01-01');
  const lastCommitDate = new Date(lastCommit.commit.author?.date || '2021-01-01');
  const diff = lastCommitDate.getTime() - firstCommitDate.getTime();
  const diffHour = Math.ceil(diff / (1000 * 60 * 60));
  return _toText(diffHour);
}