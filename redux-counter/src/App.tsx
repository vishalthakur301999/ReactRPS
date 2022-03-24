import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayCart from "./components/displayCart";
import Header from "./components/header";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/cart" element={<DisplayCart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
