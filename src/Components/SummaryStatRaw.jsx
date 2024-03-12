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
      className="relative bg-transparent mb-5 border-4 border-black rounded-2xl flex-1 w-full xl:w-1/2"
      shadow={false}
    >
      <div className="absolute h-full w-full bg-[#28282b] rounded-xl opacity-90" />

      <section className="z-20 flex justify-evenly pt-4">
        <div>
          <Typography color="white" className="font-customFont" variant="h5">
            Full Runs Avg Time
          </Typography>
        </div>
      </section>
      <Carousel className="px-18 py-5" loop={true} autoplay={false}>
        {bundleRaw.map((uniqueArr, index) => (
          <List className="z-20" key={index}>
            {uniqueArr.map((arr, index) => (
              <ListItem
                className="hover:bg-transparent focus:bg-transparent flex justify-evenly"
                key={index}
              >
                <div className="flex-1 text-center">
                  <Typography
                    variant="h6"
                    color="white"
                    className="font-customFont font-semibold"
                  >
                    {arr[0].Aspect}
                  </Typography>
                </div>

                <div className="flex-1 relative text-center">
                  <Avatar
                    src={`arms/${arr[0].Aspect}.png`}
                    withBorder={true}
                    size="lg"
                  />
                  <Avatar
                    src={getAspectRing(arr[0].Aspect)}
                    className="absolute top-0 start-50 transform -translate-x-full"
                    size="lg"
                  />
                </div>
                <div className="flex-1 text-center">
                  <Typography
                    variant="h5"
                    color="amber"
                    className="font-customFont font-semibold"
                  >
                    {allClearTime(arr)}
                  </Typography>
                </div>
                <div className="flex-1 text-center">
                  <Typography
                    variant="h5"
                    color="white"
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
