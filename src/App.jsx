import { Flowbite } from "flowbite-react";
import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/MyLayout";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import { customTheme } from "./theme/customTheme";
import { Provider } from "react-redux";
import store from "./redux/store";

export const cartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Provider store={store}>
      <cartContext.Provider value={{ cart, setCart }}>
        <Flowbite theme={{ theme: customTheme }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/products/:id" element={<ProductDetails />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Flowbite>
      </cartContext.Provider>
    </Provider>
  );
}

export default App;
