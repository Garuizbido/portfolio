import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

import Sorting from "./components/Projects/components/Sorting";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/about" element={<Layout />}>
          <Route index element={<About />} />
        </Route>
        <Route path="/skills" element={<Layout />}>
          <Route index element={<Skills />} />
        </Route>
        <Route path="/projects" element={<Layout />}>
          <Route index element={<Projects />} />
        </Route>
        <Route path="/projects/sorting" element={<Layout />}>
          <Route index element={<Sorting />} />
        </Route>
        <Route path="/contact" element={<Layout />}>
          <Route index element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
