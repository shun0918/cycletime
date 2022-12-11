export type Commit = {
  message: string;
  date: string | 'unknown';
};

export type PullCycleTime = {
  title: string;
  url: string;
  cycleTime: string;
  commits: Commit[];
}
