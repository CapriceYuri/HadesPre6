import { ogData } from "../Data/DataLogic";
import { averageTime } from "./MinSecMilli";

// BREAK
const aspectstatZagreusSword = structuredClone(ogData).filter(
  (arr) => arr.Aspect === "Zagreus Sword"
);
const aspectstatNemesis = structuredClone(ogData).filter(
  (arr) => arr.Aspect === "Nemesis"
);
const aspectstatPoseidon = structuredClone(ogData).filter(
  (arr) => arr.Aspect === "Poseidon"
);
const aspectstatArthur = structuredClone(ogData).filter(
  (arr) => arr.Aspect === "Arthur"
);
const aspectstatZagreusSpear = structuredClone(ogData).filter(
  (arr) => arr.Aspect === "Zagreus Spear"
);
const aspectstatAchilles = structuredClone(ogData).filter(
  (arr) => arr.Aspect === "Achilles"
);
const aspectstatHades = structuredClone(ogData).filter(
  (arr) => arr.Aspect === "Hades"
);
const aspectstatGuanYu = structuredClone(ogData).filter(
  (arr) => arr.Aspect === "Guan Yu"
);
const aspectstatZagreusShield = structuredClone(ogData).filter(
  (arr) => arr.Aspect === "Zagreus Shield"
);
const aspectstatChaos = structuredClone(ogData).filter(
  (arr) => arr.Aspect === "Chaos"
);
const aspectstatZeus = structuredClone(ogData).filter(
  (arr) => arr.Aspect === "Zeus"
);
const aspectstatBeowulf = structuredClone(ogData).filter(
  (arr) => arr.Aspect === "Beowulf"
);
const aspectstatZagreusBow = structuredClone(ogData).filter(
  (arr) => arr.Aspect === "Zagreus Bow"
);
const aspectstatChiron = structuredClone(ogData).filter(
  (arr) => arr.Aspect === "Chiron"
);
const aspectstatHera = structuredClone(ogData).filter(
  (arr) => arr.Aspect === "Hera"
);
const aspectstatRama = structuredClone(ogData).filter(
  (arr) => arr.Aspect === "Rama"
);
const aspectstatZagreusFists = structuredClone(ogData).filter(
  (arr) => arr.Aspect === "Zagreus Fists"
);
const aspectstatTalos = structuredClone(ogData).filter(
  (arr) => arr.Aspect === "Talos"
);
const aspectstatDemeter = structuredClone(ogData).filter(
  (arr) => arr.Aspect === "Demeter"
);
const aspectstatGilgamesh = structuredClone(ogData).filter(
  (arr) => arr.Aspect === "Gilgamesh"
);
const aspectstatZagreusRail = structuredClone(ogData).filter(
  (arr) => arr.Aspect === "Zagreus Rail"
);
const aspectstatEris = structuredClone(ogData).filter(
  (arr) => arr.Aspect === "Eris"
);
const aspectstatHestia = structuredClone(ogData).filter(
  (arr) => arr.Aspect === "Hestia"
);
const aspectstatLucifer = structuredClone(ogData).filter(
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
const uniqueArrAspect = [
  aspectstatZagreusSword,
  aspectstatNemesis,
  aspectstatPoseidon,
  aspectstatArthur,
  aspectstatZagreusSpear,
  aspectstatAchilles,
  aspectstatHades,
  aspectstatGuanYu,
  aspectstatZagreusShield,
  aspectstatChaos,
  aspectstatZeus,
  aspectstatBeowulf,
  aspectstatZagreusBow,
  aspectstatChiron,
  aspectstatHera,
  aspectstatRama,
  aspectstatZagreusFists,
  aspectstatTalos,
  aspectstatDemeter,
  aspectstatGilgamesh,
  aspectstatZagreusRail,
  aspectstatEris,
  aspectstatHestia,
  aspectstatLucifer,
];

export { uniqueArrAspect };
