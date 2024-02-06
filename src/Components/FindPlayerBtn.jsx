import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import { rawData2 } from "../Data/DataSet2";
import { allData } from "../Data/DataLogic";

const RunTypes = ["Find Player"];

export default function FindPlayerBtn({ onButtonClick }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const findPlayer = rawData2.filter(
    (run) => run.Player.toLowerCase() === inputValue.toLowerCase()
  );
  allData[34] = findPlayer;

  return (
    <div className="flex justify-center p-4">
      <div>
        <div className="w-[400px]">
          <Input
            type="gradient"
            color="white"
            label="Name"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex justify-start mt-1">
          <Button
            variant="gradient"
            color="black"
            className="w-[100px]"
            onClick={() => {
              onButtonClick(0).onClick();
              setInputValue("");
            }}
          >
            Reset
          </Button>

          {RunTypes.map((num, index) => (
            <Button
              key={index}
              variant={onButtonClick(index + 34).variant}
              onClick={onButtonClick(index + 34).onClick}
              color="white"
              className="w-[100px]"
            >
              {num}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
