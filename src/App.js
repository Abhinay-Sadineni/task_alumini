import { BrowserRouter, Routes,Route } from "react-router-dom";
import React from "react";
import About from "./components/About";
import Donate from "./components/Donate";
import { ClipLoader } from "react-spinners";

function App() {

  const LazyHome = React.lazy(() => {
    return new Promise(resolve => setTimeout(resolve(import("./components/Home")), 5 * 1000))
  });

  const LazyContact = React.lazy(() => {
    return new Promise(resolve => setTimeout(resolve(import("./components/Contact")), 5 * 1000))
  })


  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<React.Suspense fallback={<div className="flex justify-center items-center w-100 h-screen " ><ClipLoader size={50} color="#F37A24" loading={true}/></div>}>
          <LazyHome/>
        </React.Suspense> }/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<React.Suspense fallback={<div className="flex justify-center items-center w-100 h-screen" ><ClipLoader size={50} color="#F37A24" loading={true}/></div>}>
          <LazyContact/>
        </React.Suspense> }/>
        <Route path="/donate" element={<Donate/>}/>
        <Route path="*" element={<h1>404 Not Found</h1>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
