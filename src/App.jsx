import { Routes, Route } from "react-router";
import SharedLayout from "./layout";
import Home from "./pages/home";
// import Webprojects from "./pages/webprojects";
// import DesignProjects from "./pages/designProjects";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="/webprojects" element={<Webprojects />} />
          <Route path="/designs" element={<DesignProjects />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
