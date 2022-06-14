import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllProductsHome2 from "./components/AllProducts/AllProductsHome2";
import Empty from "./components/CommonComponents/Empty";
import NavBar from "./components/CommonComponents/NavBar";
import { SignUp } from "./components/SignUp/SignUp";
import SignUpHome from "./components/SignUp/SignUpHome";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
        
          <Route path="/" element={<AllProductsHome2 />} />
          <Route path="/signUp" element={<SignUpHome/>} />
          <Route path="/empty" element={<Empty/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
