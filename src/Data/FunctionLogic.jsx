export const getAspectRing = (aspect) => {
  switch (aspect) {
    case "Beowulf":
      return "rings/discord-red.gif";
    case "Hera":
      return "rings/discord-purple.gif";
    case "Achilles":
      return "rings/discord-yellow.gif";
    case "Eris":
      return "rings/discord-darkblue.gif";
    case "Hestia":
      return "rings/discord-pink.gif";
    case "Rama":
      return "rings/discord-blue.gif";
    case "Zagreus Spear":
      return "rings/discord-purple.gif";
    case "Nemesis":
      return "rings/discord-violet.gif";
    case "Demeter":
      return "rings/discord-green.gif";
    case "Lucifer":
      return "rings/discord-yellow.gif";
    case "Gilgamesh":
      return "rings/discord-pink.gif";
    case "Zagreus Rail":
      return "rings/discord-yellow.gif";
    case "Chaos":
      return "rings/discord-purple.gif";
    case "Zagreus Fists":
      return "rings/discord-pink.gif";
    case "Zagreus Shield":
      return "rings/discord-orange.gif";
    case "GuanYu":
      return "rings/discord-red.gif";
    case "Chiron":
      return "rings/discord-yellow.gif";
    case "Poseidon":
      return "rings/discord-green.gif";
    case "Zagreus Bow":
      return "rings/discord-blue.gif";
    case "Talos":
      return "rings/discord-purple.gif";
    case "Zagreus Sword":
      return "rings/discord-red.gif";
    case "Hades":
      return "rings/discord-pink.gif";
    case "Arthur":
      return "rings/discord-blue.gif";
    case "Zeus":
      return "rings/discord-yellow.gif";
    default:
      return "rings/discord-green.gif";
  }
};

export const useAvatarBorder = (aspect) => {
  switch (aspect) {
    case "Beowulf":
      return "red";
    case "Hera":
      return "purple";
    case "Achilles":
      return "yellow";
    case "Eris":
      return "blue";
    case "Hestia":
      return "pink";
    case "Rama":
      return "blue";
    case "Nemesis":
      return "cyan";
    case "Demeter":
      return "light-green";
    case "Lucifer":
      return "yellow";
    case "Gilgamesh":
      return "pink";
    case "Chaos":
      return "purple";
    case "Guan Yu":
      return "deep-orange";
    case "Chiron":
      return "yellow";
    case "Poseidon":
      return "green";
    case "Talos":
      return "purple";
    case "Hades":
      return "pink";
    case "Arthur":
      return "blue";
    case "Zeus":
      return "yellow";
    default:
      return "teal";
  }
};
