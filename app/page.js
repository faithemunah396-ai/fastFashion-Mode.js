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
    const [fadeIn,setFdeIn] = useState(false);

  const [backgroundVis, setBackgroundVis] = useState("visible");
  const [buttonGroupsVis, setButtonGroupsVis] = useState("visible");
  const [truckVis, setTruckVis] = useState("visible");
  const [clothesFallVis, setClothesFallVis] = useState("visible");
  const [helpMeButtonVis, setHelpMeButtonVis] = useState("hidden");
  const [infoCardsVis, setInfoCardsVis] = useState("visible");
  const [startGameVis, setStartGameVis] = useState("hidden");


    function handleDump(){
      setDump(true);
    }

    function handleFall(){
      setFall(true);
    }

    function handleFade(){
      setFdeIn(true);
    }

  function showBackground() { setBackgroundVis("visible"); }
  function hideBackground() { setBackgroundVis("hidden"); }

  function showButtonGroups() { setButtonGroupsVis("visible"); }
  function hideButtonGroups() { setButtonGroupsVis("hidden"); }

  function showTruck() { setTruckVis("visible"); }
  function hideTruck() { setTruckVis("hidden"); }

  function showClothesFall() { setClothesFallVis("visible"); }
  function hideClothesFall() { setClothesFallVis("hidden"); }

  function showHelpMeButton() { setHelpMeButtonVis("visible"); }
  function hideHelpMeButton() { setHelpMeButtonVis("hidden"); }

  function showInfoCards() { setInfoCardsVis("visible"); }
  function hideInfoCards() { setInfoCardsVis("hidden"); }

  function showStartGame() { setStartGameVis("visible"); }
  function hideStartGame() { setStartGameVis("hidden"); }

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      <GameProvider>
      <Background></Background>
      <div style={{ visibility: `${buttonGroupsVis}`}}>
        <ButtonGroups onDump={() => { handleDump(); handleFall(); handleFade(); showHelpMeButton(); hideButtonGroups(); }}/>
      </div>
    
      <Truck dump={dump}/>
      <ClothesFall fall={fall}/>
      {/* <WaterTransition fadeIn={fadeIn}></WaterTransition> */}
    
      
      <div style={{
        visibility: `${infoCardsVis}`
      }}><InfoCards></InfoCards></div>
      
      <div onClick={() => {
        hideInfoCards()
        showStartGame()
        hideHelpMeButton()
      }} style={{visibility: `${helpMeButtonVis}`}}><HelpMeButton></HelpMeButton></div>
        <div style={{
        visibility: `${startGameVis}`,
      }}><StartButton /></div>
      </GameProvider>
    </div>
  );
}

