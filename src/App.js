import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ResetGlobalStyle } from "./Assets/resetCss";
import Home from "./Pages/Home/Home";



function App() {
  return (
    <>
      <ResetGlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
