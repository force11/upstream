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

const people = [
  {
    name: "John Chodacki",
    role: "Coordination",
    emailUrl: "mailto:John.Chodacki@ucop.edu",
    orcidUrl: "https://orcid.org/0000-0002-7378-2408",
    imageUrl: "/img/chodacki_photo.jpg",
    bio: "John Chodacki is Director of the University of California Curation Center (UC3) at California Digital Library (CDL). As UC3 Director, John works across the UC campuses and the broader community to ensure that CDL’s digital curation services meet the emerging needs of the scholarly community – including digital preservation, persistent identifiers, data management, and data publishing. Prior to CDL, John oversaw product development activities at O’Reilly Media, VIZ Media, Zinio, Creative Edge, Safari Books Online, and PLOS. He currently serves on the board and/or steering committees of DataCite, FORCE11, ROR (Research Organization Registry), COUNTER, Collaborative Knowledge (Coko) Foundation, Metadata 20/20, The Carpentries, and OpenCitations.",
    twitterUrl: "https://twitter.com/Chodacki",
    githubUrl: null,
    linkedinUrl: "http://www.linkedin.com/in/johnchodacki/",
  },
  {
    name: "Ginny Hendricks",
    role: "Community & Comms Support",
    emailUrl: "mailto:ghendricks@crossref.org",
    orcidUrl: "https://orcid.org/0000-0002-0353-2702",
    imageUrl: "/img/ghendricks.jpg",
    bio: "Ginny has spent the last six years developing a team at Crossref encompassing community engagement & comms, member experience, technical support, and metadata strategy. Before joining Crossref, she consulted within scholarly communications awareness and growth strategies, branding and launching online products, and building digital communities. She previously led Elsevier's launch of Scopus from 2003-2005, where she established content selection criteria, editorial advisory boards, citation analysis tools, and outreach programs. Most recently, she founded the Metadata 20/20 collaboration to advocate for richer, connected, reusable, and open metadata for the benefit of society, and she loves helping to guide initiatives such as ROR.",
    twitterUrl: "https://twitter.com/GinnyLDN",
    githubUrl: null,
    linkedinUrl: null,
  },
  {
    name: "Christine Ferguson",
    role: "Editorial Support",
    emailUrl: "mailto:ferguson.cav@gmail.com",
    orcidUrl: "https://orcid.org/0000-0002-9317-6819",
    imageUrl: "/img/cferguson.jpeg",
    bio: "Trained lab biologist turned editor, Open Access journals and scholarly communications professional. Christine is a consultant and works with a range of organizations promoting open research. She previously served as joint chief editor of the open access journal, PLOS Biology, and was involved in open data management at the European Molecular Biology Laboratory. Christine holds a PhD from the University of Cape Town in cell biology.",
    twitterUrl: "https://twitter.com/ChrisVFerg",
    githubUrl: null,
    linkedinUrl: "https://www.linkedin.com/in/christine-ferguson-344b364/",
  },
  {
    name: "Martin Fenner",
    role: "Technical Support",
    emailUrl: "mailto:martin@front-matter.io",
    orcidUrl: "https://orcid.org/0000-0003-1419-2405",
    imageUrl: "/img/mfenner.jpeg",
    bio: "Martin in August 2021 launched the startup Front Matter, providing technical services for the scholarly community. Martin was Technical Director of the DOI registration agency DataCite from August 2015 to July 2021, and technical lead for the article-level metrics project at Open Access publisher PLOS from May 2012 until July 2015. He led the organizing committee for the Force2017 conference in Berlin. Martin has studied Medicine at the Free University Berlin and is board-certified in internal medicine and oncology.",
    twitterUrl: "https://twitter.com/mfenner",
    githubUrl: "https://github.com/mfenner",
    linkedinUrl: "https://www.linkedin.com/in/mfenner",
  },
  // More people...
];

export default function Team() {
  return (
    <div className="bg-white">
      <div className="container flex mx-auto py-12 px-16 max-w-7xl sm:px-6 lg:px-16">
        <div className="space-y-12 lg:grid lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold text-force-blue">
              Team Upstream
            </h2>
            <p className="text-xl text-gray-500">
              Team Upstream manages the Upstream blog for the FORCE11 community.
              Please contact us for inquiries, feedback or general questions.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
              {people.map((person) => (
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
