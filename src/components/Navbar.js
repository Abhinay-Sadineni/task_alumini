import { Link } from "react-router-dom";
import  Logo  from "../Logo.png";
import Hamburger from 'hamburger-react'
import { useState } from "react";

const Navbar = () => {

    const [isOpen, setOpen] = useState(false);

    return (
       <nav className="bg-gray-100 max-w-full">
        <div className="flex flex-shrink-0 items-center font-medium justify-around">
               <div className="flex flex-shrink-0 flex-row space-x-56">
               <img src={Logo} alt="logo" className="md:cursor-pointer h-12 my-2 "/>
               <div className="lg:hidden mt-2">
                <Hamburger toggled={isOpen} toggle={setOpen} />
               </div>
               </div>
               
                  {/* Desktop Menu */}
                <ul className="md:flex hidden flex-row space-x-10">
                    <li className="transform duration-500 hover:scale-125">
                        <Link to="/" className=" p-2 border border-rounded text-blue-500  hover:text-blue-700 hover:border-blue-700  ">Home</Link>
                    </li>
                    <li className="transform duration-500 hover:scale-125">
                        <Link to="/About" className=" p-2 border border-rounded text-blue-500  hover:text-red-700  hover:border-red-700 ">About</Link>
                    </li>
                    <li className="transform duration-500 hover:scale-125">
                        <Link to="/Contact" className=" p-2 border border-rounded text-blue-500  hover:text-green-700  hover:border-green-700 ">Contact</Link>
                    </li>
                    <li className="transform duration-500 hover:scale-125">
                        <Link to="#" className=" p-2 border border-rounded text-blue-500    hover:text-violet-700  hover:border-violet-700 ">Donate</Link>
                    </li>
                </ul>

                
                {/* Mobile Menu */}

                <ul className={`
        md:hidden bg-gray-100 fixed w-full top-16 overflow-y-auto bottom-0 py-24 pl-4 space-y-20 
        duration-500 ${isOpen ? "left-0" : "left-[-100%]"}
        `}>
                    <li>
                        <Link to="/" className="text-blue-500 hover:text-blue-700 ml-8 ">Home</Link>
                    </li>
                    <li>
                        <Link to="/About" className="text-blue-500 hover:text-blue-700 ml-8">About</Link>
                    </li>
                    <li>
                        <Link to="/Contact" className="text-blue-500 hover:text-blue-700 ml-8">Contact</Link>
                    </li>
                </ul>
        </div>
        
       </nav>
    );
}
 
export default Navbar;