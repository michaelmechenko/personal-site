import React from "react";
import { BiGhost } from "react-icons/bi";
import { GoMarkGithub, GoMail } from "react-icons/go";

export default function Footer() {
  return (
    <footer className="footer px-10 py-4 bg-zinc-900 text-white fixed bottom-0 left-0 flex flex-row content-center">
      <div className="flex flex-row content-center">
        <div>
          <BiGhost className="text-4xl" />
          <p>
            michael mechenko
            <br />
            nov 2022
          </p>
        </div>
        <div>
          <span className="footer-title lowercase text-lg">contact</span>
          <div className="grid grid-flow-col gap-4">
            <a>
              <GoMail className="text-2xl" />
            </a>
            <a>
              <GoMarkGithub className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
