import { Button } from "@material-tailwind/react";

const SplitsBtns = ({ onButtonClick }) => {
  const splits = ["Tartarus", "Asphodel", "Elysium", "Styx", "Dad"];
  const buttonNumbers = [29, 30, 31, 32, 33];
  const buttonColors = ["green", "deep-orange", "blue", "pink", "yellow"];

  return (
    <div className="flex justify-center gap-2 pt-4">
      {buttonNumbers.map((num, index) => (
        <Button
          key={index}
          variant={onButtonClick(num).variant}
          onClick={onButtonClick(num).onClick}
          color={buttonColors[index]}
        >
          {`${splits[index]}`}
        </Button>
      ))}
    </div>
  );
};

export default SplitsBtns;
