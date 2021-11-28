import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRss, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faDiscourse,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const footerLinks = [
    { name: "FORCE11" },
    { name: "Community" },
    { name: "Upstream" },
    { name: "Contact Us" },
  ];

  return (
    <footer className="bg-gray-200" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-6 lg:py-8 flex flex-auto items-center justify-between font-sans">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-8 xl:mt-0">
          <div className="mx-4 md:mx-auto mt-2 md:mt-0">
            <h3 className="text-base font-semibold text-gray-400 tracking-wider uppercase">
              {footerLinks[0]["name"]}
            </h3>
            <ul className="mt-1 list-none">
              <li>
                <Link href="https://www.force11.org/about" passHref>
                  <a
                    href="dummy"
                    className="text-sm border-b-0 text-gray-500 hover:text-gray-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Overview
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.force11.org/about/manifesto" passHref>
                  <a
                    href="dummy"
                    className="text-sm border-b-0 text-gray-500 hover:text-gray-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Manifesto
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.force11.org/about/mission-and-guiding-principles"
                  passHref
                >
                  <a
                    href="dummy"
                    className="text-sm border-b-0 text-gray-500 hover:text-gray-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Guiding Principles
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.force11.org/about/endorsement-policy"
                  passHref
                >
                  <a
                    href="dummy"
                    className="text-sm border-b-0 text-gray-500 hover:text-gray-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Endorsement Policy
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.force11.org/about/support" passHref>
                  <a
                    href="dummy"
                    className="text-sm border-b-0 text-gray-500 hover:text-gray-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sustainability Plan
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mx-4 md:mx-auto mt-2 md:mt-0">
            <h3 className="text-base font-semibold text-gray-400 tracking-wider uppercase">
              {footerLinks[1]["name"]}
            </h3>
            <ul className="mt-1 list-none">
              <li>
                <Link href="https://www.force11.org/community-news" passHref>
                  <a
                    href="dummy"
                    className="text-sm border-b-0 text-gray-500 hover:text-gray-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    News
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.force11.org/community/members-directory"
                  passHref
                >
                  <a
                    href="dummy"
                    className="text-sm border-b-0 text-gray-500 hover:text-gray-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Members Directory
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.force11.org/groups" passHref>
                  <a
                    href="dummy"
                    className="text-sm border-b-0 text-gray-500 hover:text-gray-400"
                  >
                    Groups (active)
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mx-4 md:mx-auto mt-2 md:mt-0">
            <h3
              data-cy="upstream-column"
              className="text-base font-semibold text-gray-400 tracking-wider uppercase"
            >
              {footerLinks[2]["name"]}
            </h3>
            <ul className="mt-1 list-none">
              <li>
                <Link href="/team" passHref>
                  <a
                    href="dummy"
                    className="text-sm border-b-0 text-gray-500 hover:text-gray-400"
                  >
                    Team Upstream
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/open-source" passHref>
                  <a
                    href="dummy"
                    className="text-sm border-b-0 text-gray-500 hover:text-gray-400"
                  >
                    Open Source Software
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://plausible.io/upstream.force11.org" passHref>
                  <a
                    href="dummy"
                    className="text-sm border-b-0 text-gray-500 hover:text-gray-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Usage Stats
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mx-4 md:mx-auto mt-2 md:mt-0">
            <h3 className="text-base font-semibold text-gray-400 tracking-wider uppercase">
              {footerLinks[3]["name"]}
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              FORCE11
              <br />
              Davis, CA 95618
              <br />
              United States
            </p>
            <ul className="mt-1 list-none">
              <li>
                <div className="flex space-x-3 mb-3">
                  <Link href="https://www.force11.org/contact" passHref>
                    <a
                      href="dummy"
                      className="text-gray-500 hover:text-gray-400 border-b-0"
                    >
                      <span className="sr-only">Email</span>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                  </Link>
                  <Link href="https://twitter.com/UpstreamBlog" passHref>
                    <a
                      href="dummy"
                      className="text-gray-500 hover:text-gray-400 border-b-0"
                    >
                      <span className="sr-only">Twitter</span>
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </Link>

                  <Link href="https://upstream.force11.org/feed.xml" passHref>
                    <a
                      href="dummy"
                      className="text-gray-500 hover:text-gray-400 border-b-0"
                    >
                      <span className="sr-only">RSS</span>
                      <FontAwesomeIcon icon={faRss} />
                    </a>
                  </Link>

                  <Link href="https://github.com/force11" passHref>
                    <a
                      href="dummy"
                      className="text-gray-500 hover:text-gray-400 border-b-0"
                    >
                      <span className="sr-only">GitHub</span>
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
