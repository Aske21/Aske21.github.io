import React from "react";
import TerminalCommand from "../terminal-command";
import { BlogInfo } from "./style";

const Blog: React.FC = () => {
  return (
    <TerminalCommand command="ls blog/">
      <BlogInfo>
        <div>Coming soon...</div>
        <div style={{ marginTop: "8px", fontSize: "14px", color: "#a6adc8" }}>
          Blog posts will appear here in the future
        </div>
      </BlogInfo>
    </TerminalCommand>
  );
};

export default Blog;
