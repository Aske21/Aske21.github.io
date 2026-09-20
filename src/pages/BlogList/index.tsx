import React from "react";
import TerminalCommand from "../../components/terminal-command";
import { getAllPosts } from "../../utils/blog/posts";
import { PostList, PostEntry, PostTitle, PostMeta, PostExcerpt, BackLink } from "./style";

const BlogList: React.FC = () => {
  const posts = getAllPosts();

  return (
    <>
      <TerminalCommand command="ls -la blog/">
        <PostList>
          {posts.length === 0 ? (
            <div>No posts yet — check back soon.</div>
          ) : (
            posts.map((post) => (
              <PostEntry key={post.slug}>
                <PostTitle to={`/blog/${post.slug}`}>{post.title}</PostTitle>
                <PostMeta>
                  {post.date}
                  {post.tags.length > 0 && ` · ${post.tags.join(", ")}`}
                </PostMeta>
                {post.excerpt && <PostExcerpt>{post.excerpt}</PostExcerpt>}
              </PostEntry>
            ))
          )}
        </PostList>
      </TerminalCommand>
      <TerminalCommand command="cd ..">
        <BackLink to="/">&larr; back home</BackLink>
      </TerminalCommand>
    </>
  );
};

export default BlogList;
