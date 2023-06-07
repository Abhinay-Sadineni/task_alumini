import { BrowserRouter, Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Donate from "./components/Donate";

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/donate" element={<Donate/>}/>
        <Route path="*" element={<h1>404 Not Found</h1>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
