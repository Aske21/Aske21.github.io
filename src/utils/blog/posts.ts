import { parseFrontmatter } from "./parseFrontmatter";

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  body: string;
}

const postModules = import.meta.glob("/src/content/blog/*.md", {
  as: "raw",
  eager: true,
});

const posts: Post[] = Object.entries(postModules).map(([path, raw]) => {
  const { frontmatter, body } = parseFrontmatter(raw as string);
  const fallbackSlug = path.split("/").pop()?.replace(/\.md$/, "") ?? path;

  return {
    slug: frontmatter.slug || fallbackSlug,
    title: frontmatter.title || fallbackSlug,
    date: frontmatter.date || "",
    excerpt: frontmatter.excerpt || "",
    tags: frontmatter.tags
      ? frontmatter.tags.split(",").map((tag) => tag.trim())
      : [],
    body,
  };
}).sort((a, b) => b.date.localeCompare(a.date));

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
