import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Mumair from "./components/Mumair";

export default function Home() {
  return (
    <main className="flex w-[1920px] h-[5600px] bg-white">
      <Header/>
      <Mumair></Mumair>
    </main>
  );
}
