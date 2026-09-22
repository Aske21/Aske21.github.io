import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./pages/NotFound";
import { AppContainer, Wrapper } from "./utils/theme/wrappers";

function App() {
  return (
    <AppContainer>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Wrapper>
    </AppContainer>
  );
}

export default App;
