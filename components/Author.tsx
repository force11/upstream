import React from "react";
import { useState } from "react";
import { fromUnixTime } from "date-fns";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faOrcid } from "@fortawesome/free-brands-svg-icons";

import useSWR from "swr";
import fetch from "unfetch";
import Byline from "./Byline";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Author({ posts, author, pagination }) {
  if (!posts) {
    return null;
  }

  const [pageIndex, setPageIndex] = useState(1);

  // The API URL includes the page index, which is a React state.
  const filter = "author_ids:" + author.slug;
  const query = `https://${process.env.NEXT_PUBLIC_TYPESENSE_HOST_0}/collections/upstream/documents/search/?q=*&filter_by=${filter}&sort_by=published:desc&per_page=15&page=${pageIndex}&x-typesense-api-key=${process.env.NEXT_PUBLIC_TYPESENSE_API_KEY}`;
  const { data } = useSWR(query, fetcher);

  // ... handle loading and error states
  if (!data) {
    return null;
  }

  // duplication from lib/posts
  const pages = Math.ceil(data.found / 15);

  posts = data.hits.map((hit) => hit.document);
  pagination = {
    page: data.page,
    pages: pages,
    total: data.found,
    prev: data.page > 1 ? data.page - 1 : null,
    next: data.page < pages ? data.page + 1 : null,
  };

  return (
    <>
      <div className="container mx-auto flex flex-auto bg-white">
        <div className="px-10 py-6 md:py-12 space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
          <div className="grid gap-5 lg:grid-cols-3 space-y-4 sm:space-y-0">
            <div className="aspect-square w-48 md:w-72">
              <img className="object-cover shadow-lg rounded-lg" src={author.profile_image} alt="" />
            </div>
            <div className="col-span-2">
              <div className="pt-8 text-xl pt-2 leading-6 font-medium font-sans space-y-1">
                <div>{author.name}</div>
              </div>

              <div className="text-lg">
                <p className="text-gray-500">{author.bio}</p>
              </div>

              <ul className="flex space-x-5 mt-1 list-none">
                {author.website && (
                  <li>
                    <Link href={author.website} passHref>
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
                {author.twitter && (
                  <li>
                    <Link href={"https://twitter.com/" + author.twitter} passHref>
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
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-gray-50 pt-8 pb-8 px-4 sm:px-6 lg:pt-4 lg:pb-8 lg:px-8">
        <div className="container mx-auto flex flex-auto items-center justify-between">
          <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3"></div>
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="max-w-lg mx-auto grid gap-5 grid-cols-1 lg:max-w-none">
              {posts.slice(0, 1).map((post) => (
                <div
                  className="grid gap-5 lg:grid-cols-2 rounded-lg shadow-lg overflow-hidden"
                  key={post.id}
                >
                  <div className="flex-shrink-0 bg-white py-6 px-6">
                    <img
                      className="h-96 w-full object-contain object-left"
                      src={
                        post.featureImage
                          ? post.featureImage
                          : `https://assets.front-matter.io/1/news${
                              Math.floor(Math.random() * 5) + 1
                            }.jpg`
                      }
                      alt=""
                    />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1 ">
                      <a
                        href={"/posts/" + post.slug}
                        className="block mt-2 border-b-0"
                      >
                        <p className="text-xl font-semibold font-sans text-force-blue">
                          {post.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {post.description}
                        </p>
                      </a>
                    </div>
                    <div className="mt-0 flex items-center">
                      <Byline
                        authors={post.authors.map((author, idx) => ({
                          name: author,
                          slug: post.author_ids[idx],
                          website: null,
                          profile_image: null,
                        }))}
                        published={fromUnixTime(post.published)}
                        doi={
                          process.env.NEXT_PUBLIC_PREFIX ? 'https://doi.org/' + process.env.NEXT_PUBLIC_PREFIX + '/' + post.id : null
                        }
                        readingTime={post.readingTime}
                        readabilityScore={post.readabilityScore}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {posts.length > 1 && (
              <div className="mt-4 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {posts.slice(1, 4).map((post) => (
                  <div
                    className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                    key={post.id}
                  >
                    <div className="flex-shrink-0 bg-white pt-6 px-6">
                      <img
                        className="h-48 w-full object-contain"
                        src={
                          post.featureImage
                            ? post.featureImage
                            : `https://assets.front-matter.io/1/news${
                                Math.floor(Math.random() * 5) + 1
                              }.jpg`
                        }
                        alt=""
                      />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <a
                          href={"/posts/" + post.slug}
                          className="block mt-2 border-b-0"
                        >
                          <p className="text-xl font-semibold font-sans text-force-blue">
                            {post.title}
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            {post.description}
                          </p>
                        </a>
                      </div>
                      <div className="mt-0 flex items-center">
                        <Byline
                          authors={post.author}
                          published={fromUnixTime(post.published)}
                          doi={
                            process.env.NEXT_PUBLIC_PREFIX ? 'https://doi.org/' + process.env.NEXT_PUBLIC_PREFIX + '/' + post.id : null
                          }
                          readingTime={post.readingTime}
                          readabilityScore={post.readabilityScore}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {posts.length > 4 && (
              <div className="mt-4 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
                {posts.slice(4, 6).map((post) => (
                  <div
                    className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                    key={post.id}
                  >
                    <div className="flex-shrink-0 bg-white pt-6 px-6">
                      <img
                        className="h-48 w-full object-contain"
                        src={
                          post.featureImage
                            ? post.featureImage
                            : `https://assets.front-matter.io/1/news${
                                Math.floor(Math.random() * 5) + 1
                              }.jpg`
                        }
                        alt=""
                      />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <a
                          href={"/posts/" + post.slug}
                          className="block mt-2 border-b-0"
                        >
                          <p className="text-xl font-semibold font-sans text-gray-900">
                            {post.title}
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            {post.description}
                          </p>
                        </a>
                      </div>
                      <div className="mt-0 flex items-center">
                        <Byline
                          authors={post.author}
                          published={fromUnixTime(post.published)}
                          doi={
                            process.env.NEXT_PUBLIC_PREFIX ? 'https://doi.org/' + process.env.NEXT_PUBLIC_PREFIX + '/' + post.id : null
                          }
                          readingTime={post.readingTime}
                          readabilityScore={post.readabilityScore}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {posts.length > 6 && (
              <div className="mt-12 max-w-lg mx-auto grid gap-5 grid-cols-1 lg:max-w-none">
                {posts.slice(6, 7).map((post) => (
                  <div
                    className="grid gap-5 lg:grid-cols-2 rounded-lg shadow-lg overflow-hidden"
                    key={post.id}
                  >
                    <div className="flex-shrink-0 bg-white py-6 px-6">
                      <img
                        className="h-96 w-full object-contain object-left"
                        src={
                          post.featureImage
                            ? post.featureImage
                            : `https://assets.front-matter.io/1/news${
                                Math.floor(Math.random() * 5) + 1
                              }.jpg`
                        }
                        alt=""
                      />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <a
                          href={"/posts/" + post.slug}
                          className="block mt-2 border-b-0"
                        >
                          <p className="text-xl font-semibold font-sans text-gray-900">
                            {post.title}
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            {post.description}
                          </p>
                        </a>
                      </div>
                      <div className="mt-0 flex items-center">
                        <Byline
                          authors={post.author}
                          published={fromUnixTime(post.published)}
                          doi={
                            process.env.NEXT_PUBLIC_PREFIX ? 'https://doi.org/' + process.env.NEXT_PUBLIC_PREFIX + '/' + post.id : null
                          }
                          readingTime={post.readingTime}
                          readabilityScore={post.readabilityScore}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {posts.length > 7 && (
              <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {posts.slice(7, 10).map((post) => (
                  <div
                    className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                    key={post.id}
                  >
                    <div className="flex-shrink-0 bg-white pt-6 px-6">
                      <img
                        className="h-48 w-full object-contain"
                        src={
                          post.featureImage
                            ? post.featureImage
                            : `https://assets.front-matter.io/1/news${
                                Math.floor(Math.random() * 5) + 1
                              }.jpg`
                        }
                        alt=""
                      />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <a
                          href={"/posts/" + post.slug}
                          className="block mt-2 border-b-0"
                        >
                          <p className="text-xl font-semibold font-sans text-gray-900">
                            {post.title}
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            {post.description}
                          </p>
                        </a>
                      </div>
                      <div className="mt-0 flex items-center">
                        <Byline
                          authors={post.author}
                          published={fromUnixTime(post.published)}
                          doi={
                            process.env.NEXT_PUBLIC_PREFIX ? 'https://doi.org/' + process.env.NEXT_PUBLIC_PREFIX + '/' + post.id : null
                          }
                          readingTime={post.readingTime}
                          readabilityScore={post.readabilityScore}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {posts.length > 10 && (
              <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {posts.slice(10, 13).map((post) => (
                  <div
                    className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                    key={post.id}
                  >
                    <div className="flex-shrink-0 bg-white pt-2 px-6">
                      <img
                        className="h-48 w-full object-contain"
                        src={
                          post.featureImage
                            ? post.featureImage
                            : `https://assets.front-matter.io/1/news${
                                Math.floor(Math.random() * 5) + 1
                              }.jpg`
                        }
                        alt=""
                      />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <a
                          href={"/posts/" + post.slug}
                          className="block mt-2 border-b-0"
                        >
                          <p className="text-xl font-semibold font-sans text-gray-900">
                            {post.title}
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            {post.description}
                          </p>
                        </a>
                      </div>
                      <div className="mt-0 flex items-center">
                        <Byline
                          authors={post.author}
                          published={fromUnixTime(post.published)}
                          doi={
                            process.env.NEXT_PUBLIC_PREFIX ? 'https://doi.org/' + process.env.NEXT_PUBLIC_PREFIX + '/' + post.id : null
                          }
                          readingTime={post.readingTime}
                          readabilityScore={post.readabilityScore}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {posts.length > 13 && (
              <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
                {posts.slice(13, 16).map((post) => (
                  <div
                    className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                    key={post.id}
                  >
                    <div className="flex-shrink-0 bg-white pt-6 px-6">
                      <img
                        className="h-48 w-full object-contain"
                        src={
                          post.featureImage
                            ? post.featureImage
                            : `https://assets.front-matter.io/1/news${
                                Math.floor(Math.random() * 5) + 1
                              }.jpg`
                        }
                        alt=""
                      />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <a
                          href={"/posts/" + post.slug}
                          className="block mt-2 border-b-0"
                        >
                          <p className="text-xl font-semibold font-sans text-gray-900">
                            {post.title}
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            {post.description}
                          </p>
                        </a>
                      </div>
                      <div className="mt-0 flex items-center">
                        <Byline
                          authors={post.author}
                          published={fromUnixTime(post.published)}
                          doi={
                            process.env.NEXT_PUBLIC_PREFIX ? 'https://doi.org/' + process.env.NEXT_PUBLIC_PREFIX + '/' + post.id : null
                          }
                          readingTime={post.readingTime}
                          readabilityScore={post.readabilityScore}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <nav
              className="mx-0 px-6 py-4 flex items-center justify-between"
              aria-label="Pagination"
            >
              <div className="hidden sm:block">
                <p className="text-sm text-gray-700">
                  Showing{' '}
                  <span className="font-medium">page {pagination.page}</span>{' '}
                  out of <span className="font-medium">{pagination.pages}</span>{' '}
                  total pages for {pagination.total} posts.
                </p>
              </div>
              <div className="flex-1 flex justify-between sm:justify-end">
                {pagination.prev && (
                  <button onClick={() => setPageIndex(pagination.prev)}>
                    <a className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 hover:text-green-500 hover:border-green-500 hover:bg-gray-50">
                      Previous
                    </a>
                  </button>
                )}
                {pagination.next && (
                  <button onClick={() => setPageIndex(pagination.next)}>
                    <a className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 hover:text-green-500 hover:border-green-500 hover:bg-gray-50">
                      Next
                    </a>
                  </button>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
