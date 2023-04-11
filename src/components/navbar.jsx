//Component contains navigation bar
import {AiOutlineMenu} from "react-icons/ai"
import { useState } from "react";

function Navbar({option1, option2, option3, option4, onclick1, onclick2, onclick3}){

    const [menuOpen, setMenuOpen] = useState(false);
    
    return(
        <div>
            <div className = 'h-16 border mt-4 p-4 flex items-center'>
                <h1 className="text-4xl font-bold cursor-pointer" onClick = {() => {window.location = '/'}}>SoapBox</h1>
                <div className="ml-auto hidden md:flex justify-between w-3/6">
                    <h1 className="text-2xl cursor-pointer hover:text-gray-500 transition duration-300" onClick={onclick1}>{option1}</h1>
                    <h1 className="text-2xl cursor-pointer hover:text-gray-500 transition duration-300" onClick={onclick2}>{option2}</h1>
                    <h1 className="text-2xl cursor-pointer hover:text-gray-500 transition duration-300" onClick={onclick3}>{option3}</h1>
                </div>
                <div className="md:hidden flex ml-auto" onClick={() => {setMenuOpen(!menuOpen)}}>
                    <AiOutlineMenu className="text-4xl"/>
                </div>
            </div>
            {menuOpen && (
                <div className="fixed w-full bg-gray-200 opacity-90 text-center h-1/4">
                    <h1 className="h-1/3 text-2xl cursor-pointer hover:text-gray-500 transition duration-300 flex justify-center items-center" onClick={onclick1}>{option1}</h1>
                    <h1 className="h-1/3 text-2xl cursor-pointer hover:text-gray-500 transition duration-300 flex justify-center items-center" onClick={onclick2}>{option2}</h1>
                    <h1 className="h-1/3 text-2xl cursor-pointer hover:text-gray-500 transition duration-300 flex justify-center items-center" onClick={onclick3}>{option3}</h1>
                </div>
            )}
        </div>
    )
}

export default Navbar;