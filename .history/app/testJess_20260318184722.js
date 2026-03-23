import Image from "next/image";
import {StartButton, GameProvider} from "../shared/components/Fish";

export default function Home() {
  return (
    <GameProvider>
      <StartButton />
    </GameProvider>
  );
}