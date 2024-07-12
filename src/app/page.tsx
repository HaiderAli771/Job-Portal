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
