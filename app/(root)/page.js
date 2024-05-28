import Image from "next/image";
import Hero from "@/components/Hero";
import Game from "@/components/Game";
import JoyStick from "@/components/JoyStick";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Game />
      <JoyStick />
    </div>
  );
}
