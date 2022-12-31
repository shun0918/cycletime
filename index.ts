import { showTable } from './presentation.js';
import { pullCycleTimes } from './services/pull-cycle-times.js';

export const main = async (perPage: number, page: number) => {
  const res = await pullCycleTimes(perPage, page);
  showTable(res);
}
