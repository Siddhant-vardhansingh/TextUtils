import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/Textform";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Navbar title="TextUtils" aboutText="Home" />
          <Routes>
            <Route exact path="/" element={<TextForm />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
