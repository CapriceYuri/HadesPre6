import { rawData } from "./DataImport";

let tempPlayerArr = [];

function findTotalPlayer() {
  for (let i = 0; i < rawData.length; i++) {
    if (tempPlayerArr.indexOf(rawData[i].Runner) === -1) {
      tempPlayerArr.push(rawData[i].Runner);
    }
  }
}

findTotalPlayer();

const uniquePlayers = tempPlayerArr.length;
const totalRuns = rawData.length;

const ogData = rawData;
const allData = [ogData];

export function BreakList(arr) {
  // Find Page Amount
  let totalPages = [];
  let eachPages = [];
  let pageNeeded = Math.ceil(arr.length / 25);
  for (let j = 1; j <= pageNeeded; j++) {
    let temp = j;
    totalPages.push(temp);
  }
  // Assign runs
  eachPages[0] = arr.slice(0, 25);
  for (let i = 1; i < pageNeeded - 1; i++) {
    eachPages[i] = arr.slice(i * 25, (i + 1) * 25);
  }
  eachPages[totalPages.length - 1] = arr.slice(
    (pageNeeded - 1) * 25,
    arr.length
  );
  return { eachPages, totalPages };
}

export { totalRuns, uniquePlayers, allData };
