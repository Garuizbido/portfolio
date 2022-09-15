import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

import SortingAlg from "./components/Projects/projects/SortingAlg";
import Sidebar from "./components/Sidebar";

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
        <Route path="/contact" element={<Layout />}>
          <Route index element={<Contact />} />
        </Route>
        <Route path="/projects/sorting" element={<Sidebar />}>
          <Route index element={<SortingAlg />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
