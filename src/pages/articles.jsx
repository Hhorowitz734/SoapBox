//Page to hold articles feed

//Importing Components
import Cover from "../components/articlecover";
import Navbar from "../components/navbar";

function Articles(){
    return (
        <div className="h-screen w-screen">
            <Navbar option1 = "Articles" option2 = "Talk" option3 = "Profile" onclick1={() => toPage('articles')}/>
            <div className="flex">
                <div>
                    <Cover />
                    <Cover />
                    <Cover />
                    <Cover />
                    <Cover />
                </div>
                <div className="border border-t-transparent border-b-transparent border-r-transparent flex-1">
                    <h1 className="">Trending</h1>
                </div>
            </div>
        </div>
    );
}

export default Articles;