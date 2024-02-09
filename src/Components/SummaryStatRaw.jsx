import {
  List,
  ListItem,
  Card,
  Typography,
  Avatar,
  Carousel,
} from "@material-tailwind/react";
import {
  uniqueArrAspectRaw,
  uniqueArrAspectRaw2,
  uniqueArrAspectRaw3,
  uniqueArrAspectRaw4,
  uniqueArrAspectRaw5,
  uniqueArrAspectRaw6,
} from "../Data/AvgTimeDataRaw";
import { allClearTime } from "../Data/AvgTimeDataRaw";
import { getAspectRing } from "../Data/FunctionLogic";

const bundleRaw = [
  uniqueArrAspectRaw,
  uniqueArrAspectRaw2,
  uniqueArrAspectRaw3,
  uniqueArrAspectRaw4,
  uniqueArrAspectRaw5,
  uniqueArrAspectRaw6,
];

export default function SummaryStatRaw() {
  return (
    <Card
      className="w-full 2xl:w-3/4 mx-auto relative bg-transparent mb-10 shadow-[0_0_50px_teal]"
      shadow={false}
    >
      <img
        src="vertical-blue.jpg"
        className="h-full w-full object-cover rounded-2xl absolute opacity-60"
      />
      <div className="absolute h-full w-full bg-gradient-to-b from-indigo-500 via-black to-purple-800 rounded-xl opacity-60" />

      <section className="z-20 flex justify-evenly py-4">
        <div>
          <Typography color="white" className="customFont" variant="h5">
            Full Runs Avg Time
          </Typography>
        </div>
      </section>
      <Carousel className="px-18 py-5" loop={true} autoplay={true}>
        {bundleRaw.map((uniqueArr) => (
          <List className="z-20">
            {uniqueArr.map((arr, index) => (
              <ListItem
                className="hover:bg-transparent focus:bg-transparent flex justify-evenly"
                key={index}
              >
                <div className="flex-1">
                  <Typography
                    variant="h6"
                    color="white"
                    className="font-customFont font-semibold"
                  >
                    {arr[0].Aspect}
                  </Typography>
                </div>

                <div className="flex-1 relative ms-6">
                  <Avatar
                    src={`arms/${arr[0].Aspect}.png`}
                    withBorder={true}
                    size="lg"
                  />
                  <Avatar
                    src={getAspectRing(arr[0].Aspect)}
                    className="absolute top-0 start-0"
                    size="lg"
                  />
                </div>
                <div className="flex-1 text-center">
                  <Typography
                    variant="h5"
                    color="yellow"
                    className="font-customFont font-semibold"
                  >
                    {allClearTime(arr)}
                  </Typography>
                </div>
                <div className="flex-1 text-center">
                  <Typography
                    variant="h5"
                    color="deep-orange"
                    className="font-customFont font-bold"
                  >
                    {arr.length}
                  </Typography>
                </div>
              </ListItem>
            ))}
          </List>
        ))}
      </Carousel>
    </Card>
  );
}
