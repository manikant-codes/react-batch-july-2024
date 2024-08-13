import { Flowbite } from "flowbite-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/MyLayout";
import Dashboard from "./pages/Dashboard";
import { customTheme } from "./theme/customTheme";
import AddTransaction from "./pages/AddTransaction";
import Reports from "./pages/Reports";

function App() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/add-transaction" element={<AddTransaction />} />
            <Route path="/reports" element={<Reports />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Flowbite>
  );
}

export default App;
