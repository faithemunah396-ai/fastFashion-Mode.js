import Image from "next/image";
import {StartButton, GameProvider} from "../shared/components/Fish";
//import { HelpMeButton } from "../shared/components/helpButton";


export default function Home() {
  return (
    <GameProvider>
      <StartButton />
     
    </GameProvider>
    
  );
}