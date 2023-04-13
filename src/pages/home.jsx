//Page for the landing page
import React from "react";

//Importing components
import Navbar from "../components/navbar";
import HomeBackground from "../components/homebackground";
import BasicButton from "../components/basicbtn";

function Home(){

    const toPage = (page) => {
        window.location = `/${page}`;
    }
    
    return(
        <div className="w-screen h-screen relative overflow-x-hidden">
            <HomeBackground />
            <Navbar option1 = "Articles" option2 = "Talk" option3 = "Profile" onclick1={() => toPage('articles')} onclick3={() => toPage('login')}/>
            <h1 className="text-8xl font-bold text-center justify-center mt-16">SoapBox</h1>
            <h1 className="text-4xl text-center mt-4">Let's talk politics</h1>
            <div className="w-full flex items-center justify-center mt-4">
                <BasicButton text = "Talk now" onclick = {() => toPage('articles')}/>
            </div>
        </div>
    )
}

export default Home;