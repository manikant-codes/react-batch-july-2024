import { Flowbite } from "flowbite-react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/MyLayout";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const customTheme = {
    card: {
      root: {
        base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
        children: "flex h-full flex-col justify-between gap-2 p-4",
        horizontal: {
          off: "flex-col",
          on: "flex-col md:max-w-xl md:flex-row",
        },
        href: "hover:bg-gray-100 dark:hover:bg-gray-700",
      },
      img: {
        base: "",
        horizontal: {
          off: "rounded-t-lg h-[200px] object-cover",
          on: "h-[200px] w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
        },
      },
    },
    button: {
      color: {
        primary: "bg-orange-500 hover:bg-orange-600 text-white",
      },
    },
  };

  const [cart, setCart] = useState([]);

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout cart={cart} setCart={setCart} />}>
            <Route index element={<Home cart={cart} setCart={setCart} />} />
            <Route
              path="/products/:id"
              element={<ProductDetails cart={cart} setCart={setCart} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Flowbite>
  );
}

export default App;
