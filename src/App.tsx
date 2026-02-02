import Greetings from "./components/greetings";
import Interests from "./components/interests";
import Blog from "./components/blog";
import Contact from "./components/contact";
import { AppContainer, Wrapper } from "./utils/theme/wrappers";

function App() {
  return (
    <AppContainer>
      <Wrapper>
        <Greetings />
        <Interests />
        <Blog />
        <Contact />
      </Wrapper>
    </AppContainer>
  );
}

export default App;
