import { useState } from "react";
import Link from "next/link";

export default function Navbar(props) {
  const [isExpanded, toggleExpansion] = useState(false);

  const links = [
    { href: "/", name: "Home" },
    { href: "/gallery", name: "Gallery" },
    { href: "/about-us", name: "About Us" },
    { href: "/contact-us", name: "Contact Us" },
  ];

  return (
    <nav className="flex z-10 items-center justify-between flex-wrap bg-gray-900 py-5 px-4 md:px-16 lg:px-24">
      <div className="flex items-center flex-shrink-0 w-48 text-gray-50 text-xl font-bold mr-6">
        <Link href="/">
          <a>
            <h2>KJ CONTRACTING</h2>
          </a>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 text-gray-50 hover:text-gray-300 focus:outline-none"
          name="expand navbar"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${isExpanded ? `block` : `hidden`
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-lg flex-grow lg:flex lg:justify-center">
          {links.map((link, index) => {
            return (
              <Link key={link.href + index} href={link.href}>
                <a
                  className={`block mt-4 mx-8 lg:inline-block lg:mt-0 hover:text-yellow-400 ${link.name === props.page
                    ? "text-yellow-400"
                    : "text-gray-50"
                    }`}
                >
                  {link.name}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
