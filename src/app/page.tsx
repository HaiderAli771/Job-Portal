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
import '../app/globals.css'
export default function Home() {
  return (
    <>



      <Image className=' absolute brightness-50 ' src='/herobackground.png' alt="" width={10000} height={844} />
      <div

        className="relative bg-cover bg-center  backgroundimg  opacity-100 flex flex-col md:gap-14"

      >
        <Header />
        <Hero />
      </div>
      <Recentjobs />
      {/* <Category1 />
      <Information />
      <BetterFuture />
      <Testimonial />
      <News />
      <Footer /> */}
    </>
  );
}
