import {
  Avatar,
  Typography,
  Card,
  List,
  CardBody,
} from "@material-tailwind/react";

import { allData, uniquePlayerData } from "../Data/DataLogic";
import { averageTime, totalTime } from "../Data/MinSecMilli";
import { rawData2, totalRuns } from "../Data/DataLogic";
import { splitData } from "../Data/SplitData";

console.log(splitData);
const topRecords = allData.slice(5, 29);
const allSub5 = rawData2.slice().filter((obj) => obj.Clear < "5");
let topAspectPlayer = [];

for (let i = 0; i < topRecords.length; i++) {
  topAspectPlayer.push(topRecords[i][0]);
}
// Avg. Per Split Functions
function topRunnerAvgTar(name) {
  let tempData = rawData2.slice();
  const playerAllRuns = tempData.filter((obj) => obj.Player === name);
  let tempArr = [];
  for (let i = 0; i < playerAllRuns.length; i++) {
    tempArr.push(playerAllRuns[i].Tartarus);
  }
  return averageTime(tempArr);
}
function topRunnerAvgAsp(name) {
  let tempData = rawData2.slice();
  const playerAllRuns = tempData.filter((obj) => obj.Player === name);
  let tempArr = [];
  for (let i = 0; i < playerAllRuns.length; i++) {
    tempArr.push(playerAllRuns[i].Asphodel);
  }
  return averageTime(tempArr);
}
function topRunnerAvgEly(name) {
  let tempData = rawData2.slice();
  const playerAllRuns = tempData.filter((obj) => obj.Player === name);
  let tempArr = [];
  for (let i = 0; i < playerAllRuns.length; i++) {
    tempArr.push(playerAllRuns[i].Elysium);
  }
  return averageTime(tempArr);
}
function topRunnerAvgSty(name) {
  let tempData = rawData2.slice();
  const playerAllRuns = tempData.filter((obj) => obj.Player === name);
  let tempArr = [];
  for (let i = 0; i < playerAllRuns.length; i++) {
    tempArr.push(playerAllRuns[i].Styx);
  }
  return averageTime(tempArr);
}
function topRunnerAvgDad(name) {
  let tempData = rawData2.slice();
  const playerAllRuns = tempData.filter((obj) => obj.Player === name);
  let tempArr = [];
  for (let i = 0; i < playerAllRuns.length; i++) {
    tempArr.push(playerAllRuns[i].Dad);
  }
  return averageTime(tempArr);
}

function topRunnerAvgClear(name) {
  let tempData = rawData2.slice();
  const playerAllRuns = tempData.filter((obj) => obj.Player === name);
  let tempArr = [];
  for (let i = 0; i < playerAllRuns.length; i++) {
    tempArr.push(playerAllRuns[i].Clear);
  }
  return averageTime(tempArr);
}

function topRunnerAllClear(name) {
  let tempData = rawData2.slice();
  const playerAllRuns = tempData.filter((obj) => obj.Player === name);
  let tempArr = [];
  for (let i = 0; i < playerAllRuns.length; i++) {
    tempArr.push(playerAllRuns[i].Clear);
  }
  const calTime = totalTime(tempArr).split(":");
  const calTime_Hour = Math.floor(calTime[0] / 60);
  const calTime_Minute = calTime[0] % 60;
  return `~ ${calTime_Hour}h ${calTime_Minute}m`;
}

function playerTotalRun(name) {
  let tempData = rawData2.slice();
  const playerAllRuns = tempData.filter((obj) => obj.Player === name);
  return playerAllRuns.length;
}

function playerTotalSub5(name) {
  let tempData = rawData2.slice();
  const playerAllRuns = tempData.filter((obj) => obj.Player === name);
  const playerSub5Runs = playerAllRuns.filter((obj) => obj.Clear < "5");
  return playerSub5Runs.length;
}

function bestRoundedPLayer(name) {
  const checkAllResults = (value) => value === true;

  let checkFunction = [
    topRunnerAvgTar,
    topRunnerAvgAsp,
    topRunnerAvgEly,
    topRunnerAvgSty,
    topRunnerAvgDad,
    topRunnerAvgClear,
  ];
  let allResults = [];
  for (let i = 0; i < checkFunction.length; i++) {
    let result = checkFunction[i](name) < splitData[i];
    allResults.push(result);
  }
  return allResults.every(checkAllResults);
}

// DIVISON BLOCK

