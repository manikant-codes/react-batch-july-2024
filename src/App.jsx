import { Flowbite } from "flowbite-react";
import { createContext, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/MyLayout";
import AddTransaction from "./pages/AddTransaction";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import { customTheme } from "./theme/customTheme";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export const transactionContext = createContext([]);

const initialState = JSON.parse(localStorage.getItem("transactions")) || [];

function reducer(transactionsList, action) {
  if (action.type === "ADD") {
    const newTransationsList = [...transactionsList, action.payload];
    localStorage.setItem("transactions", JSON.stringify(newTransationsList));
    return newTransationsList;
  } else if (action.type === "UPDATE") {
    console.log(action.payload);
    const newTransationsList = transactionsList.map((transaction) => {
      if (transaction.id === Number(action.payload.id)) {
        return { ...transaction, ...action.payload.formState };
      }
      return transaction;
    });
    localStorage.setItem("transactions", JSON.stringify(newTransationsList));
    return newTransationsList;
  } else if (action.type === "DELETE") {
    const newTransationsList = transactionsList.filter((transaction) => {
      if (transaction.id === action.payload) {
        return false;
      }
      return true;
    });
    localStorage.setItem("transactions", JSON.stringify(newTransationsList));
    return newTransationsList;
  } else {
    return transactionsList;
  }
}

function App() {
  // const [transactions, setTransactions] = useState(
  //   JSON.parse(localStorage.getItem("transactions")) || []
  // );

  const [transactionsList, dispatch] = useReducer(reducer, initialState);

  return (
    <Provider store={store}>
      <transactionContext.Provider
        value={{
          // transactions, setTransactions,
          transactionsList,
          dispatch,
        }}
      >
        <Flowbite theme={{ theme: customTheme }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="/transaction/:id" element={<AddTransaction />} />
                <Route path="/reports" element={<Reports />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Flowbite>
      </transactionContext.Provider>
    </Provider>
  );
}

export default App;
