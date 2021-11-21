import React from "react";
import {
  getIndexedPostsByAuthor,
  getAllAuthors,
  getSingleAuthor,
  getAllPosts,
} from "../../lib/posts";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Author from "../../components/Author";
import { GetStaticPaths } from "next";
import { GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const authors = await getAllAuthors();
  const paths = authors.map((tag) => ({
    params: { slug: tag.slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const author = await getSingleAuthor(context.params.slug);
  const authors = await getAllAuthors();
  const page = context.params.page || 1;
  const posts = await getIndexedPostsByAuthor(
    ("authors:" + context.params.slug) as string,
    page as number
  );

  if (!posts || !author) {
    return {
      props: { notFound: true },
    };
  }

  return {
    props: { posts: posts.posts, authors, author, pagination: posts.meta },
  };
};

const AuthorPage = ({ posts, authors, author, pagination }) => {
  return (
    <>
      <Header tags={[]} tag={{}} />
      <Author author={author} posts={posts} pagination={pagination} />
      <Footer />
    </>
  );
};

export default AuthorPage;
