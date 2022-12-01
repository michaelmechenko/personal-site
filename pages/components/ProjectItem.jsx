import React from "react";
import Image from "next/image";

export default function ProjectItem({ title, imgUrl, stack, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-white rounded-sm border-opacity-75"
      // eslint-disable-next-line react/jsx-no-comment-textnodes
    >
      <Image src={imgUrl} alt="cat" width={800} height={800} />
      <div className="p-4 mx-auto">
        <h3 className="text-xl text-white text-center font-semibold mb-2 mx-auto">
          {title}
        </h3>
        <div className="items-center text-center flex flex-row">
          <p className="flex flex-wrap gap-5 flex-row mx-auto justify-start text-s text-white">
            {stack.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <span className="inline-block px-2 py-1 items-centerfont-semibold border-2 border-white rounded-md">
                {item}
              </span>
            ))}
          </p>
        </div>
      </div>
    </a>
  );
}
