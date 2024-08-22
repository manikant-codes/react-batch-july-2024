import { Flowbite } from "flowbite-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/MyLayout";
import Dashboard from "./pages/Dashboard";
import { customTheme } from "./theme/customTheme";
import AddTransaction from "./pages/AddTransaction";
import Reports from "./pages/Reports";
import { createContext, useState } from "react";
import UseReducerDemo from "./components/useReducerDemo/UseReducerDemo";

export const transactionContext = createContext([]);

function App() {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  );

  return (
    <transactionContext.Provider value={{ transactions, setTransactions }}>
      <Flowbite theme={{ theme: customTheme }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<UseReducerDemo />} />
              <Route path="/transaction/:id" element={<AddTransaction />} />
              <Route path="/reports" element={<Reports />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Flowbite>
    </transactionContext.Provider>
  );
}

export default App;
