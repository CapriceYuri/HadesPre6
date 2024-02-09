import { rawData2 } from "../Data/DataLogic";
import { averageTime } from "./MinSecMilli";

// BREAK
const aspectstatZagreusSword = structuredClone(rawData2).filter(
  (arr) => arr.Aspect === "Zagreus Sword"
);
const aspectstatNemesis = structuredClone(rawData2).filter(
  (arr) => arr.Aspect === "Nemesis"
);
const aspectstatPoseidon = structuredClone(rawData2).filter(
  (arr) => arr.Aspect === "Poseidon"
);
const aspectstatArthur = structuredClone(rawData2).filter(
  (arr) => arr.Aspect === "Arthur"
);
const aspectstatZagreusSpear = structuredClone(rawData2).filter(
  (arr) => arr.Aspect === "Zagreus Spear"
);
const aspectstatAchilles = structuredClone(rawData2).filter(
  (arr) => arr.Aspect === "Achilles"
);
const aspectstatHades = structuredClone(rawData2).filter(
  (arr) => arr.Aspect === "Hades"
);
const aspectstatGuanYu = structuredClone(rawData2).filter(
  (arr) => arr.Aspect === "Guan Yu"
);
const aspectstatZagreusShield = structuredClone(rawData2).filter(
  (arr) => arr.Aspect === "Zagreus Shield"
);
const aspectstatChaos = structuredClone(rawData2).filter(
  (arr) => arr.Aspect === "Chaos"
);
const aspectstatZeus = structuredClone(rawData2).filter(
  (arr) => arr.Aspect === "Zeus"
);
const aspectstatBeowulf = structuredClone(rawData2).filter(
  (arr) => arr.Aspect === "Beowulf"
);
const aspectstatZagreusBow = structuredClone(rawData2).filter(
  (arr) => arr.Aspect === "Zagreus Bow"
);
const aspectstatChiron = structuredClone(rawData2).filter(
  (arr) => arr.Aspect === "Chiron"
);
const aspectstatHera = structuredClone(rawData2).filter(
  (arr) => arr.Aspect === "Hera"
);
const aspectstatRama = structuredClone(rawData2).filter(
  (arr) => arr.Aspect === "Rama"
);
const aspectstatZagreusFists = structuredClone(rawData2).filter(
  (arr) => arr.Aspect === "Zagreus Fists"
);
const aspectstatTalos = structuredClone(rawData2).filter(
  (arr) => arr.Aspect === "Talos"
);
const aspectstatDemeter = structuredClone(rawData2).filter(
  (arr) => arr.Aspect === "Demeter"
);
const aspectstatGilgamesh = structuredClone(rawData2).filter(
  (arr) => arr.Aspect === "Gilgamesh"
);
const aspectstatZagreusRail = structuredClone(rawData2).filter(
  (arr) => arr.Aspect === "Zagreus Rail"
);
const aspectstatEris = structuredClone(rawData2).filter(
  (arr) => arr.Aspect === "Eris"
);
const aspectstatHestia = structuredClone(rawData2).filter(
  (arr) => arr.Aspect === "Hestia"
);
const aspectstatLucifer = structuredClone(rawData2).filter(
  (arr) => arr.Aspect === "Lucifer"
);

// ALL VARIABLES
export function allClearTime(arr) {
  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    tempArr.push(arr[i].Clear);
  }
  return averageTime(tempArr);
}

// BUNDLE
const uniqueArrAspectRaw = [
  aspectstatZagreusSword,
  aspectstatNemesis,
  aspectstatPoseidon,
  aspectstatArthur,
];
const uniqueArrAspectRaw2 = [
  aspectstatZagreusSpear,
  aspectstatAchilles,
  aspectstatHades,
  aspectstatGuanYu,
];
const uniqueArrAspectRaw3 = [
  aspectstatZagreusShield,
  aspectstatChaos,
  aspectstatZeus,
  aspectstatBeowulf,
];
const uniqueArrAspectRaw4 = [
  aspectstatZagreusBow,
  aspectstatChiron,
  aspectstatHera,
  aspectstatRama,
];
const uniqueArrAspectRaw5 = [
  aspectstatZagreusFists,
  aspectstatTalos,
  aspectstatDemeter,
  aspectstatGilgamesh,
];
const uniqueArrAspectRaw6 = [
  aspectstatZagreusRail,
  aspectstatEris,
  aspectstatHestia,
  aspectstatLucifer,
];

export {
  uniqueArrAspectRaw,
  uniqueArrAspectRaw2,
  uniqueArrAspectRaw3,
  uniqueArrAspectRaw4,
  uniqueArrAspectRaw5,
  uniqueArrAspectRaw6,
};
