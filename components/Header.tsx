import React, { useRef } from "react";
import { Disclosure } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/img/force11.png";
import { useQueryState } from 'next-usequerystate'

// To Do import yaml
const HeaderLinks = [
  {
    name: "About",
    href: "/pages/about",
    closedClass: "hidden md:inline",
    openClass: "md:hidden",
  },
  {
    name: "Authors",
    href: "/authors",
    closedClass: "hidden md:inline",
    openClass: "md:hidden",
  },
  {
    name: "Author Guidelines",
    href: "/pages/author-guidelines",
    closedClass: "hidden md:inline",
    openClass: "md:hidden",
  },
];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

const Header = ({ tag }) => {
  const [query, setQuery] = useQueryState('query')

  const inputRef = useRef<HTMLInputElement>(null)

  const onSubmit = () => {
    setQuery(inputRef.current?.value)
    console.log(query)
  }

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSubmit()
    }
  }

  return (
    <Disclosure as="header" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 lg:px-8 lg:divide-y lg:divide-gray-200">
            <div className="relative h-16 flex justify-between">
              <div className="relative z-10 px-2 flex lg:px-0">
                <div className="flex-shrink-0 flex pt-2">
                  <Link href="/" passHref>
                    <a href="dummy" className="text-force-blue border-b-0 flex">
                      <Image
                        className="block h-8 w-auto"
                        src={Logo}
                        alt="Upstream"
                        height={60}
                        width={60}
                      />
                      <span
                        data-cy="sitename"
                        className="text-2xl font-semibold font-sans pl-2 pt-2 hidden md:inline"
                      >
                        Upstream
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="px-2 flex items-center xl:justify-center sm:inset-0">
                {tag && tag.name && 
                  (<div className="sm:max-w-xs md:w-48 lg:w-72">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                        <SearchIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-force-blue focus:border-force-blue sm:text-sm font-sans"
                        placeholder="Search..."
                        type="search"
                        defaultValue=''
                        onSubmit={onSubmit}
                        onKeyDown={onKeyDown}
                        ref={inputRef}
                      />
                    </div>
                  </div>
                )}
              </div>
              <nav
                className="py-5 pl-0 space-x-2 lg:space-x-6 font-semibold block"
                aria-label="Global"
              >
                {HeaderLinks.map((headerLink) => (
                  <>
                    <Link href={headerLink.href} key={headerLink.name} passHref>
                      <a
                        href="dummy"
                        className={
                          "text-force-blue border-b-0 " + headerLink.closedClass
                        }
                      >
                        {headerLink.name}
                      </a>
                    </Link>
                  </>
                ))}
              </nav>
              <div className="relative right-0 flex py-3 md:hidden">
                <Disclosure.Button className="rounded-md p-2 inline-flex text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-force-blue">
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XIcon
                      data-cy="x-icon"
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <MenuIcon
                      data-cy="menu-icon"
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel as="nav" className="lg:hidden z-10" aria-label="Global">
            <div className="px-6 space-y-1">
              <ul className="mt-1 list-none">
                {HeaderLinks.map((headerLink) => (
                  <li key={headerLink.name}>
                    <Link href={headerLink.href} passHref>
                      <a
                        key={headerLink.name}
                        href="dummy"
                        className={
                          "text-force-blue border-b-0 " + headerLink.openClass
                        }
                      >
                        {headerLink.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Header
