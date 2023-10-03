import Greetings from "./components/greetings";
import Navigation from "./components/navigation";
import Introduction from "./components/introduction";
import { AppContainer, Wrapper } from "./utils/theme/wrappers";
import Work from "./components/work";
import Portofolio from "./components/portoflio";
import Contact from "./components/contact";

function App() {
  return (
    <AppContainer>
      <Navigation />
      <Wrapper>
        <Introduction />
        <Greetings />
        <Work />
        <Portofolio />
        <Contact />
      </Wrapper>
    </AppContainer>
  );
}

export default App;
