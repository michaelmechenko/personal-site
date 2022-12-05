import React from "react";
import { Link, handleSetActive } from "react-scroll";

export default function Navbar() {

  return (
    <nav className="navbar bg-zinc-900 px-2" data-theme="main">
      <div className="flex-1">
        <a className="btn btn-ghost no-animation normal-case rounded-sm text-l">
          created by <a className="ml-1">michael mechenko</a>
        </a>
      </div>
      <div className="flex-none text-white">
        <ul className="menu menu-horizontal space-x-0">
          <li>
            <a href="https://github.com/michaelmechenko" target="_blank" rel="noopener noreferrer">github</a>
          </li>
          <li>
            <Link
              to="intro"
              spy={true}
              smooth={true}
              offset={-5}
              duration={500}
              // onSetActive={this.handleSetActive}
            >
              about me
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-5}
              duration={500}
              // onSetActive={this.handleSetActive}
            >
              projects
            </Link>
          </li>
          <li>
            <Link
              to="timeline"
              spy={true}
              smooth={true}
              offset={-5}
              duration={500}
              // onSetActive={this.handleSetActive}
            >
              timeline
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-5}
              duration={500}
              // onSetActive={this.handleSetActive}
            >
              contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
