import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./layouts/Layout";
import ChapterDetails from "./pages/ChapterDetails";
import VerseDetails from "./pages/VerseDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="chapter/:id" element={<ChapterDetails />} />
          <Route
            path="chapter/:chapterId/verse/:verseId"
            element={<VerseDetails />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
