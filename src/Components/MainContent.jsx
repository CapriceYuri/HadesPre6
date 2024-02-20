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
import AspectButtons from "./AspectBtns";
import SplitsBtns from "./Splits";
import FindPlayerBtn from "./FindPlayerBtn";
import { getAspectRing } from "../Data/FunctionLogic";
import PageFooter from "./Footer";
import NavigationBar from "./NavigationBar";
import SummaryStat from "./SummaryStat";
import SummaryStatRaw from "./SummaryStatRaw";

console.log(allData[34]);

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
      <div className="fixed bg-[#1B1212] h-lvh w-full object-cover -z-10" />
      <img
        src="bg-img.png"
        alt="cover-bg"
        className="fixed h-lvh w-full object-cover -z-10"
      />
      <NavigationBar />
      <section>
        <div className="flex justify-center px-2 mx-auto w-[100%] pt-10 gap-x-2 2xl:w-3/4">
          <TotalRunsCard />
          <TotalPlayerCard />
        </div>
      </section>
      <section>
        <img src="hades-red.png" className="mx-auto opacity-90" />
      </section>
      <section className="w-full 2xl:w-3/4 flex flex-col xl:flex-row xl:gap-x-2 mx-auto px-4 2xl:px-0">
        <SummaryStat />
        <SummaryStatRaw />
      </section>
      <section className="w-full flex justify-center pb-10">
        <Card className="w-[100%] backdrop-blur-lg bg-transparent shadow-[0_0_20px_white] 2xl:w-3/4 border-4 border-black rounded-2xl">
          <img
            src="vertical-blue.jpg"
            className="h-full w-full object-cover rounded-xl absolute"
          />
          <div className="absolute h-full w-full bg-gradient-to-r from-black to-black opacity-60" />
          <List className="z-40">
            <div className="flex justify-center gap-x-4 pt-4">
              <Button {...handleDataChange(0)} color="white">
                All Runs
              </Button>
              <Button {...handleDataChange(1)} color="white">
                Unique Runs
              </Button>
              <Button {...handleDataChange(34)} color="white">
                Unique Players
              </Button>
            </div>
            <SplitsBtns onButtonClick={handleDataChange} />
            <AspectButtons onButtonClick={handleDataChange} />
            <FindPlayerBtn onButtonClick={handleDataChange} />
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
                <img
                  src="lighting.gif"
                  alt="lightning gif"
                  className="opacity-50"
                />
              </div>
              <Typography
                variant="h3"
                color="yellow"
                className="p-2 text-center font-[monospace]"
              >
                {"HERMES"}
              </Typography>
              <div>
                <img
                  src="lighting.gif"
                  alt="lightning gif"
                  className="opacity-50"
                />
              </div>
            </div>
            {sortDisplay.map((player, index) => (
              <ListItem
                className="hover:bg-black focus:bg-black flex relative rounded-2xl"
                key={index}
              >
                <div
                  className={
                    player.rank < "4"
                      ? "absolute w-full h-full top-0 left-0 rounded-2xl border-2 border-black shadow-[inset_0_0_20px_white]"
                      : ""
                  }
                />
                <div className="text-center">
                  <Typography
                    variant="small"
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
                    variant="small"
                    color="orange"
                    className="font-semibold"
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
                      src={getAspectRing(player.Aspect)}
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
                    {`Hades`}
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
      <PageFooter />
    </section>
  );
}
