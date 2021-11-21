import React, { createElement, Fragment, useEffect, useRef } from "react";
import { render } from "react-dom";
import { autocomplete } from "@algolia/autocomplete-js";
import { Disclosure } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/img/force11.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ tags, tag, author }) {
  return (
    <Disclosure as="header" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
            <div className="relative h-16 flex justify-between">
              <div className="relative z-10 px-2 flex lg:px-0">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/" passHref>
                    <a href="dummy" className="text-force-blue border-b-0 flex">
                      <Image
                        className="block lg:hidden h-8 w-auto"
                        src={logo}
                        alt="Upstream"
                        height={63}
                        width={78}
                      />
                      <span className="text-2xl font-semibold font-sans pl-1 pt-4">
                        Upstream
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
              {/*<div className="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
                <div className="w-full sm:max-w-xs">
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
                      placeholder="Search coming soon..."
                      type="search"
                    />
                  </div>
                </div>
              </div> */}
              <nav
                className="py-6 space-x-6 font-semibold lg:block"
                aria-label="Global"
              >
                <Link href="/pages/about" passHref>
                  <a
                    key="About"
                    href="dummy"
                    className="text-force-blue border-b-0"
                  >
                    About
                  </a>
                </Link>
                <Link href="/pages/author-guidelines" passHref>
                  <a
                    key="Author Guidelines"
                    href="dummy"
                    className="text-force-blue border-b-0"
                  >
                    Author Guidelines
                  </a>
                </Link>
                <Link href="/pages/upstream-community" passHref>
                  <a
                    key="Upstream Community"
                    href="dummy"
                    className="text-force-blue border-b-0"
                  >
                    Upstream Community
                  </a>
                </Link>
                <Link href="/pages/code-of-conduct" passHref>
                  <a
                    key="Code of Conduct"
                    href="dummy"
                    className="text-force-blue border-b-0"
                  >
                    Code of Conduct
                  </a>
                </Link>
              </nav>
              <div className="relative z-10 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
            {tags && (
              <div className="pt-2 pb-3 px-2 space-y-1">
                {tags.map((item) => (
                  <a
                    key={item.name}
                    href={"/categories/" + item.slug}
                    className={classNames(
                      item.slug == tag.slug
                        ? "text-gray-600 font-semibold"
                        : "text-blue-400 hover:text-green-500",
                      "block py-2 px-3 text-base font-medium border-b-0"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export function Autocomplete(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }
    const search = autocomplete({
      container: containerRef.current,
      renderer: { createElement, Fragment },
      render({ children }, root) {
        render(children, root);
      },
      ...props,
    });

    return () => {
      search.destroy();
    };
  }, [props]);

  return <div ref={containerRef} />;
}
