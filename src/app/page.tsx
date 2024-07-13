import Header from "./Header";
import Hero from './Hero'
import { useRouter } from 'next/router';
import Recentjobs from "./recentjobs";
import Category1 from "./category"
import Information from "./Information";
import BetterFuture from "./betterfuture";
import Testimonial from "./testimonial";
import News from "./news";
import Footer from "./Footer";
import Image from "next/image";
export default function Home() {
  return (
    <>



      <Image className=' absolute h-[700px] brightness-50 ' src='/herobackground.png' alt="" width={10000} height={700} />
      <div
        className="relative h-screen bg-cover bg-center  opacity-100 flex flex-col gap-[100px]"

      >
        <Header />
        <Hero />
      </div>
      <Recentjobs />
      <Category1 />
      <Information />
      <BetterFuture />
      <Testimonial />
      <News />
      <Footer />
    </>
  );
}
