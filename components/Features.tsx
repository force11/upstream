import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePdf,
  faPlusSquare,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import {
  faTextHeight,
  faUserFriends,
  faChartArea,
  faChartLine,
  faRssSquare,
  faExternalLinkAlt,
  faBarcode,
  faFileArchive,
  faServer,
  faSearch,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { faDiscourse } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import ghostEditor from "../public/img/ghost-editor.png";
import dataWrapper from "../public/img/datawrapper.png";
import pdfExport from "../public/img/pdf-export.png";
import discourse from "../public/img/discourse.png";

export default function Features() {
  return (
    <>
      <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
        <div className="container relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <svg
            className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
            />
          </svg>

          <div className="relative">
            <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A better way of communicating Scholarship
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
              Publishing, reading and re-using scholarly content is too
              complicated, too expensive, and too exclusive. Upstream tries to
              help address these barriers, allowing authors and readers to
              instead focus on the scholarship.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3
                id="editor"
                className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl"
              >
                Easy-to-use powerful editor
              </h3>
              <p className="mt-3 mr-16 text-lg text-gray-500">
                Upstream uses the Open Source Ghost blogging software, and posts
                are written using the visual{" "}
                <a
                  href="https://ghost.org/help/using-the-editor/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ghost editor
                </a>
                .
              </p>

              <dl className="mt-10 space-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-400 text-white">
                      <FontAwesomeIcon icon={faTextHeight} />
                    </div>
                    <p className="mx-16 mb-0 text-xl text-bold leading-6 font-medium text-gray-900 font-sans">
                      Contextual toolbar
                    </p>
                  </dt>
                  <dd className="mt-1 mx-16 text-base text-gray-500">
                    Using the contextual toolbar allows you to efficiently
                    format your text, add links and insert rich media.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-400 text-white">
                      <FontAwesomeIcon icon={faPlusSquare} />
                    </div>
                    <p className="mx-16 mb-0 text-xl text-bold leading-6 font-medium text-gray-900 font-sans">
                      Content cards
                    </p>
                  </dt>
                  <dd className="mt-1 mx-16 text-base text-gray-500">
                    You can insert cards with special content such as images,
                    markdown, html, galleries and embeds.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-400 text-white">
                      <FontAwesomeIcon icon={faUserFriends} />
                    </div>
                    <p className="mx-16 mb-0 text-xl text-bold leading-6 font-medium text-gray-900 font-sans">
                      Collaborative editing
                    </p>
                  </dt>
                  <dd className="mt-1 ml-16 text-base text-gray-500">
                    Teams can work together on a post, and users can have
                    different roles such as author, contributor or editor.
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-400 text-white">
                      <FontAwesomeIcon icon={faRssSquare} />
                    </div>
                    <p className="mx-16 mb-0 text-xl text-bold leading-6 font-medium text-gray-900 font-sans">
                      Import from Blogs and Google Docs{" "}
                      <span className="text-base text-normal text-yellow-500">
                        in beta testing
                      </span>
                    </p>
                  </dt>
                  <dd className="mt-1 ml-16 text-base text-gray-500">
                    Upstream can automatically generate blog posts from RSS
                    feeds and Google Docs.
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width="784"
                height="404"
                fill="none"
                viewBox="0 0 784 404"
              >
                <defs>
                  <pattern
                    id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="784"
                  height="404"
                  fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
                />
              </svg>
              <Image
                className="relative mt-16 mx-auto shadow-md"
                width={720}
                height={480}
                src={ghostEditor}
                alt="Ghost editor"
              />
            </div>
          </div>

          <svg
            className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
            />
          </svg>

          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="lg:col-start-2">
                <h3
                  id="scientific"
                  className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl"
                >
                  Editing scientific content
                </h3>
                <p className="mt-3 text-lg text-gray-500">
                  Authors of scientific content have specific needs not covered
                  by the common blog editors.
                </p>

                <dl className="mt-10 space-y-10">
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-400 text-white">
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                      </div>
                      <p className="mx-16 mb-0 text-xl text-bold leading-6 font-medium text-gray-900 font-sans">
                        References{" "}
                        <span className="text-base text-normal text-yellow-500">
                          coming soon
                        </span>
                      </p>
                    </dt>
                    <dd className="mt-1 ml-16 text-base text-gray-500">
                      All links will be displayed as formatted references in a
                      reference list, with required metadata automatically
                      fetched and stored in the background.
                    </dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-400 text-white">
                        <FontAwesomeIcon icon={faBarcode} />
                      </div>
                      <p className="mx-16 mb-0 text-xl text-bold leading-6 font-medium text-gray-900 font-sans">
                        Persistent identifiers
                      </p>
                    </dt>
                    <dd className="mt-1 ml-16 text-base text-gray-500">
                      All posts will automatically be registered with a DOI,
                      including the ORCID IDs of all authors, the abstract, and
                      the references in the metadata.
                    </dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-400 text-white">
                        <FontAwesomeIcon icon={faChartArea} />
                      </div>
                      <p className="mx-16 mb-0 text-xl text-bold leading-6 font-medium text-gray-900 font-sans">
                        Tables and Visualizations
                      </p>
                    </dt>
                    <dd className="mt-1 ml-16 text-base text-gray-500">
                      Upstream integrates with the{" "}
                      <a
                        href="https://datawrapper.de"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Datawrapper
                      </a>{" "}
                      service to generate charts, maps, and tables, and can
                      include a download link to the raw data.
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                <svg
                  className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                  width="784"
                  height="404"
                  fill="none"
                  viewBox="0 0 784 404"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="784"
                    height="404"
                    fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                  />
                </svg>
                <Image
                  className="relative mx-auto mr-16 shadow-md"
                  width={720}
                  height={480}
                  src={dataWrapper}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3
                id="publishing"
                className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl"
              >
                Flexible publishing options
              </h3>
              <p className="mt-3 mr-16 text-lg text-gray-500">
                Upstream uses the Open Source{" "}
                <a
                  href="https://pandoc.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pandoc
                </a>{" "}
                universal document converter to provide multiple output formats.
              </p>

              <dl className="mt-10 space-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-400 text-white">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <p className="mx-16 mb-0 text-xl text-bold leading-6 font-medium text-gray-900 font-sans">
                      Newsletter
                    </p>
                  </dt>
                  <dd className="mt-1 mx-16 text-base text-gray-500">
                    Subscribe to the newsletter to regularly get the full
                    content of all posts via email. An RSS feed is of course
                    also available.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-400 text-white">
                      <FontAwesomeIcon icon={faServer} />
                    </div>
                    <p className="mx-16 mb-0 text-xl text-bold leading-6 font-medium text-gray-900 font-sans">
                      API
                    </p>
                  </dt>
                  <dd className="mt-1 ml-16 text-base text-gray-500">
                    Content is available via a JSON REST API (in addition to the
                    RSS feed) for publishing in an external platform.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-400 text-white">
                      <FontAwesomeIcon icon={faFileArchive} />
                    </div>
                    <p className="mx-16 mb-0 text-xl text-bold leading-6 font-medium text-gray-900 font-sans">
                      Archive in JATS format{" "}
                      <span className="text-base text-normal text-yellow-500">
                        coming soon
                      </span>
                    </p>
                  </dt>
                  <dd className="mt-1 mx-16 text-base text-gray-500">
                    All content is available in JATS XML format for archiving
                    and distribution.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-400 text-white">
                      <FontAwesomeIcon icon={faFilePdf} />
                    </div>
                    <p className="mx-16 mb-0 text-xl text-bold leading-6 font-medium text-gray-900 font-sans">
                      Other formats{" "}
                      <span className="text-base text-normal text-yellow-500">
                        coming soon
                      </span>
                    </p>
                  </dt>
                  <dd className="mt-1 ml-16 text-base text-gray-500">
                    Content is also published in ePub and PDF formats. Other
                    formats (e.g. Markdown or Microsoft Word) are available upon
                    request.
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width="784"
                height="404"
                fill="none"
                viewBox="0 0 784 404"
              >
                <defs>
                  <pattern
                    id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="784"
                  height="404"
                  fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
                />
              </svg>
              <Image
                className="relative mt-16 mx-auto shadow-md"
                width={680}
                height={516}
                src={pdfExport}
                alt="PDF Export"
              />
            </div>
          </div>

          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="lg:col-start-2">
                <h3
                  id="discovery"
                  className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl"
                >
                  Discovery, discussion and reuse
                </h3>
                <p className="mt-3 text-lg text-gray-500">
                  Published scientific content becomes part of the scholarly
                  record. Upstream tracks the reuse and helps users to engage in
                  the discussion.
                </p>

                <dl className="mt-10 space-y-10">
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-400 text-white">
                        <FontAwesomeIcon icon={faSearch} />
                      </div>
                      <p className="mx-16 mb-0 text-xl text-bold leading-6 font-medium text-gray-900 font-sans">
                        SEO and full-text search
                      </p>
                    </dt>
                    <dd className="mt-1 ml-16 text-base text-gray-500">
                      Upstream makes heavy use of schema.org and Dublin Core
                      metadata to improve discoverability. A full-text search of
                      all content is powered by{" "}
                      <a
                        href="https://typesense.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Typesense
                      </a>
                      .
                    </dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-400 text-white">
                        <FontAwesomeIcon icon={faComments} />
                      </div>
                      <p className="mx-16 mb-0 text-xl text-bold leading-6 font-medium text-gray-900 font-sans">
                        Discussions
                      </p>
                    </dt>
                    <dd className="mt-1 ml-16 text-base text-gray-500">
                      Commenting and further discussion is provided by the Front
                      Matter{" "}
                      <a
                        href="https://discuss.front-matter.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        discussion forum
                      </a>
                      , powered by the Open Source software{" "}
                      <a
                        href="https://discourse.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Discourse
                      </a>
                      .
                    </dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-400 text-white">
                        <FontAwesomeIcon icon={faChartLine} />
                      </div>
                      <p className="mx-16 mb-0 text-xl text-bold leading-6 font-medium text-gray-900 font-sans">
                        Usage Stats and Citations{" "}
                        <span className="text-base text-normal text-yellow-500">
                          coming soon
                        </span>
                      </p>
                    </dt>
                    <dd className="mt-1 ml-16 text-base text-gray-500">
                      Usage stats, provided by{" "}
                      <a
                        href="https://plausible.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Plausible.io
                      </a>{" "}
                      and citations (coming soon) track the reuse of content.
                    </dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-400 text-white">
                        <FontAwesomeIcon icon={faDiscourse} />
                      </div>
                      <p className="mx-16 mb-0 text-xl text-bold leading-6 font-medium text-gray-900 font-sans">
                        Support
                      </p>
                    </dt>
                    <dd className="mt-1 ml-16 text-base text-gray-500">
                      Upstream helps its registered users via a dedicated blog,
                      its{" "}
                      <a
                        href="https://discuss.front-matter.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        support forum
                      </a>{" "}
                      and regular webinars.
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                <svg
                  className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                  width="784"
                  height="404"
                  fill="none"
                  viewBox="0 0 784 404"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="784"
                    height="404"
                    fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                  />
                </svg>
                <Image
                  className="relative mx-auto mr-16 shadow-md"
                  width={720}
                  height={480}
                  src={discourse}
                  alt="discourse"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
