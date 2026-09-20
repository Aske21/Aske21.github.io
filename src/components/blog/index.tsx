import React from "react";
import TerminalCommand from "../terminal-command";
import { getAllPosts } from "../../utils/blog/posts";
import {
  BlogInfo,
  PostPreview,
  PostLink,
  PostDate,
  PostExcerpt,
  ViewAllLink,
} from "./style";

const PREVIEW_COUNT = 3;

const Blog: React.FC = () => {
  const posts = getAllPosts().slice(0, PREVIEW_COUNT);

  return (
    <TerminalCommand command="ls blog/">
      <BlogInfo>
        {posts.length === 0 ? (
          <div>No posts yet — check back soon.</div>
        ) : (
          <>
            {posts.map((post) => (
              <PostPreview key={post.slug}>
                <PostLink to={`/blog/${post.slug}`}>{post.title}</PostLink>
                <PostDate>{post.date}</PostDate>
                {post.excerpt && <PostExcerpt>{post.excerpt}</PostExcerpt>}
              </PostPreview>
            ))}
            <ViewAllLink to="/blog">View all posts &rarr;</ViewAllLink>
          </>
        )}
      </BlogInfo>
    </TerminalCommand>
  );
};

export default Blog;
