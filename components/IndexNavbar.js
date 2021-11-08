import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <nav className="container mx-auto flex flex-auto items-center justify-between font-sans">
        <div className="pr-4 justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/">
            <a
              className="text-gray-800 text-xl font-bold leading-relaxed inline-block mx-4 py-2 border-b-0 whitespace-no-wrap uppercase"
              href="/"
              data-cy="navbarLink"
            >
              Front Matter
            </a>
          </Link>
        </div>
        <div
          className={
            'lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none block'
          }
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto mt-4">
            <li className="flex items-center">
              <a
                className="hover:text-gray-600 text-gray-800 px-3 py-8 lg:py-2 flex items-center text-xs uppercase font-bold border-b-0"
                href="https://twitter.com/front_matter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="text-gray-500 fab fa-twitter text-lg leading-lg " />
                <span className="lg:hidden inline-block ml-2">Tweet</span>
              </a>
            </li>

            <li className="flex items-center">
              <a
                className="hover:text-gray-600 text-gray-800 px-3 py-8 lg:py-2 flex items-center text-xs uppercase font-bold border-b-0"
                href="https://front-matter.io/feed.xml"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="text-gray-500 fas fa-rss text-lg leading-lg " />
                <span className="lg:hidden inline-block ml-2">Feed</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
