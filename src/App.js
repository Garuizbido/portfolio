import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/about" element={<Layout />}>
          <Route index element={<About />} />
        </Route>
        <Route path="/skills" element={<Layout />}>
          <Route index element={<About />} />
        </Route>
        <Route path="/projects" element={<Layout />}>
          <Route index element={<About />} />
        </Route>
        <Route path="/contact" element={<Layout />}>
          <Route index element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
