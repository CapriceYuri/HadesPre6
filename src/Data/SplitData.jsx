import { rawData2 } from "./DataSet2";
import { averageTime } from "./MinSecMilli";

// Avg of All Per Splits
let avgTar = [];
let avgAsp = [];
let avgEly = [];
let avgSty = [];
let avgDad = [];
let avgClear = [];

for (let i = 0; i < rawData2.length; i++) {
  avgTar.push(rawData2[i].Tartarus);
  avgAsp.push(rawData2[i].Asphodel);
  avgEly.push(rawData2[i].Elysium);
  avgSty.push(rawData2[i].Styx);
  avgDad.push(rawData2[i].Dad);
  avgClear.push(rawData2[i].Clear);
}

const finalizedTar = averageTime(avgTar);
const finalizedAsp = averageTime(avgAsp);
const finalizedEly = averageTime(avgEly);
const finalizedSty = averageTime(avgSty);
const finalizedDad = averageTime(avgDad);
const finalizedClear = averageTime(avgClear);

export const splitData = [
  finalizedTar,
  finalizedAsp,
  finalizedEly,
  finalizedSty,
  finalizedDad,
  finalizedClear,
];
