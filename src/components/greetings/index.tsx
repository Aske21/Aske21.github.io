import React from "react";
import TerminalCommand from "../terminal-command";

const Greetings: React.FC = () => {
  return (
    <>
      <TerminalCommand command="whoami">Asim Veledarevic</TerminalCommand>
      <TerminalCommand command="cat about_me.txt">
        <div style={{ lineHeight: "1.8" }}>
          Hello, I'm Asim Veledarevic, a Web Artisan with a passion for crafting
          web experiences.
          <br />
          <br />
          If you're into turning visions into reality, exploring the artistry of
          frontend development, or just geeking out over React, you've found a
          kindred spirit.
          <br />
          Let's get in touch ^^
        </div>
      </TerminalCommand>
    </>
  );
};

export default Greetings;
