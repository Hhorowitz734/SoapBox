//Component contains navigation bar

function Navbar({option1, option2, option3, option4, onclick1, onclick2, onclick3}){
    
    return(
        <div className = 'h-16 border mt-4 p-4 flex items-center'>
            <h1 className="text-4xl font-bold cursor-pointer" onClick = {() => {window.location = '/'}}>SoapBox</h1>
            <div className="ml-auto flex justify-between w-3/6">
                <h1 className="text-2xl cursor-pointer hover:text-gray-500 transition duration-300" onClick={onclick1}>{option1}</h1>
                <h1 className="text-2xl cursor-pointer hover:text-gray-500 transition duration-300" onClick={onclick2}>{option2}</h1>
                <h1 className="text-2xl cursor-pointer hover:text-gray-500 transition duration-300" onClick={onclick3}>{option3}</h1>
            </div>
        </div>
    )
}

export default Navbar;