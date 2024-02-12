import {
  List,
  ListItem,
  Card,
  Typography,
  Avatar,
  Carousel,
} from "@material-tailwind/react";
import {
  uniqueArrAspect,
  uniqueArrAspect1,
  uniqueArrAspect2,
  uniqueArrAspect3,
  uniqueArrAspect4,
  uniqueArrAspect5,
} from "../Data/AvgTimeData";
import { allClearTime } from "../Data/AvgTimeData";
import { getAspectRing } from "../Data/FunctionLogic";

const bundleUnique = [
  uniqueArrAspect,
  uniqueArrAspect1,
  uniqueArrAspect2,
  uniqueArrAspect3,
  uniqueArrAspect4,
  uniqueArrAspect5,
];

export default function SummaryStat() {
  return (
    <Card
      className="w-full 2xl:w-3/4 mx-auto relative bg-transparent mb-10 shadow-[0_0_50px_teal]"
      shadow={false}
    >
      {/* <img
        src="vertical-blue.jpg"
        className="h-full w-full object-cover rounded-2xl absolute opacity-60"
      /> */}
      <video
        src="vid2.mp4"
        className="h-full w-full absolute object-cover opacity-50 rounded-2xl"
        muted
        autoPlay
        loop
      ></video>
      <div className="absolute h-full w-full bg-gradient-to-b to-indigo-500 via-black from-cyan-600 rounded-xl opacity-60" />

      <section className="z-20 flex justify-evenly py-4">
        <div>
          <Typography color="white" className="customFont" variant="h5">
            Unique Runs Avg Time
          </Typography>
        </div>
      </section>
      <Carousel className="px-18 py-5" loop={true} autoplay={false}>
        {bundleUnique.map((uniqueArr) => (
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
