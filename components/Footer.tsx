import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRss, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

// ToDo turn into yaml
import FooterLinks from "../footer.json";

export default function Footer() {
  return (
    <footer className="bg-gray-200" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-6 lg:py-8 flex flex-auto items-center justify-between font-sans">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-8 xl:mt-0">
          <div className="mx-4 md:mx-auto mt-2 md:mt-0">
            <h3 className="text-base font-semibold text-gray-400 tracking-wider uppercase">
              {FooterLinks[0]["name"]}
            </h3>
            <ul className="mt-1 list-none">
              <li>
                <Link href={FooterLinks[0]["links"][0]["href"]} passHref>
                  <a
                    href="dummy"
                    className="text-sm border-b-0 text-gray-500 hover:text-gray-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {FooterLinks[0]["links"][0]["name"]}
                  </a>
                </Link>
              </li>
              <li>
                <Link href={FooterLinks[0]["links"][1]["href"]} passHref>
                  <a
                    href="dummy"
                    className="text-sm border-b-0 text-gray-500 hover:text-gray-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {FooterLinks[0]["links"][1]["name"]}
                  </a>
                </Link>
              </li>
              <li>
                <Link href={FooterLinks[0]["links"][2]["href"]} passHref>
                  <a
                    href="dummy"
                    className="text-sm border-b-0 text-gray-500 hover:text-gray-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {FooterLinks[0]["links"][2]["name"]}
                  </a>
                </Link>
              </li>
              <li>
                <Link href={FooterLinks[0]["links"][3]["href"]} passHref>
                  <a
                    href="dummy"
                    className="text-sm border-b-0 text-gray-500 hover:text-gray-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {FooterLinks[0]["links"][3]["name"]}
                  </a>
                </Link>
              </li>
              <li>
                <Link href={FooterLinks[0]["links"][4]["href"]} passHref>
                  <a
                    href="dummy"
                    className="text-sm border-b-0 text-gray-500 hover:text-gray-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {FooterLinks[0]["links"][4]["name"]}
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mx-4 md:mx-auto mt-2 md:mt-0">
            <h3 className="text-base font-semibold text-gray-400 tracking-wider uppercase">
              {FooterLinks[1]["name"]}
            </h3>
            <ul className="mt-1 list-none">
              <li>
                <Link href={FooterLinks[1]["links"][0]["href"]} passHref>
                  <a
                    href="dummy"
                    className="text-sm border-b-0 text-gray-500 hover:text-gray-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {FooterLinks[1]["links"][0]["name"]}
                  </a>
                </Link>
              </li>
              <li>
                <Link href={FooterLinks[1]["links"][1]["href"]} passHref>
                  <a
                    href="dummy"
                    className="text-sm border-b-0 text-gray-500 hover:text-gray-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {FooterLinks[1]["links"][1]["name"]}
                  </a>
                </Link>
              </li>
              <li>
                <Link href={FooterLinks[1]["links"][2]["href"]} passHref>
                  <a
                    href="dummy"
                    className="text-sm border-b-0 text-gray-500 hover:text-gray-400"
                  >
                    {FooterLinks[1]["links"][2]["name"]}
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
              {FooterLinks[2]["name"]}
            </h3>
            <ul className="mt-1 list-none">
              <li>
                <Link href={FooterLinks[2]["links"][0]["href"]} passHref>
                  <a
                    href="dummy"
                    className="text-sm border-b-0 text-gray-500 hover:text-gray-400"
                  >
                    {FooterLinks[2]["links"][0]["name"]}
                  </a>
                </Link>
              </li>
              <li>
                <Link href={FooterLinks[2]["links"][1]["href"]} passHref>
                  <a
                    href="dummy"
                    className="text-sm border-b-0 text-gray-500 hover:text-gray-400"
                  >
                    {FooterLinks[2]["links"][1]["name"]}
                  </a>
                </Link>
              </li>
              <li>
                <Link href={FooterLinks[2]["links"][2]["href"]} passHref>
                  <a
                    href="dummy"
                    className="text-sm border-b-0 text-gray-500 hover:text-gray-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {FooterLinks[2]["links"][2]["name"]}
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mx-4 md:mx-auto mt-2 md:mt-0">
            <h3 className="text-base font-semibold text-gray-400 tracking-wider uppercase">
              Contact Us
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
