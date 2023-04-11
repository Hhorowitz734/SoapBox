//Article mini to show in feeds

function Cover(){

    return (
        <div className="ml-2 h-56 w-2/3 border border-l-transparent border-t-transparent border-r-transparent flex overflow-hidden hover:bg-gray-200 transition duration-200">
            <div>
                <div className="flex">
                    <h1 className="text-2xl ml-2 mt-2">What America Gets Wrong About Gender Medicine </h1>
                </div>
                <div className="flex items-center">
                    <h1 className="ml-2 mt-2 font-bold">John Doe</h1>
                    <h1 className="m-2 font-bold">&middot;</h1>
                    <h1 className="mt-2">February 27, 2022</h1>
                    <h1 className="m-2 font-bold">&middot;</h1>
                    <div className="bg-gray-300 border-transparent rounded-md h-1/2 px-2 cursor-pointer hover:bg-gray-500 transition duration-300"><h1>Transgender</h1></div>
                    <div className="bg-gray-300 border-transparent rounded-md h-1/2 px-2 ml-2 cursor-pointer hover:bg-gray-500 transition duration-300"><h1>Civil Rights</h1></div>
                    <div className="bg-gray-300 border-transparent rounded-md h-1/2 px-2 ml-2 cursor-pointer hover:bg-gray-500 transition duration-300"><h1>Dogknob</h1></div>
                </div>
                <h1 className="ml-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
            </div>
        </div>
    )
}

export default Cover;