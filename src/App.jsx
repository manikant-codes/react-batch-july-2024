import { Flowbite } from "flowbite-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/MyLayout";
import Home from "./pages/Home";
import { customTheme } from "./theme/customTheme";

function App() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Flowbite>
  );
}

export default App;
