import {
  Avatar,
  Typography,
  Card,
  List,
  CardBody,
} from "@material-tailwind/react";

import { allData } from "../Data/DataLogic";

const topRecords = allData.slice(5, 29);
let topAspectPlayer = [];

for (let i = 0; i < topRecords.length; i++) {
  topAspectPlayer.push(topRecords[i][0]);
}

// DIVISON BLOCK

export default function TopSummaryCards() {
  return (
    <Card className="w-[100%] backdr`op-blur-lg bg-transparent shadow-[0_0_30px_white] 2xl:w-4/5 border-4 border-black rounded-2xl">
      <div className="absolute h-full w-full bg-[#28282b] opacity-90" />
      <List className="z-40">
        <div className="flex justify-center items-center">
          <Typography
            variant="h2"
            color="white"
            className="p-2 text-center font-customFont"
          >
            {"Sub-6 W.R."}
          </Typography>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-4">
          {topAspectPlayer.map((obj, index) => (
            <Card
              className={` py-4 rounded-2xl relative bg-transparent`}
              key={index}
              shadow={false}
            >
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
                    variant="small"
                    color="white"
                    className="mx-auto font-customFont"
                  >
                    {obj.Player}
                  </Typography>
                </div>

                <div>
                  <Typography
                    variant="h5"
                    color="amber"
                    className="text-center font-customFont"
                  >
                    {obj.Aspect}
                  </Typography>
                </div>

                <div>
                  <img
                    src={`armsweapon/${obj.Aspect}.png`}
                    className="rounded-3xl w-[100%] max-w-[180px] mx-auto my-2 shadow-[0_0_15px_cyan]"
                  />
                </div>

                <div>
                  <Typography
                    variant="h5"
                    className="text-center font-customFont"
                    color="white"
                  >
                    {obj.Clear}
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
