import React from "react";
import TimelineItem from "./TimelineItem";
import timeline from "../data/timeline";
import education from "../data/education";

export default function Timeline() {
  return (
    <div id="timeline" className="flex flex-col md:flex-row justify-center my-20">
      <div className="lg:w-1/3 md:w-2/3">
      <div className="mx-auto text-3xl underline text-orange-300 text-center">timeline</div>
      <div className="mx-auto text-2xl font-semibold text-zinc-100 px-4 py-6">education</div>
      {education.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <TimelineItem
            year={item.year}
            title={item.title}
            duration={item.duration}
            location={item.location}
            details={item.details}
          />
        ))}
        <div className="mx-auto text-2xl font-semibold text-zinc-100 px-4 py-6">work experience</div>
        {timeline.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <TimelineItem
            year={item.year}
            title={item.title}
            duration={item.duration}
            location={item.location}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
}
