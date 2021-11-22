import React from "react";
import Head from "next/head";
import { jsonLdScriptProps } from "react-schemaorg";
import { getAllTags, getIndexedPosts } from "../lib/posts";
import { generateAtomFeed } from "../lib/feed";
// import { generateEpub, generatePdf, generateJats } from '../lib/pandoc'
import { refreshIndex } from "../lib/typesense";
// import { updateSchema } from "../lib/typesense";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Tag from "../components/Tag";
import { Blog } from "schema-dts";

export async function getStaticProps() {
  const tags = await getAllTags();
  const posts = await getIndexedPosts("*");
  console.log(posts);
  if (!posts.posts || !tags) {
    return {
      props: { notFound: true },
    };
  }

  await generateAtomFeed();
  // await generateEpub()
  // await generatePdf()
  // await generateJats()
  // await updateSchema();
  await refreshIndex();

  return {
    props: { posts: posts.posts, tags },
  };
}

const IndexPage = ({ posts, tags }) => {
  const tag = {
    name: "This is Upstream",
    description: "The community blog for all things open research",
    feature_image: "/img/hero.jpg",
    accent_color: false,
    featured: true,
  };

  const pagination = {
    page: 1,
    pages: 1,
    total: posts ? posts.length : 0,
    prev: null,
    next: null,
  };

  return (
    <>
      <Head>
        <meta name="og:title" content="Upstream" />
        <meta
          name="og:description"
          content="Upstream is a new space for open enthusiasts to discuss open approaches to scholarly communication."
        />
        <meta
          name="og:image"
          content="https://upstream.force11.org/img/hero.jpg"
        />
        <script
          type="application/ld+json"
          {...jsonLdScriptProps<Blog>({
            "@context": "https://schema.org",
            "@type": "Blog",
            url: "https://upstream.force11.org/",
            name: "Upstream",
            issn: process.env.NEXT_PUBLIC_ISSN,
            publisher: { "@type": "Organization", name: "Force11" },
            inLanguage: "en",
            license: "https://creativecommons.org/licenses/by/4.0/legalcode",
          })}
        />
      </Head>
      <Header tags={tags} tag={tag} />
      <Hero tag={tag} />
      <Tag posts={posts} tag={tag} pagination={pagination} />
      <Footer />
    </>
  );
};

export default IndexPage;
