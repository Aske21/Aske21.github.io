import React from "react";
import TerminalCommand from "../terminal-command";

const Greetings: React.FC = () => {
  return (
    <>
      <TerminalCommand command="whoami">
        Asim Veledarevic
      </TerminalCommand>
      <TerminalCommand command="cat about_me.txt">


        <div style={{ lineHeight: "1.8" }}>
          Hello, I'm Asim Veledarevic, a Web Artisan with a passion for crafting
          beautiful web experiences.
          <br />
          <br />
          I get a kick out of crafting web experiences, and my heart belongs to the
          fine art of React in the frontend world. I'm passionate about crafting
          pixel-perfect digital experiences, always chasing the details.
          <br />
          <br />
          When I'm not coding, I enjoy a diverse range of interests and hobbies. 
          So, if you're into turning visions into reality, exploring the artistry of
          frontend development, or just geeking out over React, you've found a kindred spirit.
          <br />
          Let's get in touch ^^
        </div>
      </TerminalCommand>
    </>
  );
};

export default Greetings;
