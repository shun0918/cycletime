import { showTable } from './presentation.js';
import { findCycleTime } from './services/find-cycle-time.js';

const main = async (pullNumber: number) => {
  const res = await findCycleTime(pullNumber);
  showTable(res);
}

main(parseInt(process.argv[2]));
