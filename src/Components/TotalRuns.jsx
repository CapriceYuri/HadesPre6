import { Card, Typography } from "@material-tailwind/react";
import { totalRuns } from "../Data/DataLogic";

export default function TotalRunsCard() {
  return (
    <Card
      className="w-[100%] h-56 bg-transparent shadow-[0_0_50px_purple] relative"
      shadow={false}
    >
      <img
        src="bgcard2.png"
        className="h-full w-full object-cover rounded-2xl absolute"
      />
      <div className="absolute h-full w-full bg-gradient-to-l  to-cyan-300 via-black from-cyan-500 opacity-70 rounded-xl" />
      <div className="z-50 flex flex-col h-full justify-center items-center mx-auto">
        <Typography variant="h4" color="white">
          {`Total Runs`}
        </Typography>
        <Typography
          variant="h1"
          color="amber"
          className="font-bold"
          children={totalRuns}
        ></Typography>
      </div>
    </Card>
  );
}
