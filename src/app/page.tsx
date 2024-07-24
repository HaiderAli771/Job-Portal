import React from "react";
import Header from "./header";
import Hero from "./hero";
import Recentjobs from "./recentJobs";
import Category1 from "./category";
import Information from "./information";
import BetterFuture from "./betterFuture";
import Testimonial from "./testimonial";
import News from "./news";
import Footer from "./footer";
import "../app/globals.css";
export default function Home() {
  return (
    <>
      <div className="relative bg-cover bg-center  backgroundimg  opacity-100 flex flex-col md:gap-14">
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
