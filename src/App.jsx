import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Flowbite } from "flowbite-react";
import { customTheme } from "./theme/customTheme";
import ProductDetails from "./pages/ProductDetails";
import { useState } from "react";
import UseEffectDemo from "./components/demo/UseEffectDemo";
import MemoDemo from "./components/demo/MemoDemo";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout cart={cart} setCart={setCart} />}>
            <Route path="/" element={<MemoDemo />} />
            {/* <Route path="/" element={<Home cart={cart} setCart={setCart} />} /> */}
            <Route
              path="/product/:id"
              element={<ProductDetails cart={cart} setCart={setCart} />}
            />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Flowbite>
  );
}

export default App;
