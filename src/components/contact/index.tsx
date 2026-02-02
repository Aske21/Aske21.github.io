import React from "react";
import TerminalCommand from "../terminal-command";
import { ContactInfo, ContactLink } from "./style";

const Contact: React.FC = () => {
  return (
    <TerminalCommand command="cat contact.txt">
      <ContactInfo>
        <div>
          GitHub:{" "}
          <ContactLink
            href="https://github.com/Aske21"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aske21
          </ContactLink>
        </div>
        <div>
          LinkedIn:{" "}
          <ContactLink
            href="https://www.linkedin.com/in/asim-veledarevic/"
            target="_blank"
            rel="noopener noreferrer"
          >
            asim-veledarevic
          </ContactLink>
        </div>
      </ContactInfo>
    </TerminalCommand>
  );
};

export default Contact;
