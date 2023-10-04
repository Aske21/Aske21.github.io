import React from "react";
import { ContactSection, ContactHeading, ContactLink } from "./style";

const Contact: React.FC = () => {
  return (
    <ContactSection>
      <ContactHeading>Contact Me</ContactHeading>
      <p>
        Feel free to reach out to me via email:{" "}
        <ContactLink href="mailto:your.email@example.com">
          your.email@example.com
        </ContactLink>
      </p>
    </ContactSection>
  );
};

export default Contact;
