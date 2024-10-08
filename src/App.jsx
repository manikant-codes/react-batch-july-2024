import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Layout from "./layouts/Layout";
import FAQs from "./pages/FAQs";
import MyComponent from "./components/demo/classComponents/ClassComponentDemo";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              show ? (
                <>
                  <button
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    Hide/Show
                  </button>
                  <MyComponent name="Ram" />
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    Hide/Show
                  </button>
                </>
              )
            }
          />
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="work" element={<Work />} />
          <Route path="faqs" element={<FAQs />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
