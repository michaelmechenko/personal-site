import React from "react";
import { BiGhost } from "react-icons/bi";
import { GoMarkGithub, GoMail } from "react-icons/go";

export default function Footer() {
  return (
    <footer className="footer px-3 py-2 bg-zinc-900 text-white bottom-0 left-0">
      <div className="flex flex-row">
        <a href="https://github.com/michaelmechenko">
          <GoMarkGithub className="text-md text-gray-500" />
        </a>
        <div className="text-sm -my-1 text-gray-500">michael mechenko - nov 2022</div>
      </div>
    </footer>
  );
}
