import { rawData2 } from "./DataSet2";
rawData2.sort((a, b) => (a.Clear > b.Clear ? 1 : -1));

const firstPlaceHistory = rawData2.filter(
  (arr) => rawData2[0].Player === arr.Player
);
const secondPlaceHistory = rawData2.filter(
  (arr) => rawData2[1].Player === arr.Player
);
const thirdPlaceHistory = rawData2.filter(
  (arr) => rawData2[2].Player === arr.Player
);
// LISTING
const ZagreusSword = rawData2.filter((arr) => arr.Aspect === "Zagreus Sword");
const Nemesis = rawData2.filter((arr) => arr.Aspect === "Nemesis");
const Poseidon = rawData2.filter((arr) => arr.Aspect === "Poseidon");
const Arthur = rawData2.filter((arr) => arr.Aspect === "Arthur");

const ZagreusSpear = rawData2.filter((arr) => arr.Aspect === "Zagreus Spear");
const Achilles = rawData2.filter((arr) => arr.Aspect === "Achilles");
const Hades = rawData2.filter((arr) => arr.Aspect === "Hades");
const GuanYu = rawData2.filter((arr) => arr.Aspect === "Guan Yu");

const ZagreusShield = rawData2.filter((arr) => arr.Aspect === "Zagreus Shield");
const Chaos = rawData2.filter((arr) => arr.Aspect === "Chaos");
const Zeus = rawData2.filter((arr) => arr.Aspect === "Zeus");
const Beowulf = rawData2.filter((arr) => arr.Aspect === "Beowulf");

const ZagreusBow = rawData2.filter((arr) => arr.Aspect === "Zagreus Bow");
const Chiron = rawData2.filter((arr) => arr.Aspect === "Chiron");
const Hera = rawData2.filter((arr) => arr.Aspect === "Hera");
const Rama = rawData2.filter((arr) => arr.Aspect === "Rama");

const ZagreusFists = rawData2.filter((arr) => arr.Aspect === "Zagreus Fists");
const Talos = rawData2.filter((arr) => arr.Aspect === "Talos");
const Demeter = rawData2.filter((arr) => arr.Aspect === "Demeter");
const Gilgamesh = rawData2.filter((arr) => arr.Aspect === "Gilgamesh");

const ZagreusRail = rawData2.filter((arr) => arr.Aspect === "Zagreus Rail");
const Eris = rawData2.filter((arr) => arr.Aspect === "Eris");
const Hestia = rawData2.filter((arr) => arr.Aspect === "Hestia");
const Lucifer = rawData2.filter((arr) => arr.Aspect === "Lucifer");

// LISTING
let ogData = [];
let seenCombinations = new Set();

for (let obj of rawData2) {
  let combination = obj.Player + "-" + obj.Aspect;
  if (!seenCombinations.has(combination)) {
    seenCombinations.add(combination);
    ogData.push(obj);
  }
}

const allData = [
  rawData2,
  ogData,
  firstPlaceHistory,
  secondPlaceHistory,
  thirdPlaceHistory,
  ZagreusSword,
  Nemesis,
  Poseidon,
  Arthur,
  ZagreusSpear,
  Achilles,
  Hades,
  GuanYu,
  ZagreusShield,
  Chaos,
  Zeus,
  Beowulf,
  ZagreusBow,
  Chiron,
  Hera,
  Rama,
  ZagreusFists,
  Talos,
  Demeter,
  Gilgamesh,
  ZagreusRail,
  Eris,
  Hestia,
  Lucifer,
];

export function addRankProperty(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].rank = i + 1;
  }
}
addRankProperty(rawData2);

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

function getUniquePropertyValues(array, property) {
  return Array.from(new Set(array.map((item) => item[property])));
}
const uniqueNames = getUniquePropertyValues(rawData2, "Aspect");
console.log(uniqueNames);
