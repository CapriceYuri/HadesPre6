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
    <Card className="relative bg-transparent mb-5 shadow-[0_0_20px_white] border-4 border-black rounded-2xl flex-1 w-full xl:w-1/2">
      <video
        src="vid2.mp4"
        className="h-full w-full absolute object-cover opacity-70 rounded-xl"
        muted
        autoPlay
        loop
      ></video>
      <div className="absolute h-full w-full bg-gradient-to-b to-black from-black rounded-xl opacity-80" />

      <section className="z-20 flex justify-evenly pt-4">
        <div>
          <Typography color="white" className="font-customFont" variant="h5">
            Unique Runs Avg Time
          </Typography>
        </div>
      </section>
      <Carousel className="px-18 py-5" loop={true} autoplay={false}>
        {bundleUnique.map((uniqueArr, index) => (
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

                <div className="flex-1 relative mx-auto text-center">
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
