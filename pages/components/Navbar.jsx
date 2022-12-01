import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar bg-zinc-900 px-2" data-theme="main">
      <div className="flex-1">
        <a className="btn btn-ghost no-animation normal-case rounded-sm text-l">
          created by{" "}
          <a href="#" className="ml-1">
            michael mechenko
          </a>
        </a>
      </div>
      <div className="flex-none text-white">
        <ul className="menu menu-horizontal space-x-0">
          <li>
            <a>about me</a>
          </li>
          <li>
            <a>projects</a>
          </li>
          <li>
            <a>history</a>
          </li>
          <li>
            <a>github</a>
          </li>
          <li>
            <a>contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
