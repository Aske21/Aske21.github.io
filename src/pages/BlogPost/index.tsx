import React from "react";
import { useParams } from "react-router-dom";
import TerminalCommand from "../../components/terminal-command";
import { getPostBySlug } from "../../utils/blog/posts";
import { markdown } from "../../utils/blog/markdown";
import { usePageMeta } from "../../utils/seo/usePageMeta";
import { PostMeta, MarkdownBody, NotFoundText, BackLink } from "./style";

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  usePageMeta({
    title: post ? `${post.title} — Asim Veledarevic` : "Post not found — Asim Veledarevic",
    description: post?.excerpt || "This blog post could not be found.",
    path: `/blog/${slug ?? ""}`,
  });

  if (!post) {
    return (
      <>
        <TerminalCommand command={`cat blog/${slug}.md`}>
          <NotFoundText>cat: blog/{slug}.md: No such file or directory</NotFoundText>
        </TerminalCommand>
        <TerminalCommand command="cd ..">
          <BackLink to="/blog">&larr; back to blog</BackLink>
        </TerminalCommand>
      </>
    );
  }

  const html = markdown.render(post.body);

  return (
    <>
      <TerminalCommand command={`cat blog/${post.slug}.md`}>
        <PostMeta>
          {post.date}
          {post.tags.length > 0 && ` · ${post.tags.join(", ")}`}
        </PostMeta>
        <MarkdownBody dangerouslySetInnerHTML={{ __html: html }} />
      </TerminalCommand>
      <TerminalCommand command="cd ..">
        <BackLink to="/blog">&larr; back to blog</BackLink>
      </TerminalCommand>
    </>
  );
};

export default BlogPost;
