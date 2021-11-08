import GhostContentAPI from "@tryghost/content-api";
import { Client } from "typesense";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: "https://writing.front-matter.io",
  key: process.env.NEXT_PUBLIC_GHOST_API_KEY,
  version: "v4",
});

export async function getAllPosts() {
  return api.posts
    .browse({
      limit: "all",
      include: "tags,authors",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getFeaturedPosts() {
  return api.posts
    .browse({
      filter: "featured:true",
      limit: 15,
      include: "tags,authors",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug) {
  return api.posts
    .read({
      slug: postSlug,
      include: "tags,authors",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getAllTags() {
  return api.tags
    .browse({
      limit: "all",
      include: "count.posts",
      order: "count.posts desc",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getSingleTag(tagSlug) {
  return api.tags
    .read({
      slug: tagSlug,
      include: "count.posts",
    })
    .catch((err) => {
      console.error(err);
    });
}

// Typesense integrations

const client = new Client({
  nearestNode: {
    host: process.env.NEXT_PUBLIC_TYPESENSE_HOST_0,
    port: "443",
    protocol: "https",
  },
  nodes: [
    {
      host: process.env.NEXT_PUBLIC_TYPESENSE_HOST_1,
      port: "443",
      protocol: "https",
    },
    {
      host: process.env.NEXT_PUBLIC_TYPESENSE_HOST_2,
      port: "443",
      protocol: "https",
    },
    {
      host: process.env.NEXT_PUBLIC_TYPESENSE_HOST_3,
      port: "443",
      protocol: "https",
    },
  ],
  apiKey: process.env.NEXT_PUBLIC_TYPESENSE_API_KEY,
  connectionTimeoutSeconds: 10,
  numRetries: 3,
  retryIntervalSeconds: 3,
});

export async function getIndexedPosts(
  query: string,
  page?: number,
  perPage?: number
) {
  return client
    .collections("upstream")
    .documents()
    .search({
      q: query,
      query_by: "tags,title,content",
      per_page: perPage ? perPage : 15,
      page: page > 0 ? page : 1,
    })
    .then((posts) => {
      const pages = Math.ceil(posts.found / (perPage ? perPage : 15));

      return {
        posts: posts.hits.map((hit) => hit.document),
        meta: {
          page: posts.page,
          pages: pages,
          total: posts.found,
          prev: posts.page > 1 ? posts.page - 1 : null,
          next: posts.page < pages ? posts.page + 1 : null,
        },
      };
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
}

export async function getIndexedPostsByTag(
  tag: string,
  page?: number,
  perPage?: number
) {
  return client
    .collections("upstream")
    .documents()
    .search({
      q: "*",
      filter_by: tag,
      per_page: perPage ? perPage : 15,
      page: page > 0 ? page : 1,
    })
    .then((posts) => {
      const pages = Math.ceil(posts.found / (perPage ? perPage : 15));

      return {
        posts: posts.hits.map((hit) => hit.document),
        meta: {
          page: posts.page,
          pages: pages,
          total: posts.found,
          prev: posts.page > 1 ? posts.page - 1 : null,
          next: posts.page < pages ? posts.page + 1 : null,
        },
      };
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
}

export async function getSimilarIndexedPosts(query: string, recordId: string) {
  return client
    .collections("upstream")
    .documents()
    .search({
      q: query,
      query_by: "title,content,tags",
      hidden_hits: recordId,
      per_page: 3,
      page: 1,
    })
    .then(({ hits }) => {
      return hits.map((hit) => hit.document);
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
}
