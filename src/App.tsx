import Greetings from "./components/greetings";
import Navigation from "./components/navigation";
import Introduction from "./components/introduction";
import { AppContainer, Wrapper } from "./utils/theme/wrappers";

function App() {
  return (
    <AppContainer>
      <Navigation />
      <Wrapper>
        <Introduction />
        <Greetings />
      </Wrapper>
    </AppContainer>
  );
}

export default App;
