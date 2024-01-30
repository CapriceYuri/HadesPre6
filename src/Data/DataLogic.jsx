import { rawData2 } from "./DataSet2";

let ogData = [];
let seenCombinations = new Set();

for (let obj of rawData2) {
  let combination = obj.Player + "-" + obj.Aspect;
  if (!seenCombinations.has(combination)) {
    seenCombinations.add(combination);
    ogData.push(obj);
  }
}

const allData = [ogData];

let tempPlayerArr = [];

function findTotalPlayer() {
  for (let i = 0; i < ogData.length; i++) {
    if (tempPlayerArr.indexOf(ogData[i].Player) === -1) {
      tempPlayerArr.push(ogData[i].Player);
    }
  }
}
findTotalPlayer();

const uniquePlayers = tempPlayerArr.length;
const totalRuns = ogData.length;

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
