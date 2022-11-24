import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ResetGlobalStyle } from "./Assets/resetCss";
import Headers from "./Components/Header";
import Home from "./Pages/Home/Home";
import Sing_in from "./Pages/Sing_in/sing_in";
import { useState } from 'react';



function App() {
  const [dados, setdados] = useState([]);
  return (
    <>
      <ResetGlobalStyle />
      <BrowserRouter>
          <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sing_in" element={<Sing_in setdados={setdados}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
