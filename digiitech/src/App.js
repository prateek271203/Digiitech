// import logo from './logo.svg';
import "./App.css";

import Navbar from "./components/Navbar";

import ImageSlider from "./components/ImageSlider";

import Cards from "./components/Cards";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, SingleCourse, Courses /*CareerRelatedPrograms*/ } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <ImageSlider />

      <Cards />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses/:id" element={<SingleCourse />} />
          <Route path="/category/:category" element={<Courses />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
