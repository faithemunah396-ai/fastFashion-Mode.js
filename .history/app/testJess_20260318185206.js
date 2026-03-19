import Image from "next/image";
import {StartButton, GameProvider} from "../shared/components/Fish";
import { HelpMeButton } from "../shared/helpButton";


export default function Home() {
  return (
    <GameProvider>
      <StartButton />
      <HelpMeButton />
    </GameProvider>
    
  );
}