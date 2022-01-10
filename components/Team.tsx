import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faOrcid,
} from "@fortawesome/free-brands-svg-icons";

// ToDo turn into JSON
import TeamLinks from "../team.json";

export default function Team() {
  return (
    <div className="bg-white">
      <div className="container flex mx-auto py-2 md:py-12 px-8 md:px-16 max-w-7xl sm:px-6 lg:px-16">
        <div className="space-y-12 lg:grid lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold text-force-blue">
              Team Upstream
            </h2>
            <p className="text-xl text-gray-500">
              Team Upstream manages the Upstream blog for the FORCE11 community.
              Please contact us by email at{' '} 
              <Link href={'mailto:upstream@force11.org'} passHref>
                <a
                  href="dummy"
                  className="text-gray-500 hover:text-gray-400 border-b-0"
                >
                  <span className="text-force-blue border-b-0 hover:border-b hover:border-force-blue">upstream@force11.org</span>
                </a>
              </Link>{' ' } for inquiries, feedback or general questions.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
              {TeamLinks.map((person) => (
                <li key={person.name} className="sm:py-8 list-none">
                  <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                    <div className="aspect-w-2 aspect-h-2 sm:aspect-w-2 sm:aspect-h-2">
                      {person.imageUrl && (
                        <Image
                          className="object-cover shadow-lg rounded-lg"
                          src={person.imageUrl}
                          alt={"image " + person.name}
                          layout="fill"
                        />
                      )}
                    </div>
                    <div className="sm:col-span-2">
                      <div className="space-y-4">
                        <div className="text-lg leading-6 font-medium space-y-1">
                          <h3>{person.name}</h3>
                          <p className="text-force-blue font-sans">
                            {person.role}
                          </p>
                        </div>
                        {person.bio && (
                          <div className="text-lg">
                            <p className="text-gray-500">{person.bio}</p>
                          </div>
                        )}
                        <ul className="flex space-x-5 mt-1 list-none">
                          <li>
                            <Link href={person.emailUrl} passHref>
                              <a
                                href="dummy"
                                className="text-gray-500 hover:text-gray-400 border-b-0"
                              >
                                <span className="sr-only">Email</span>
                                <FontAwesomeIcon icon={faEnvelope} />
                              </a>
                            </Link>
                          </li>
                          {person.orcidUrl && (
                            <li>
                              <Link href={person.orcidUrl} passHref>
                                <a
                                  href="dummy"
                                  className="text-gray-500 hover:text-gray-400 border-b-0"
                                >
                                  <span className="sr-only">ORCID</span>
                                  <FontAwesomeIcon icon={faOrcid} />
                                </a>
                              </Link>
                            </li>
                          )}
                          {person.twitterUrl && (
                            <li>
                              <Link href={person.twitterUrl} passHref>
                                <a
                                  href="dummy"
                                  className="text-gray-500 hover:text-gray-400 border-b-0"
                                >
                                  <span className="sr-only">Twitter</span>
                                  <FontAwesomeIcon icon={faTwitter} />
                                </a>
                              </Link>
                            </li>
                          )}
                          {person.githubUrl && (
                            <li>
                              <Link href={person.githubUrl} passHref>
                                <a
                                  href="dummy"
                                  className="text-gray-500 hover:text-gray-400 border-b-0"
                                >
                                  <span className="sr-only">GitHub</span>
                                  <FontAwesomeIcon icon={faGithub} />
                                </a>
                              </Link>
                            </li>
                          )}
                          {person.linkedinUrl && (
                            <li>
                              <a
                                href={person.linkedinUrl}
                                className="text-gray-400 hover:text-gray-500 border-b-0"
                              >
                                <span className="sr-only">LinkedIn</span>
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
