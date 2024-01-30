import { Card, Typography } from "@material-tailwind/react";
import { uniquePlayers } from "../Data/DataLogic";

export default function TotalPlayerCard() {
  return (
    <Card
      className="w-[100%] h-56 flex bg-transparent shadow-[0_0_50px_purple] relative"
      shadow={false}
    >
      <img
        src="bgcard1.png"
        className="h-full w-full object-cover rounded-2xl absolute"
      />
      <div className="absolute h-full w-full bg-gradient-to-l to-black from-cyan-400 opacity-50 rounded-xl" />

      <div className="z-50 flex flex-col h-full justify-center items-center mx-auto">
        <Typography variant="h4" color="white">
          {`Unique Players`}
        </Typography>
        <Typography
          variant="h1"
          color="amber"
          className="font-bold"
          children={uniquePlayers}
        ></Typography>
      </div>
    </Card>
  );
}
