// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path='/home' element={<h1 className="text-center pt-5">Home Pages</h1>}></Route> */}
          {/* <Route path="/aboutus" element={<About />}></Route>*/}
          {/* <Route path="/contactus" element={<Contact />}></Route>*/}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
