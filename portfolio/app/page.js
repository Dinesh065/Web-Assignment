import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Mumair from "./components/Mumair";
import About from "./components/About";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="flex w-[1920px] h-[5600px] bg-white">
      <Header/>
      <Mumair></Mumair>
      <About></About>
      <Services></Services>
    </main>
  );
}
