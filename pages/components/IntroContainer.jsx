import React from "react";
import Image from "next/image";
import chipcat from "../cats/chip-cat.png";

export default function IntroContainer() {
  return (
    <section className="intro-container pt-8 pb-8">
      <div className="image-container flex mx-auto justify-center space-x-4 w-5/6 h-full">
        <div className="w-1/4 h-auto">
          <Image src={chipcat} alt="chip cat" className="main-image" />
        </div>
        <div className="text-left w-1/4">
          <h1 className="text-3xl flex flex-wrap">hey there, i'm&nbsp;<div className="underline flex text-orange-300">michael</div></h1>
          <p className="text-white text-xl pt-1">
            no, that beautiful cat is unfortunately not my own, but my oh my isn't 
            that the cutest picture you've seen all week? my name's michael and i'm a 
            student studying computer science and computer engineering at northeastern university.
            welcome to my home page! i'm currently working on a ton of projects, so stay tuned for updates
          </p>
        </div>
      </div>
    </section>
  );
}
