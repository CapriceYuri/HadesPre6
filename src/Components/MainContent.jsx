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
                {"Hades Sub-6"}
              </Typography>
            </div>
            {sortDisplay.map((player, index) => (
              <ListItem
                className="hover:bg-black focus:bg-black flex"
                key={index}
              >
                <div className="me-4">
                  <Typography
                    variant="h6"
                    color="white"
                    className="font-semibold font-[serif]"
                  >
                    {`${index + 1}.`}
                  </Typography>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col items-center">
                    <Typography
                      variant="h6"
                      color="white"
                      className="font-bold font-[monospace]"
                    >
                      {player.Player}
                    </Typography>
                  </div>
                </div>

                <div className="flex-1 text-center">
                  <Typography
                    variant="h6"
                    color="orange"
                    className="font-semibold font-[monospace]"
                  >
                    {`${player.Aspect}`}
                  </Typography>
                </div>

                <div>
                  <div className=" flex-1 relative mx-auto">
                    <Avatar
                      src={`arms/${player.Aspect}.png`}
                      withBorder={true}
                      size="xl"
                    />
                    <Avatar
                      src={`rings/discord-${player.Ring}.gif`}
                      className="absolute top-0 start-0"
                      size="xl"
                    />
                  </div>
                </div>

                <div className="flex-1 text-center hidden md:block">
                  <Typography
                    variant="small"
                    color="green"
                    className="font-semibold"
                  >
                    {`Tartarus`}
                  </Typography>
                  <Typography
                    variant="small"
                    color="green"
                    className="font-semibold"
                  >
                    {`${player.Tartarus}`}
                  </Typography>
                </div>

                <div className="flex-1 text-center hidden md:block">
                  <Typography
                    variant="small"
                    color="orange"
                    className="font-semibold"
                  >
                    {`Asphodel`}
                  </Typography>
                  <Typography
                    variant="small"
                    color="orange"
                    className="font-semibold"
                  >
                    {`${player.Asphodel}`}
                  </Typography>
                </div>

                <div className="flex-1 text-center hidden md:block">
                  <Typography
                    variant="small"
                    color="blue"
                    className="font-semibold"
                  >
                    {`Elysium}`}
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue"
                    className="font-semibold"
                  >
                    {`${player.Elysium}`}
                  </Typography>
                </div>

                <div className="flex-1 text-center hidden md:block">
                  <Typography
                    variant="small"
                    color="red"
                    className="font-semibold"
                  >
                    {`Styx`}
                  </Typography>
                  <Typography
                    variant="small"
                    color="red"
                    className="font-semibold"
                  >
                    {`${player.Styx}`}
                  </Typography>
                </div>
                <div className="flex-1 text-center hidden md:block">
                  <Typography
                    variant="small"
                    color="yellow"
                    className="font-semibold"
                  >
                    {`Daddy`}
                  </Typography>
                  <Typography
                    variant="small"
                    color="yellow"
                    className="font-semibold"
                  >
                    {`${player.Dad}`}
                  </Typography>
                </div>

                <div className="flex-1 text-center">
                  <Typography
                    variant="h5"
                    color="white"
                    className="font-[monospace]"
                  >
                    {`${player.Clear}`}
                  </Typography>
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
