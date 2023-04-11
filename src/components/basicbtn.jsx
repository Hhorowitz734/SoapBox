//Component contains basic button
import {IoIosArrowForward} from "react-icons/io"

function BasicButton({text, onclick}){
    return (
        <div className="w-64 h-16 border border-black flex hover:bg-black hover:text-white transition duration-300 cursor-pointer" onClick={onclick}>
            <div className="w-4/6 h-full border border-transparent border-r-black flex justify-center items-center hover:border-r-white">
                <h1 className="text-2xl">{text}</h1>
            </div>
            <div className="w-2/6 h-full flex justify-center items-center border border-transparent hover:border-l-white">
                <IoIosArrowForward />
            </div>
            
        </div>
    )
}

export default BasicButton;