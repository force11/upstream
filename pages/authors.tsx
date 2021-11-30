import React from "react";
import Head from "next/head";
import { getAllAuthors } from "../lib/posts";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Authors from "../components/Authors";

export async function getStaticProps() {
  const authors = await getAllAuthors();

  if (!authors) {
    return {
      props: { notFound: true },
    };
  }

  return {
    props: { authors },
  };
}

const AuthorsPage = ({ authors }) => {
  const pagination = {
    page: 1,
    pages: 1,
    total: authors ? authors.length : 0,
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
      </Head>
      <Header />
      <Authors authors={authors} pagination={pagination} />
      <Footer />
    </>
  );
};

export default AuthorsPage;
