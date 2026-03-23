"use client"
import { useState } from "react";
import ButtonGroups from "../shared/components/DumpMeButton";
import Truck from "../shared/components/Truck";
import ClothesFall from "../shared/components/Clothes";
import InfoCards from "../shared/components/InfoCards";
import Background from "../shared/components/Background";
import WaterTransition from "../shared/components/WaterTransition";
import { HelpMeButton } from "../shared/components/helpButton";
import { StartButton, GameProvider } from "../shared/components/Fish";

export default function Home() {
    const [dump, setDump] = useState(false);
    const [fall, setFall] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);

    function handleDump(){
      setDump(true);
    }

    function handleFall(){
      setFall(true);
    }

    function handleFade(){
      setFadeIn(true);
    }

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      <Background></Background>
      <ButtonGroups onDump={() => { handleDump(); handleFall(); handleFade() }}/>
      <Truck dump={dump}/>
      <ClothesFall fall={fall}/>
      <WaterTransition fadeIn={fadeIn}></WaterTransition>
      <InfoCards></InfoCards>
      <HelpMeButton></HelpMeButton>
      <GameProvider>
        <StartButton />
      </GameProvider>
    </div>
  );
}
