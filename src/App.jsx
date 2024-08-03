
import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";



function App() {

  let [isGameStarted, setIsGameStarted] = useState(false);

  let toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  }


  return (
    <>
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
    </>
  );
};

export default App;

