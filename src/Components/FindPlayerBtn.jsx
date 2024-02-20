import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import { rawData2 } from "../Data/DataSet2";
import { allData } from "../Data/DataLogic";

const RunTypes = ["Search"];

export default function FindPlayerBtn({ onButtonClick }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const findPlayer = rawData2.filter(
    (run) => run.Player.toLowerCase() === inputValue.toLowerCase()
  );
  allData[35] = findPlayer;

  return (
    <div className="py-8">
      <div className=" w-[400px] mx-auto">
        <Input
          type="gradient"
          color="white"
          label="Name"
          value={inputValue}
          onChange={handleInputChange}
        />

        <div className="flex justify-between mt-2">
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
              variant={onButtonClick(index + 35).variant}
              onClick={onButtonClick(index + 35).onClick}
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
