import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ResetGlobalStyle } from "./Assets/resetCss";
import Home from "./Pages/Home/Home";
import Sing_in from "./Pages/Sing_in/sing_in";
import Sing_up from "./Pages/Sing_up/sing_up";
import Registration from "./Pages/Registration/Registration";
import { useState } from 'react';
import ProductPage from "./Pages/Product/ProductPage";
import Shopping_cart from "./Pages/shopping_cart/shopping_cart";



function App() {
  const [dados, setdados] = useState([]);
  return (
    <>
      <ResetGlobalStyle />
      <BrowserRouter>
                 <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sing_in" element={<Sing_in setdados={setdados}/>} />
          <Route path="/sing_up" element={<Sing_up setdados={setdados}/>} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/product/:id" element={<ProductPage/>} />
          <Route path="/shopping_cart" element={<Shopping_cart/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
