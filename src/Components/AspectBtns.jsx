import { Button } from "@material-tailwind/react";

const AspectButtons = ({ onButtonClick }) => {
  const aspects = ["Z-Sword", "Nemesis", "Poseidon", "Arthur"];
  const aspects1 = ["Z-Spear", "Achilles", "Hades", "Guan Yu"];
  const aspects2 = ["Z-Shield", "Chaos", "Zeus", "Beowulf"];
  const aspects3 = ["Z-Bow", "Chiron", "Hera", "Rama"];
  const aspects4 = ["Z-Fists", "Talos", "Demeter", "Gilgamesh"];
  const aspects5 = ["Z-Rail", "Eris", "Hestia", "Lucifer"];

  const buttonNumbers = [5, 6, 7, 8];
  const buttonNumbers1 = [9, 10, 11, 12];
  const buttonNumbers2 = [13, 14, 15, 16];
  const buttonNumbers3 = [17, 18, 19, 20];
  const buttonNumbers4 = [21, 22, 23, 24];
  const buttonNumbers5 = [25, 26, 27, 28];

  return (
    <div className="grid grid-cols-3 md:grid-cols-6">
      <div className="grid grid-cols-1 place-items-center gap-2 p-2">
        {buttonNumbers.map((num, index) => (
          <Button
            key={index}
            variant={onButtonClick(num).variant}
            onClick={onButtonClick(num).onClick}
            color="white"
            className="w-[120px] p-3"
          >
            {`${aspects[index]}`}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 place-items-center gap-2 p-2">
        {buttonNumbers1.map((num, index) => (
          <Button
            key={index}
            variant={onButtonClick(num).variant}
            onClick={onButtonClick(num).onClick}
            color="white"
            className="w-[120px] p-3"
          >
            {`${aspects1[index]}`}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 place-items-center gap-2 p-2">
        {buttonNumbers2.map((num, index) => (
          <Button
            key={index}
            variant={onButtonClick(num).variant}
            onClick={onButtonClick(num).onClick}
            color="white"
            className="w-[120px] p-3"
          >
            {`${aspects2[index]}`}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 place-items-center gap-2 p-2">
        {buttonNumbers3.map((num, index) => (
          <Button
            key={index}
            variant={onButtonClick(num).variant}
            onClick={onButtonClick(num).onClick}
            color="white"
            className="w-[120px] p-3"
          >
            {`${aspects3[index]}`}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 place-items-center gap-2 p-2">
        {buttonNumbers4.map((num, index) => (
          <Button
            key={index}
            variant={onButtonClick(num).variant}
            onClick={onButtonClick(num).onClick}
            color="white"
            className="w-[120px] p-3"
          >
            {`${aspects4[index]}`}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 place-items-center gap-2 p-2">
        {buttonNumbers5.map((num, index) => (
          <Button
            key={index}
            variant={onButtonClick(num).variant}
            onClick={onButtonClick(num).onClick}
            color="white"
            className="w-[120px] p-3"
          >
            {`${aspects5[index]}`}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default AspectButtons;
