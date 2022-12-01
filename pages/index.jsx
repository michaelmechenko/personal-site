import React, { useState } from "react";
import Head from "next/head";
import Navbar from "./components/Navbar";
import IntroContainer from "./components/IntroContainer";
import Footer from "./components/Footer";
import History from "./components/History";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>website in dev</title>
        <meta name="description" content="michael's personal website" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
      </Head>

        <main className="main-wrapper w-full h-full">
            <Navbar />
            <IntroContainer />
            <Projects />
            <History />
            <Contact />
        </main>
      {/* <Footer></Footer> */}
    </>
  );
}
