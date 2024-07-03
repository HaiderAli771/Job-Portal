import Image from "next/image";
import Header from "./Header";
import Hero from './Hero'
export default function Home() {
  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center  opacity-100 flex flex-col gap-[100px]"
        style={{ backgroundImage: 'url(/herobackground.png)' }}
      >
        <Header />
        <Hero />
      </div>
    </>
  );
}
