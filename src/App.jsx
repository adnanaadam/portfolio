import { Routes, Route } from "react-router";
import SharedLayout from "./layout";
import Home from "./pages/home";
import Webprojects from "./pages/webprojects";
import Experience from "./pages/experience";
import AboutMe from "./pages/aboutMe";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/webprojects" element={<Webprojects />} />
          <Route path="/experience" element={<Experience />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
