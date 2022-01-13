import React from "react";
import Head from "next/head";
import Link from "next/link";
import ReactHtmlParser from "react-html-parser";
import { parseISO } from "date-fns";
import { BlogPosting } from "schema-dts";
import { jsonLdScriptProps } from "react-schemaorg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { readabilityScore } from "../../lib/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreativeCommons,
  faCreativeCommonsBy,
} from "@fortawesome/free-brands-svg-icons";

import { GetStaticPaths } from "next";
import {
  getAllPosts,
  getAllTags,
  getSinglePost,
} from "../../lib/posts";
import Byline from "../../components/Byline";
import { sanitizeDescription, uuid2base32 } from "../../lib/helpers";
import DiscourseForum from "../../lib/discourse-forum.js";

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: true };
};

export async function getStaticProps(context) {
  const post = await getSinglePost(context.params.slug);
  const tags = await getAllTags();

  if (!post) {
    return {
      props: { notFound: true },
    };
  }

  return {
    props: { post, tags },
  };
}

const Post = (props) => {
  if (!props.post) return <div>Not found</div>;

  const pid = process.env.NEXT_PUBLIC_PREFIX
    ? process.env.NEXT_PUBLIC_PREFIX + "/" + uuid2base32(props.post.id)
    : null;
  const description = sanitizeDescription(props.post.html);

  return (
    <>
      <Head>
        <title>{props.post.title}</title>

        {pid && (
          <>
            <meta name="DC.identifier" content={pid} />
            <meta name="citation_doi" content={pid} />
          </>
        )}
        <meta
          name="DC.rights"
          content="https://creativecommons.org/licenses/by/4.0/legalcode"
        />
        <meta name="description" content={description} />

        <meta name="citation_title" content={props.post.title} />
        <meta name="citation_author" content={props.post.primary_author.name} />
        <meta
          name="citation_publication_date"
          content={parseISO(props.post.published_at).toLocaleDateString(
            "en-US"
          )}
        />
        <meta name="citation_journal_title" content="FORCE11" />
        <meta name="citation_language" content="en" />
        {props.post.tags.length > 0 && (
          <meta
            name="citation_keywords"
            content={props.post.tags.map((tag) => tag.slug).join(", ")}
          />
        )}

        <meta name="og:title" content={props.post.title} />
        <meta name="og:description" content={description} />
        {props.post.feature_image && (
          <meta name="og:image" content={props.post.feature_image} />
        )}
        <script
          type="application/ld+json"
          {...jsonLdScriptProps<BlogPosting>({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "@id": "https://doi.org/" + pid,
            url: "https://upstream.force11.org/posts/" + props.post.slug,
            name: props.post.title,
            headline: props.post.title,
            description: description,
            author: props.post.authors.map((author) => ({
              "@type": "Person",
              "@id": author.website,
              name: author.name,
              image: author.profile_image
                ? "https:" + author.profile_image
                : null,
            })),
            isPartOf: {
              "@type": "Blog",
              name: "FORCE11",
            },
            publisher: { "@type": "Organization", name: "FORCE11" },
            keywords: props.post.tags.length > 0
              ? props.post.tags.map((tag) => tag.slug).join(", ")
              : null,
            inLanguage: "en",
            license: "https://creativecommons.org/licenses/by/4.0/legalcode",
            dateCreated: props.post.created_at.split(".")[0] + "Z",
            dateModified: props.post.updated_at.split(".")[0] + "Z",
            datePublished: props.post.published_at.split(".")[0] + "Z",
          })}
        />
      </Head>
      <Header tag={{}} />
      <div className="md:container mx-6 md:mx-auto py-8 flex flex-wrap justify-center">
        <div className="w-full md:w-8/12 ">
          {props.post.tags.length > 0 && (
            <p className="text-sm uppercase font-sans font-bold mb-0">
              {props.post.tags.map((tag, index) => (
                <>
                  {tag.name}
                  {index + 1 < props.post.tags.length ? " · " : ""}
                </>
              ))}
            </p>
          )}
          <h1 className="mt-0 mb-2 text-force-blue">{props.post.title}</h1>
          <Byline
            authors={props.post.authors}
            published={parseISO(props.post.published_at)}
            readingTime={props.post.reading_time}
            readabilityScore={readabilityScore(props.post.html)}
            doi={
              process.env.NEXT_PUBLIC_PREFIX ? "https://doi.org/" + pid : null
            }
          />
          <div className="text-lg">{ReactHtmlParser(props.post.html)}</div>
          <div
            className="text-base leading-snug text-gray-600 py-1 font-sans"
            data-cy="copyright"
          >
            <span className="text-lg text-gray-900 mr-1">
              <FontAwesomeIcon icon={faCreativeCommons} className="mr-0.5" />
              <FontAwesomeIcon icon={faCreativeCommonsBy} />
            </span>
            Copyright © {parseISO(props.post.published_at).getFullYear()}{" "}
            {props.post.authors.map((author) => author.name).join(", ")}.
            Distributed under the terms of the{" "}
            <a
              className="border-b-0 hover:border-b hover:border-force-blue"
              href="https://creativecommons.org/licenses/by/4.0/legalcode"
            >
              Creative Commons Attribution 4.0 License.
            </a>{" "}
            The authors adhere to the{" "}
            <Link href={"/pages/code-of-conduct"} passHref>
              <a
                className="border-b-0 hover:border-b hover:border-force-blue"
                href="dummy"
              >
                Upstream Code of Conduct.
              </a>
            </Link>
          </div>
          <DiscourseForum post={props.post} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Post;
