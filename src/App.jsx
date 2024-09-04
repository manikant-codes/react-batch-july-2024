import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todos from "./pages/Todos";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todos />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
