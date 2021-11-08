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
import { getSinglePage, getAllPages } from "../../lib/posts";
import Byline from "../../components/Byline";
import { sanitizeDescription, uuid2base32 } from "../../lib/helpers";

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await getAllPages();
  const paths = pages.map((page) => ({
    params: { slug: page.slug },
  }));

  return { paths, fallback: true };
};

export async function getStaticProps(context) {
  const page = await getSinglePage(context.params.slug);

  if (!page) {
    return {
      props: { notFound: true },
    };
  }
  return {
    props: { page },
  };
}

const Page = (props) => {
  if (!props.page) return <div>Not found</div>;

  const pid = process.env.NEXT_PUBLIC_PREFIX
    ? process.env.NEXT_PUBLIC_PREFIX + "/" + uuid2base32(props.page.id)
    : null;
  const description = sanitizeDescription(props.page.html);

  return (
    <>
      <Head>
        <title>{props.page.title}</title>

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

        <meta name="citation_title" content={props.page.title} />
        <meta name="citation_author" content={props.page.primary_author.name} />
        <meta
          name="citation_publication_date"
          content={parseISO(props.page.published_at).toLocaleDateString(
            "en-US"
          )}
        />
        <meta name="citation_journal_title" content="Force11" />
        <meta name="citation_language" content="en" />

        <meta name="og:title" content={props.page.title} />
        <meta name="og:description" content={description} />
        <script
          type="application/ld+json"
          {...jsonLdScriptProps<BlogPosting>({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "@id": "https://doi.org/" + pid,
            url: "https://upstream.force11.org/pages/" + props.page.slug,
            name: props.page.title,
            headline: props.page.title,
            description: description,
            author: {
              "@type": "Person",
              "@id": props.page.primary_author.website,
              name: props.page.primary_author.name,
              image: props.page.primary_author.profile_image
                ? "https:" + props.page.primary_author.profile_image
                : null,
            },
            isPartOf: {
              "@type": "Blog",
              name: "Force11",
            },
            publisher: { "@type": "Organization", name: "Force11" },
            keywords: props.page.tags
              ? props.page.tags.map((tag) => tag.slug).join(", ")
              : null,
            inLanguage: "en",
            license: "https://creativecommons.org/licenses/by/4.0/legalcode",
            dateCreated: props.page.created_at.split(".")[0] + "Z",
            dateModified: props.page.updated_at.split(".")[0] + "Z",
            datePublished: props.page.published_at.split(".")[0] + "Z",
          })}
        />
      </Head>
      <Header tags={[]} tag={{}} />
      <div className="container mx-4 md:mx-auto px-6 py-8 flex flex-wrap justify-center">
        <div className="w-full md:w-8/12 ">
          <h1 className="mt-0 mb-2 text-blue-400">{props.page.title}</h1>
          <Byline
            authors={props.page.authors}
            published={parseISO(props.page.published_at)}
            readingTime={null}
            readabilityScore={null}
            doi={null}
          />
          <div className="text-lg">{ReactHtmlParser(props.page.html)}</div>
          <div
            className="text-base leading-snug text-gray-600 py-1 font-sans"
            data-cy="copyright"
          >
            <span className="text-lg text-gray-900 mr-1">
              <FontAwesomeIcon icon={faCreativeCommons} className="mr-0.5" />
              <FontAwesomeIcon icon={faCreativeCommonsBy} />
            </span>
            Copyright © {parseISO(props.page.published_at).getFullYear()}{" "}
            {props.page.authors.map((author) => author.name).join(", ")}.
            Distributed under the terms of the{" "}
            <a
              className="border-b-0"
              href="https://creativecommons.org/licenses/by/4.0/legalcode"
            >
              Creative Commons Attribution 4.0 License.
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
