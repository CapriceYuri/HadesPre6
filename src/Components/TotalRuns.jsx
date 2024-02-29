import { Card, Typography } from "@material-tailwind/react";
import { totalRuns } from "../Data/DataLogic";

export default function TotalRunsCard() {
  return (
    <Card
      className="w-[100%] h-56 bg-transparent relative border-4 border-black rounded-2xl"
      shadow={false}
    >
      <img
        src="bgcard2.png"
        className="h-full w-full object-cover rounded-xl object-top absolute"
      />
      <div className="absolute h-full w-full bg-gradient-to-l to-black from-black opacity-70" />
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
