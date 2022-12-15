import { showTable } from './presentation.js';
import { pullCycleTimes } from './services/pull-cycle-times.js';

const main = async (perPage: number, page: number) => {
  const res = await pullCycleTimes(perPage, page);
  showTable(res);
}

main(parseInt(process.argv[2]) || 10, parseInt(process.argv[3]) || 1);