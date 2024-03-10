import {
  Avatar,
  Typography,
  Card,
  List,
  CardBody,
} from "@material-tailwind/react";

import { allData, uniquePlayerData } from "../Data/DataLogic";
import { averageTime } from "../Data/MinSecMilli";
import { rawData2, totalRuns } from "../Data/DataLogic";

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

// DIVISON BLOCK

export default function AllSummaryCard() {
  return (
    <Card className="w-[100%] bg-transparent shadow-[0_0_30px_white] 2xl:w-4/5 border-4 border-black rounded-2xl">
      <div className="absolute h-full w-full bg-gradient-to-r from-black via-indigo-900 to-black opacity-80" />
      <List className="z-40">
        <div className="flex justify-center items-center">
          <Typography
            variant="h2"
            color="white"
            className="p-2 text-center font-customFont"
          >
            {"Runner Summary"}
          </Typography>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-4">
          {uniquePlayerData.map((obj, index) => (
            <Card
              className={`border-4 border-black py-4 rounded-2xl relative bg-transparent hover:bg-[#28282b]`}
              key={index}
            >
              <div
                className={
                  "absolute h-full w-full bg-[#28282b] bg-center bg-contain -z-10 rounded-xl top-0 left-0 shadow-[inset_0_0_40px_black]"
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
                      color="green"
                    >
                      {` Tar: ${topRunnerAvgTar(obj.Player)}`}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="h6"
                      className="text-center font-customFont"
                      color="orange"
                    >
                      {` Asp: ${topRunnerAvgAsp(obj.Player)}`}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="h6"
                      className="text-center font-customFont"
                      color="blue"
                    >
                      {` Ely: ${topRunnerAvgEly(obj.Player)}`}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="h6"
                      className="text-center font-customFont"
                      color="red"
                    >
                      {` Sty: ${topRunnerAvgSty(obj.Player)}`}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="h6"
                      className="text-center font-customFont"
                      color="yellow"
                    >
                      {` Dad: ${topRunnerAvgDad(obj.Player)}`}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="h6"
                      className="text-center font-customFont"
                      color="white"
                    >
                      {` Clear: ${topRunnerAvgClear(obj.Player)}`}
                    </Typography>
                  </div>
                </section>
                <div>
                  <Typography
                    variant="h6"
                    className="text-center font-customFont mt-2"
                    color="light-blue"
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
              </CardBody>
            </Card>
          ))}
        </div>
      </List>
    </Card>
  );
}
