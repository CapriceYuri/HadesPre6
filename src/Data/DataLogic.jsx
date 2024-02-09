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

let ogData = [];
let seenCombinations = new Set();

for (let obj of rawData2) {
  let combination = obj.Player + "-" + obj.Aspect;
  if (!seenCombinations.has(combination)) {
    seenCombinations.add(combination);
    ogData.push(obj);
  }
}

// LISTING
const ZagreusSword = ogData.filter((arr) => arr.Aspect === "Zagreus Sword");
const Nemesis = ogData.filter((arr) => arr.Aspect === "Nemesis");
const Poseidon = ogData.filter((arr) => arr.Aspect === "Poseidon");
const Arthur = ogData.filter((arr) => arr.Aspect === "Arthur");

const ZagreusSpear = ogData.filter((arr) => arr.Aspect === "Zagreus Spear");
const Achilles = ogData.filter((arr) => arr.Aspect === "Achilles");
const Hades = ogData.filter((arr) => arr.Aspect === "Hades");
const GuanYu = ogData.filter((arr) => arr.Aspect === "Guan Yu");

const ZagreusShield = ogData.filter((arr) => arr.Aspect === "Zagreus Shield");
const Chaos = ogData.filter((arr) => arr.Aspect === "Chaos");
const Zeus = ogData.filter((arr) => arr.Aspect === "Zeus");
const Beowulf = ogData.filter((arr) => arr.Aspect === "Beowulf");

const ZagreusBow = ogData.filter((arr) => arr.Aspect === "Zagreus Bow");
const Chiron = ogData.filter((arr) => arr.Aspect === "Chiron");
const Hera = ogData.filter((arr) => arr.Aspect === "Hera");
const Rama = ogData.filter((arr) => arr.Aspect === "Rama");

const ZagreusFists = ogData.filter((arr) => arr.Aspect === "Zagreus Fists");
const Talos = ogData.filter((arr) => arr.Aspect === "Talos");
const Demeter = ogData.filter((arr) => arr.Aspect === "Demeter");
const Gilgamesh = ogData.filter((arr) => arr.Aspect === "Gilgamesh");

const ZagreusRail = ogData.filter((arr) => arr.Aspect === "Zagreus Rail");
const Eris = ogData.filter((arr) => arr.Aspect === "Eris");
const Hestia = ogData.filter((arr) => arr.Aspect === "Hestia");
const Lucifer = ogData.filter((arr) => arr.Aspect === "Lucifer");
// LISTING

const split1 = structuredClone(rawData2).sort((a, b) =>
  a.Tartarus > b.Tartarus ? 1 : -1
);
const split2 = structuredClone(rawData2).sort((a, b) =>
  a.Asphodel > b.Asphodel ? 1 : -1
);
const split3 = structuredClone(rawData2).sort((a, b) =>
  a.Elysium > b.Elysium ? 1 : -1
);
const split4 = structuredClone(rawData2).sort((a, b) =>
  a.Styx > b.Styx ? 1 : -1
);
const split5 = structuredClone(rawData2).sort((a, b) =>
  a.Dad > b.Dad ? 1 : -1
);

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
  split1,
  split2,
  split3,
  split4,
  split5,
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

export { totalRuns, uniquePlayers, allData, ogData };

// function getUniquePropertyValues(array, property) {
//   return Array.from(new Set(array.map((item) => item[property])));
// }
// const uniqueNames = getUniquePropertyValues(rawData2, "Aspect");
// console.log(uniqueNames);
