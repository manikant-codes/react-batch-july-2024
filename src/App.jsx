import { Flowbite } from "flowbite-react";
import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import { customTheme } from "./theme/customTheme";

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
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </cartCtx.Provider>
    </Flowbite>
  );
}

export default App;
