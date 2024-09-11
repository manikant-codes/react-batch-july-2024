import { Flowbite } from "flowbite-react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseRefDomDemo from "./components/demo/UseRefDomDemo";
import Layout from "./layouts/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import { customTheme } from "./theme/customTheme";
import Home from "./pages/Home";
import UseContextDemo from "./components/demo/useContextDemo/UseContextDemo";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout cart={cart} setCart={setCart} />}>
            <Route path="/" element={<UseContextDemo />} />
            {/* <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
            <Route
              path="/product/:id"
              element={<ProductDetails cart={cart} setCart={setCart} />}
            />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Flowbite>
  );
}

export default App;
