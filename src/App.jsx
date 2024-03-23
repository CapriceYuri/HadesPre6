import MainContent from "./Components/MainContent";
import { inject } from "@vercel/analytics";

inject();

function App() {
  return (
    <>
      <MainContent />
    </>
  );
}

export default App;
