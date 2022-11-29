import React from "react";
import { BiChevronsDown } from "react-icons/bi";

export default function Navbar() {
  return (
    <nav className="navbar bg-zinc-900 px-2">
      <div className="flex-1">
        <a className="btn btn-ghost no-animation normal-case rounded-sm text-l">
          created by <a href="#" className="ml-1">michael mechenko</a>
        </a>
      </div>
      <div className="flex-none text-white">
        <ul className="menu menu-horizontal space-x-0">
          <li>
            <a>about me</a>
          </li>
          <li tabIndex={0}>
            <a>
              projects <BiChevronsDown className="mt-1 ml-1 w-4"></BiChevronsDown>
            </a>
            <ul className="bg-zinc-900">
              <li>
                <a>
                  menu item 1
                </a>
              </li>
              <li>
                <a>
                  menu item 2
                </a>
              </li>
              <li>
                <a>
                  menu item 3
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a>github</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
