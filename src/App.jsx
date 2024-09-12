import { Flowbite } from "flowbite-react/components/Flowbite";
import { createContext, useState, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { customTheme } from "./theme/customTheme";
import Layout from "./layouts/Layout";

const Home = lazy(() => {
  return import("./pages/Home");
});

const About = lazy(() => {
  return import("./pages/About");
});

const ProductDetails = lazy(() => {
  return import("./pages/ProductDetails");
});

const Contact = lazy(() => {
  return import("./pages/Contact");
});

export const cartCtx = createContext(null);

function App() {
  const [cart, setCart] = useState([]);
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <cartCtx.Provider value={{ cart, setCart }}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              {/*<Route path="/" element={<UseContextDemo />} />*/}
              <Route
                path="/"
                element={
                  <Suspense fallback={<p>Loading...</p>}>
                    <Home />
                  </Suspense>
                }
              />
              <Route
                path="/product/:id"
                element={
                  <Suspense fallback={<p>Loading...</p>}>
                    <ProductDetails />
                  </Suspense>
                }
              />
              <Route
                path="about"
                element={
                  <Suspense fallback={<p>Loading...</p>}>
                    <About />
                  </Suspense>
                }
              />
              <Route
                path="contact"
                element={
                  <Suspense fallback={<p>Loading...</p>}>
                    <Contact />
                  </Suspense>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </cartCtx.Provider>
    </Flowbite>
  );
}

export default App;
