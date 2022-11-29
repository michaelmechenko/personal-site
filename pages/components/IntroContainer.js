import React from "react";
import Image from "next/image";
import chipcat from "../cats/chip-cat.png";

export default function IntroContainer() {
  return (
    <section class="text-gray-400 pt-8 pb-8">
      <div class="container flex mx-auto justify-center space-x-4 w-4/6 border-red-50 border-dashed">
        <div className="w-96 h-auto">
          <Image src={chipcat} alt="chip cat" className="rounded-md" />
        </div>
        <div class="text-left w-full ">
          <h1 class="text-3xl text-white">Hey there, I'm Michael!</h1>
          <p>
            No, that beautiful cat is unfortunately not my own, but oh how I
            wish it was. My cat's a domestic-shorthair and bengal mix who's far
            too afraid of strangers to ever make eye contact, but I love that
            little rascal to death. Anywho, enough about my cat. I'm a New York
            City native who loves to cook, and I'm currently studying Combined
            Computer Science and Computer Engineering at Northeastern
            University!
          </p>
        </div>
      </div>
    </section>
  );
}
