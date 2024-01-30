import {
  List,
  ListItem,
  Avatar,
  Card,
  CardFooter,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import { useState } from "react";
import { allData, BreakList } from "../Data/DataLogic";
import TotalPlayerCard from "./TotalUniquePlayers";
import TotalRunsCard from "./TotalRuns";

export default function MainContent() {
  const [category, setCategory] = useState(0);
  const [active, setActive] = useState(1);
  const [pageInfo, setPageInfo] = useState(0);

  function handleDataChange(num) {
    setCategory(num);
    setPageInfo(0);
    setActive(1);
  }
  function handleChangePage(arr) {
    setPageInfo(arr);
  }

  let dataDisplay = allData[category];
  const { eachPages, totalPages } = BreakList(dataDisplay);

  let sortDisplay = eachPages[pageInfo];

  const getList = (index) => ({
    variant: active === index ? "gradient" : "text",
    color: "white",
    onClick: () => {
      setActive(index);
      handleChangePage(index - 1);
    },
  });

  return (
    <section className="h-lvh">
      <img
        src="bg-img.png"
        alt="cover-bg"
        className="fixed h-lvh w-full object-cover -z-10"
      />
      <section>
        <div className="flex justify-center px-2 mx-auto w-[100%] py-5 gap-x-2 2xl:w-3/4">
          <TotalRunsCard />
          <TotalPlayerCard />
        </div>
      </section>
      {/* COVER BG */}
      <section className="w-full flex justify-center pt-5 pb-10">
        <Card className="w-[100%] backdrop-blur-lg bg-transparent shadow-[0_0_50px_cyan] 2xl:w-3/4">
          <img
            src="vertical-blue.jpg"
            className="h-full w-full object-cover rounded-2xl absolute"
          />
          <div className="absolute h-full w-full bg-gradient-to-r from-purple-800 via-black to-purple-600 rounded-xl opacity-60" />
          <List className="z-40">
            <div>
              <Typography
                variant="h3"
                color="purple"
                className="p-2 text-center font-[monospace]"
              >
                {"Hades Pre-6"}
              </Typography>
            </div>
            {sortDisplay.map((player, index) => (
              <ListItem
                className="hover:bg-black focus:bg-black flex"
                key={index}
              >
                <div className="flex-1">
                  <div className="flex flex-col items-center">
                    <Typography
                      variant="small"
                      color="white"
                      className="font-normal"
                    >
                      {player.Runner}
                    </Typography>
                  </div>
                </div>

                <div>
                  <div className="relative mx-auto">
                    <Avatar
                      src={`arms/${player.Weapon}-${player.Aspect}.png`}
                      withBorder={true}
                    />
                    <Avatar
                      src={`rings/discord-${player.Ring}.gif`}
                      className="absolute top-0 start-0"
                    />
                  </div>
                </div>

                <div className="text-center px-2 md:flex-1 md:px-0">
                  <Typography
                    variant="small"
                    color="orange"
                    className="font-semibold"
                  >
                    {`${player.Weapon}`}
                  </Typography>
                  <Typography
                    variant="small"
                    color="orange"
                    className="font-semibold"
                  >
                    {`${player.Aspect}`}
                  </Typography>
                </div>

                <div className="flex-1 text-center align-top hidden md:block">
                  <Typography variant="h5" color="white">
                    {`${player.IGTR}`}
                  </Typography>
                </div>

                <div className="text-center px-2 md:flex-1 md:px-0">
                  <Typography
                    variant="small"
                    color="cyan"
                    className="font-semibold"
                  >
                    {`Furies: `}
                    {`${player.Furies}`}
                  </Typography>
                  <Typography
                    variant="small"
                    color="cyan"
                    className="font-semibold"
                  >
                    {`Lernie: `}
                    {`${player.Lernie}`}
                  </Typography>
                </div>

                <div className="text-center px-2 md:flex-1 md:px-0">
                  <Typography
                    variant="small"
                    color="cyan"
                    className="font-semibold"
                  >
                    {`Heroes: `}
                    {`${player.Heroes}`}
                  </Typography>
                  <Typography
                    variant="small"
                    color="cyan"
                    className="font-semibold"
                  >
                    {`Father: `}
                    {`${player.Father}`}
                  </Typography>
                </div>
                <div className="text-center px-2 md:flex-1 md:px-0">
                  <Typography
                    variant="small"
                    color="amber"
                    className="font-semibold"
                  >
                    {`Total Boss Time`}
                  </Typography>
                  <Typography
                    variant="small"
                    color="red"
                    className="font-semibold"
                  >
                    {`${player.BossesT}`}
                  </Typography>
                </div>
                <div className="text-center px-2 md:flex-1 md:px-0">
                  <Typography
                    variant="small"
                    color="amber"
                    className="font-semibold"
                  >
                    {`Non Boss Rooms`}
                  </Typography>
                  <Typography
                    variant="small"
                    color="red"
                    className="font-semibold"
                  >
                    {`${player.NBR}`}
                  </Typography>
                </div>

                <div className="flex-1 text-center">
                  <Typography variant="h6" color="white">
                    {`${player.IGTA}`}
                  </Typography>
                </div>

                <div className="flex justify-center">
                  <a href={player.Link} target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      color="red"
                      className="w-6 h-6 z-10 animate-bounce"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </ListItem>
            ))}
          </List>
          <CardFooter>
            <div>
              <div className="grid grid-cols-10">
                {totalPages.map((page, index) => (
                  <IconButton {...getList(page)} key={index}>
                    {page}
                  </IconButton>
                ))}
              </div>
            </div>
          </CardFooter>
        </Card>
      </section>
    </section>
  );
}
