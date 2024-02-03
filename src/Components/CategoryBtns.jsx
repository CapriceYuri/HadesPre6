import { Button } from "@material-tailwind/react";

const HistoryButtons = ({ onButtonClick }) => {
  const buttonNumbers = [2, 3, 4];
  const buttonColors = ["pink", "cyan", "light-green"];

  return (
    <div className="flex justify-center gap-x-4 pt-4">
      {buttonNumbers.map((num, index) => (
        <Button
          key={index}
          variant={onButtonClick(num).variant}
          onClick={onButtonClick(num).onClick}
          color={buttonColors[index]}
        >
          {`#${index + 1} History`}
        </Button>
      ))}
    </div>
  );
};

export default HistoryButtons;
