import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseReducerDemo from "./components/useReducerDemo/UseReducerDemo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UseReducerDemo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
