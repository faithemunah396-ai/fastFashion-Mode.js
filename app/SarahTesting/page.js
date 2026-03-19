"use client"
import { useState } from "react";
import ButtonGroups from "../shared/components/ButtonGroups";
import Truck from "../shared/components/Truck";
import ClothesFall from "../shared/components/Clothes";
import InfoCards from "../shared/components/InfoCards";
import Background from "../shared/components/Background";

export default function Home() {
    const [dump, setDump] = useState(false);
    const [fall, setFall] = useState(false);

    function handleDump(){
      setDump(true);
    }

    function handleFall(){
      setFall(true);
    }

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      <Background></Background>
      <ButtonGroups onDump={() => { handleDump(); handleFall(); }}/>
      <Truck dump={dump}/>
      <ClothesFall fall={fall}/>
      <InfoCards></InfoCards>
    </div>
  );
}
