import React from "react";
import { StyledDiv } from "./style";

const Greetings: React.FC = () => {
  const [text, setText] = React.useState("");

  React.useEffect(() => {
    const greeting =
      "Hello there, my name is Asim. \n I'm a React developer and web artisan. I specialize in crafting sleek and interactive digital experiences.";
    let index = 0;

    const intervalId = setInterval(() => {
      setText(greeting.substring(0, index));
      index++;

      if (index > greeting.length) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return <StyledDiv>{text}</StyledDiv>;
};

export default Greetings;
