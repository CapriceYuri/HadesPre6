import { rawData2 } from "./DataSet2";
rawData2.sort((a, b) => (a.Clear > b.Clear ? 1 : -1));

let ogData = [];
let seenCombinations = new Set();

for (let obj of rawData2) {
  let combination = obj.Player + "-" + obj.Aspect;
  if (!seenCombinations.has(combination)) {
    seenCombinations.add(combination);
    ogData.push(obj);
  }
}

const allData = [rawData2, ogData];

let tempPlayerArr = [];
function findTotalPlayer() {
  for (let i = 0; i < rawData2.length; i++) {
    if (tempPlayerArr.indexOf(rawData2[i].Player) === -1) {
      tempPlayerArr.push(rawData2[i].Player);
    }
  }
}
findTotalPlayer();

const uniquePlayers = tempPlayerArr.length;
const totalRuns = rawData2.length;

export function BreakList(arr) {
  // Find Page Amount
  let totalPages = [];
  let eachPages = [];
  let pageNeeded = Math.ceil(arr.length / 21);
  for (let j = 1; j <= pageNeeded; j++) {
    let temp = j;
    totalPages.push(temp);
  }
  // Assign runs
  eachPages[0] = arr.slice(0, 21);
  for (let i = 1; i < pageNeeded - 1; i++) {
    eachPages[i] = arr.slice(i * 21, (i + 1) * 21);
  }
  eachPages[totalPages.length - 1] = arr.slice(
    (pageNeeded - 1) * 21,
    arr.length
  );
  return { eachPages, totalPages };
}

export { totalRuns, uniquePlayers, allData };
