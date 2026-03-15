"use client"
import { useState } from "react";
import ButtonGroups from "../shared/components/ButtonGroups";
import Truck from "../shared/components/Truck";

export default function Home() {
    const [dump, setDump] = useState(false);

    function handleDump(){
      setDump(true);
    }

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      <ButtonGroups onDump={handleDump}/>
      <Truck dump={dump}/>
    </div>
  );
}
