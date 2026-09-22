import React, { useEffect, useRef, useState } from "react";
import { TerminalBlock, CommandLine, CommandOutput, Prompt } from "./style";

interface TerminalCommandProps {
  command: string;
  children: React.ReactNode;
}

const TerminalCommand: React.FC<TerminalCommandProps> = ({ command, children }) => {
  const blockRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = blockRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <TerminalBlock ref={blockRef} $visible={visible}>
      <CommandLine>
        <Prompt>aske21@github</Prompt> <span>➜</span> <span>~</span>{" "}
        <span>$</span> {command}
      </CommandLine>
      <CommandOutput>{children}</CommandOutput>
    </TerminalBlock>
  );
};

export default TerminalCommand;
