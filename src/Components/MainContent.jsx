import {
  List,
  ListItem,
  Avatar,
  Card,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

import { useState } from "react";
import { allData, BreakList, addRankProperty } from "../Data/DataLogic";
import TotalPlayerCard from "./TotalUniquePlayers";
import TotalRunsCard from "./TotalRuns";
import HistoryButtons from "./CategoryBtns";
import AspectButtons from "./AspectBtns";
import SplitsBtns from "./Splits";

export default function MainContent() {
  const [category, setCategory] = useState(0);
  const [active, setActive] = useState(1);
  const [pageInfo, setPageInfo] = useState(0);

  const handleDataChange = (num) => ({
    variant: category === num ? "gradient" : "outlined",
    color: "white",
    onClick: () => {
      addRankProperty(allData[num]);
      setCategory(num);
      setPageInfo(0);
      setActive(1);
    },
  });

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
      <video
        src="Hades2.mp4"
        className="-z-10 fixed h-lvh w-full object-cover 3xl:object-fill"
        muted
        autoPlay
        loop
      ></video>
      <section>
        <div className="flex justify-center px-2 mx-auto w-[100%] py-5 gap-x-2 2xl:w-3/4">
          <TotalRunsCard />
          <TotalPlayerCard />
        </div>
      </section>
      <section>
        <img src="hades-red.png" className="mx-auto" />
      </section>
      <section className="w-full flex justify-center pt-5 pb-10">
        <Card className="w-[100%] backdrop-blur-lg bg-transparent shadow-[0_0_50px_cyan] 2xl:w-3/4">
          <img
            src="vertical-blue.jpg"
            className="h-full w-full object-cover rounded-2xl absolute"
          />
          <div className="absolute h-full w-full bg-gradient-to-r from-purple-800 via-black to-purple-600 rounded-xl opacity-60" />
          <List className="z-40">
            <div className="flex justify-center gap-x-4 pt-4">
              <Button {...handleDataChange(0)} color="red">
                All Runs
              </Button>
              <Button {...handleDataChange(1)} color="blue">
                Unique RUns
              </Button>
            </div>
            <HistoryButtons onButtonClick={handleDataChange} />
            <SplitsBtns onButtonClick={handleDataChange} />
            <AspectButtons onButtonClick={handleDataChange} />
            <div>
              <Typography
                variant="h3"
                className="p-2 text-center font-[monospace] text-[#D8BFD8]"
              >
                {"Hades Sub-6"}
              </Typography>
            </div>
            <div className="flex justify-center">
              <div>
                <img src="lighting.gif" />
              </div>
              <Typography
                variant="h3"
                color="yellow"
                className="p-2 text-center font-[monospace]"
              >
                {"HERMES"}
              </Typography>
              <div>
                <img src="lighting.gif" />
              </div>
            </div>
            {sortDisplay.map((player, index) => (
              <ListItem
                className="hover:bg-black focus:bg-black flex"
                key={index}
              >
                <div className="text-center">
                  <Typography
                    variant="h6"
                    color="pink"
                    className="font-[monospace]"
                  >
                    {`#${player.rank}. `}
                  </Typography>
                </div>
                <div className="flex-1">
                  <Typography
                    variant="h6"
                    color="white"
                    className="font-[monospace]"
                  >
                    {player.Player}
                  </Typography>
                </div>

                <div className="flex-1 text-center">
                  <Typography
                    variant="h6"
                    color="orange"
                    className="font-[monospace]"
                  >
                    {`${player.Aspect}`}
                  </Typography>
                </div>

                <div>
                  <div className="flex-1 relative mx-auto">
                    <Avatar
                      src={`arms/${player.Aspect}.png`}
                      withBorder={true}
                      size="lg"
                    />
                    <Avatar
                      src={(() => {
                        switch (player.Aspect) {
                          case "Beowulf":
                            return "rings/discord-red.gif";
                          case "Hera":
                            return "rings/discord-purple.gif";
                          case "Achilles":
                            return "rings/discord-yellow.gif";
                          case "Eris":
                            return "rings/discord-darkblue.gif";
                          case "Hestia":
                            return "rings/discord-pink.gif";
                          case "Rama":
                            return "rings/discord-blue.gif";
                          case "Zagreus Spear":
                            return "rings/discord-purple.gif";
                          case "Nemesis":
                            return "rings/discord-violet.gif";
                          case "Demeter":
                            return "rings/discord-green.gif";
                          case "Lucifer":
                            return "rings/discord-yellow.gif";
                          case "Gilgamesh":
                            return "rings/discord-pink.gif";
                          case "Zagreus Rail":
                            return "rings/discord-yellow.gif";
                          case "Chaos":
                            return "rings/discord-purple.gif";
                          case "Zagreus Fists":
                            return "rings/discord-pink.gif";
                          case "Zagreus Shield":
                            return "rings/discord-orange.gif";
                          case "GuanYu":
                            return "rings/discord-red.gif";
                          case "Chiron":
                            return "rings/discord-yellow.gif";
                          case "Poseidon":
                            return "rings/discord-green.gif";
                          case "Zagreus Bow":
                            return "rings/discord-blue.gif";
                          case "Talos":
                            return "rings/discord-purple.gif";
                          case "Zagreus Sword":
                            return "rings/discord-red.gif";
                          case "Hades":
                            return "rings/discord-pink.gif";
                          case "Arthur":
                            return "rings/discord-blue.gif";
                          case "Zeus":
                            return "rings/discord-yellow.gif";
                          default:
                            return "rings/discord-green.gif";
                        }
                      })()}
                      className="absolute top-0 start-0"
                      size="lg"
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
                    {`Elysium`}
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
                    variant="h6"
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
