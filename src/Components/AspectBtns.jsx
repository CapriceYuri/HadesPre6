import { Button } from "@material-tailwind/react";

const AspectButtons = ({ onButtonClick }) => {
  const aspects = [
    "Zagreus Sword",
    "Nemesis",
    "Poseidon",
    "Arthur",
    "Zagreus Spear",
    "Achilles",
    "Hades",
    "Guan Yu",
    "Zagreus Shield",
    "Chaos",
    "Zeus",
    "Beowulf",
    "Zagreus Bow",
    "Chiron",
    "Hera",
    "Rama",
    "Zagreus Fists",
    "Talos",
    "Demeter",
    "Gilgamesh",
    "Zagreus Rail",
    "Eris",
    "Hestia",
    "Lucifer",
  ];
  const buttonNumbers = [
    5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28,
  ];
  const buttonColors = "amber";

  return (
    <div className="grid grid-cols-4 gap-2 pt-4">
      {buttonNumbers.map((num, index) => (
        <Button
          key={index}
          variant={onButtonClick(num).variant}
          onClick={onButtonClick(num).onClick}
          color={buttonColors}
          className="text-center w-full lg:w-1/2 mx-auto py-4 px-2"
        >
          {`${aspects[index]}`}
        </Button>
      ))}
    </div>
  );
};

export default AspectButtons;
