import React from "react";

export default function TimelineItem({
  year,
  title,
  duration,
  location,
  details,
}) {
  const detailsDiv = () => {
    const data = [];
    for (let i = 0; i < details.length; i++) {
      data.push(<div className="text-zinc-200 text-md">~ {details[i]}</div>);
    }
    return data;
  };

  return (
    <ol className="flex flex-col relative border-l border-stone-700">
      <li className="mb-10 ml-4">
        <div
          className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5
         -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700"
        ></div>
        <p
          className="flex flex-wrap gap-4 flex-row items-center justify-start
         text-xs md:text-sm"
        >
          <span
            className="inline-block px-2 py-1 font-semibold bg-zinc-200 
          text-stone-600 rounded-md"
          >
            {year}
          </span>
          <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
            {location}
          </h3>
          <div className="my-1 text-sm font-normal leading-none text-stone-400">
            {duration}
          </div>
        </p>
        <div className="my-1 text-md font-semibold leading-none pt-2 pb-1 text-zinc-300 opacity-50">
          {title}
        </div>
        <div>{detailsDiv()}</div>
      </li>
    </ol>
  );
}
