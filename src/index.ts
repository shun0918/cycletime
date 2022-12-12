import { showTable } from './presentation.js';
import { pullCycleTimes } from './domain/cycle-time/services/pull-cycle-times.js';

const main = async () => {
  const res = await pullCycleTimes();
  showTable(res);
}

main();