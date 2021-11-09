import { Feed } from "feed";
import { getAllPosts } from "./posts";
import { parseISO } from "date-fns";
const fs = require("fs");

export async function generateAtomFeed() {
  const feed = new Feed({
    title: "Upstream",
    description: "Upstream is the blog for the Force11 organization.",
    id: "https://upstream.force11.org/",
    link: "https://upstream.force11.org/",
    language: "en",
    copyright:
      "Copyright © 2021 Force11. Distributed under the terms of the Creative Commons Attribution 4.0 License.",
    feedLinks: {
      atom: "https://upstream.force11.org/feed.xml",
    },
    author: {
      name: "Team Upstream",
      email: "upstream@force11.org",
    },
  });

  const posts = await getAllPosts();

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      author: [
        {
          name: post.primary_author.name,
          link: post.primary_author.website,
        },
      ],
      id: post.id,
      link: "https://upstream.force11.org/posts/" + post.slug,
      description: post.description,
      content: post.html,
      date: parseISO(post.published_at),
    });
  });

  fs.writeFileSync("./public/feed.xml", feed.atom1());
}
