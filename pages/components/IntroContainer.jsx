import React from "react";
import Image from "next/image";
import chipcat from "../cats/chip-cat.png";

export default function IntroContainer() {
  return (
    <section id="intro" className="flex flex-col mx-auto p-8">
      <div className="image-container flex flex-col">
        <div className="lg:w-1/5 md:w-1/2 sm:w-2/3 justify-center mx-auto">
          <Image src={chipcat} alt="chip cat" className="main-image" />
        </div>
        <div className="flex flex-col lg:w-1/2 md:w-2/3 sm:w-2/3 justify-center mx-auto pt-6">
          <h1 className="text-3xl flex flex-wrap mx-auto">
            hey there, i&#39;m&nbsp;
            <div className="underline flex text-orange-300">michael</div>
          </h1>
          <p className="text-white text-l pt-4 w-2/3 mx-auto">
            - no, that beautiful cat is unfortunately not my own, but my oh my
            isn&#39;t that the cutest picture you&#39;ve seen all week? my
            name&#39;s michael and i&#39;m a student studying computer science
            and computer engineering at northeastern university. welcome to my
            home page! i&#39;m currently working on a ton of projects, so stay
            tuned for updates
          </p>
          <p className="text-white text-l pt-2 w-2/3 mx-auto">
            - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus in
            hendrerit gravida rutrum quisque non tellus orci. Eget nunc lobortis
            mattis aliquam faucibus purus in massa. Diam sit amet nisl suscipit
            adipiscing bibendum est ultricies. 
          </p>
        </div>
      </div>
    </section>
  );
}
