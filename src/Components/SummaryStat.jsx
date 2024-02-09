import {
  List,
  ListItem,
  Card,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { uniqueArrAspect } from "../Data/AvgTimeData";
import { allClearTime } from "../Data/AvgTimeData";
import { getAspectRing } from "../Data/FunctionLogic";

export default function SummaryStat() {
  return (
    <Card
      className="w-full 2xl:w-3/4 mx-auto relative bg-transparent mb-10"
      shadow={false}
    >
      <img
        src="vertical-blue.jpg"
        className="h-full w-full object-cover rounded-2xl absolute opacity-70"
      />
      <List className="z-30">
        <ListItem className="flex justify-between text-center">
          <div className="flex-1">
            <Typography
              variant="small"
              color="amber"
              className="font-customFont font-semibold"
            >
              Aspect
            </Typography>
          </div>
          <div className="flex-1">
            <Typography></Typography>
          </div>
          <div className="flex-1">
            <Typography
              variant="small"
              color="amber"
              className="font-customFont font-semibold"
            >
              Avg Time
            </Typography>
          </div>
          <div className="flex-1">
            <Typography
              variant="small"
              color="amber"
              className="font-customFont font-semibold"
            >
              Run/s
            </Typography>
          </div>
        </ListItem>
        {uniqueArrAspect.map((arr, index) => (
          <ListItem
            className="hover:bg-black focus:bg-black flex justify-evenly"
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
    </Card>
  );
}