export default function AllSummaryCard() {
  return (
    <Card className="w-[100%] bg-transparent 2xl:w-4/5 rounded-2xl mt-4">
      <List>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-4">
          {uniquePlayerData.map((obj, index) => (
            <Card
              className={`border-4 border-black py-4 rounded-2xl relative bg-transparent hover:bg-[#28282b]`}
              key={index}
            >
              <div
                className={
                  bestRoundedPLayer(obj.Player) === true
                    ? `absolute h-full w-full bg-[url(/speed.gif)] bg-cover bg-center -z-10 rounded-xl top-0 left-0 shadow-[inset_0_0_50px_black]`
                    : `absolute h-full w-full bg-[#28282b] bg-center bg-contain -z-10 rounded-xl top-0 left-0 shadow-[inset_0_0_40px_black]`
                }
              />
              <div>
                <Typography
                  variant="h6"
                  className="text-start font-customFont -mt-3 ps-2"
                  color="cyan"
                >
                  {`#${index + 1}`}
                </Typography>
              </div>
              <div className={`text-center`}>
                <Avatar
                  variant="circular"
                  withBorder={true}
                  color="white"
                  className="shadow-[0_0_20px_cyan]"
                  src={`runner/player-${obj.Player.toLowerCase()}.png`}
                />
              </div>

              <CardBody className="p-2">
                <div className="text-center">
                  <Typography
                    variant="h6"
                    color="cyan"
                    className="mx-auto font-customFont"
                  >
                    {obj.Player}
                  </Typography>
                </div>
                <section className="border-2 border-black rounded-2xl p-2 my-2 shadow-[inset_0_0_10px_white]">
                  <div>
                    <Typography
                      variant="small"
                      className="text-center font-customFont mb-2"
                      color="white"
                    >
                      {`Grand Avg Summary`}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="h6"
                      className="text-center font-customFont"
                      color={
                        topRunnerAvgTar(obj.Player) < splitData[0]
                          ? "red"
                          : "blue"
                      }
                    >
                      {` Tar: ${topRunnerAvgTar(obj.Player)}`}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="h6"
                      className="text-center font-customFont"
                      color={
                        topRunnerAvgAsp(obj.Player) < splitData[1]
                          ? "red"
                          : "blue"
                      }
                    >
                      {` Asp: ${topRunnerAvgAsp(obj.Player)}`}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="h6"
                      className="text-center font-customFont"
                      color={
                        topRunnerAvgEly(obj.Player) < splitData[2]
                          ? "red"
                          : "blue"
                      }
                    >
                      {` Ely: ${topRunnerAvgEly(obj.Player)}`}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="h6"
                      className="text-center font-customFont"
                      color={
                        topRunnerAvgSty(obj.Player) < splitData[3]
                          ? "red"
                          : "blue"
                      }
                    >
                      {` Sty: ${topRunnerAvgSty(obj.Player)}`}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="h6"
                      className="text-center font-customFont"
                      color={
                        topRunnerAvgDad(obj.Player) < splitData[4]
                          ? "red"
                          : "blue"
                      }
                    >
                      {` Dad: ${topRunnerAvgDad(obj.Player)}`}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="h6"
                      className="text-center font-customFont"
                      color={
                        topRunnerAvgClear(obj.Player) < splitData[5]
                          ? "red"
                          : "blue"
                      }
                    >
                      {` Clear: ${topRunnerAvgClear(obj.Player)}`}
                    </Typography>
                  </div>
                </section>
                <div>
                  <Typography
                    variant="h6"
                    className="text-center font-customFont mt-2"
                    color="white"
                  >
                    {`Total Run/s: ${playerTotalRun(obj.Player)}`}
                  </Typography>
                  <Typography
                    variant="h6"
                    className="text-center font-customFont opacity-40 -mt-1"
                    color="white"
                  >
                    {`(${(
                      (playerTotalRun(obj.Player) / totalRuns) *
                      100
                    ).toFixed(2)}%)`}
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant="h6"
                    className="text-center font-customFont mt-2"
                    color="pink"
                  >
                    {playerTotalSub5(obj.Player) > 0
                      ? `Sub-5 Run/s: ${playerTotalSub5(obj.Player)}`
                      : ``}
                  </Typography>
                  <Typography
                    variant="h6"
                    className="text-center font-customFont opacity-40 -mt-1"
                    color="white"
                  >
                    {playerTotalSub5(obj.Player) > 0
                      ? `(${(
                          (playerTotalSub5(obj.Player) / allSub5.length) *
                          100
                        ).toFixed(2)}%)`
                      : ""}
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant="h6"
                    className="text-center font-customFont mt-2"
                    color="yellow"
                  >
                    {` TGT: ${topRunnerAllClear(obj.Player)}`}
                  </Typography>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </List>
    </Card>
  );
}
