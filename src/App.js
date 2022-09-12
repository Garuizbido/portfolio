import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Routes>
        <Route path="/portfolio" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/portfolio/about" element={<Layout />}>
          <Route index element={<About />} />
        </Route>
        <Route path="/portfolio/skills" element={<Layout />}>
          <Route index element={<Skills />} />
        </Route>
        <Route path="/portfolio/projects" element={<Layout />}>
          <Route index element={<About />} />
        </Route>
        <Route path="/portfolio/contact" element={<Layout />}>
          <Route index element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
