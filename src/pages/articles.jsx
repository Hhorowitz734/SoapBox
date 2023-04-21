import Cover from "../components/articlecover";
import AccountFloater from "../components/loginfloater";
import Navbar from "../components/navbar";
import Trend from "../components/trendmini";
import Validate from "../components/validate";

import { useState, useRef } from "react";

function Articles() {

  const toPage = (page) => {
    window.location = `/${page}`;
  }

  //Handles state of login floater
  const [floaterOpen, toggleFloater] = useState(false);

  //Handles logged in/logged out state of page
  const [userDoc, SetUserDoc] = useState({name: "Log In"});

  //Function to handle when user logs in
  const handleLogIn = (userdoc) => {
    SetUserDoc(userdoc);
    toggleFloater(false);
  }

  //Function to handle when user clicks log in/profile button
  const handleProfileBtnClick = (name) => {
    if(name == "Log In"){
      toggleFloater(true);
    } else {
      toPage(`user/${name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '')}`)
    }
  }


  const articlesTest = [
    {title: "Brazil's Hyperactive Population Strategies", author: "John Doe"},
    {title: "Brazil's Hyperactive Population Strategies", author: "John Doe"},
    {title: "Brazil's Hyperactive Population Strategies", author: "John Doe"},
    {title: "Brazil's Hyperactive Population Strategies", author: "John Doe"},
    {title: "Brazil's Hyperactive Population Strategies", author: "John Doe"}
  ]

  const tagTest = [
    { tag: 'Transgender', url: 'John Doe', color: `rgba(${Math.floor(Math.random()*255)}, 0, ${Math.floor(Math.random()*255)}, ` },
    { tag: 'Politics', url: 'Jane Smith', color: `rgba(${Math.floor(Math.random()*255)}, 0, ${Math.floor(Math.random()*255)}, ` },
    { tag: 'Dogknob', url: 'Alex Johnson', color: `rgba(${Math.floor(Math.random()*255)}, 0, ${Math.floor(Math.random()*255)}, ` },
    { tag: 'Technology', url: 'Sarah Lee', color: `rgba(${Math.floor(Math.random()*255)}, 0, ${Math.floor(Math.random()*255)}, ` },
    { tag: "Elections", url: "https://example.com/elections", color: "rgba(255, 0, 0, " },
    { tag: "Campaign Finance", url: "https://example.com/campaign-finance", color: "rgba(0, 255, 0, " },
    { tag: "Voting Rights", url: "https://example.com/voting-rights", color: "rgba(0, 0, 255, " },
    { tag: "Gerrymandering", url: "https://example.com/gerrymandering", color: "rgba(255, 255, 0, " },
    { tag: "Supreme Court", url: "https://example.com/supreme-court", color: "rgba(0, 255, 255, " },
    { tag: "Foreign Policy", url: "https://example.com/foreign-policy", color: "rgba(255, 0, 255, " },
    { tag: "Impeachment", url: "https://example.com/impeachment", color: "rgba(255, 128, 0, " },
    { tag: "Executive Power", url: "https://example.com/executive-power", color: "rgba(0, 255, 128, " },
    { tag: "National Security", url: "https://example.com/national-security", color: "rgba(128, 0, 255, " },
    { tag: "Economic Policy", url: "https://example.com/economic-policy", color: "rgba(255, 0, 128, " },
    { tag: "Healthcare Policy", url: "https://example.com/healthcare-policy", color: "rgba(0, 128, 255, " },
    { tag: "Immigration", url: "https://example.com/immigration", color: "rgba(255, 128, 128, " },
    { tag: "Climate Change", url: "https://example.com/climate-change", color: "rgba(128, 255, 0, " },
    { tag: "Gun Control", url: "https://example.com/gun-control", color: "rgba(0, 128, 128, " },
    { tag: "Taxes", url: "https://example.com/taxes", color: "rgba(128, 0, 128, " },
    { tag: "Social Security", url: "https://example.com/social-security", color: "rgba(128, 128, 0, " },
    { tag: "Labor", url: "https://example.com/labor", color: "rgba(128, 128, 128, " },
    { tag: "Civil Rights", url: "https://example.com/civil-rights", color: "rgba(192, 0, 0, " },
    { tag: "Privacy", url: "https://example.com/privacy", color: "rgba(0, 192, 0, " },
    { tag: "Criminal Justice", url: "https://example.com/criminal-justice", color: "rgba(0, 0, 192, " },
    { tag: "Education", url: "https://example.com/education", color: "rgba(192, 192, 0, " }
  ]

  const usersTest = [
    {name: "Benjamin Horowitz", img: "https://cdn.britannica.com/71/234471-050-093F4211/shiba-inu-dog-in-the-snow.jpg", score: 32000},
    {name: "John Doe", img: "https://cdn.britannica.com/71/234471-050-093F4211/shiba-inu-dog-in-the-snow.jpg", score: 30000},
    {name: "Zubayer Jones", img: "https://cdn.britannica.com/71/234471-050-093F4211/shiba-inu-dog-in-the-snow.jpg", score: 27000},
    {name: "Chad Chadson", img: "https://cdn.britannica.com/71/234471-050-093F4211/shiba-inu-dog-in-the-snow.jpg", score: 5000},
    {name: "Mario Jakeson", img: "https://cdn.britannica.com/71/234471-050-093F4211/shiba-inu-dog-in-the-snow.jpg", score: 3000}
  ]
  
  //TOKEN HERE
  const TOKEN = "sdfsd";

  return (
    <div className="h-screen w-screen overflow-hidden">

      <Validate setUserDoc={SetUserDoc}/>

      {floaterOpen && (
        <div className="w-screen h-screen fixed bg-gray-200 bg-opacity-80 flex justify-center items-center" onClick = {(e) => {toggleFloater(false)}}>
          <AccountFloater toggleLoginModal={handleLogIn}/>
        </div>
      )}

    <Navbar 
      option1="Articles" 
      option2="Talk" 
      option3={`${userDoc.name}`} 
      onclick1={() => toPage('/')} 
      onclick3={() => handleProfileBtnClick(userDoc.name)}
    />

      <div className="grid grid-cols-3">
      
        <div id="articlesbar" className="max-h-screen scrollbar-thumb-gray-400 scrollbar-track-gray-300 scrollbar-thin col-span-3 lg:col-span-2 border border-l-transparent border-t-transparent border-b-tranparent px-2 overflow-x-hidden overflow-y-scroll">
          <Cover />
          <Cover />
          <Cover />
          <Cover />
          <Cover />
          <Cover />
          <Cover />
        </div>

          <div className="px-3 py-2 border border-t-transparent border-b-transparent border-l-transparent border-r-transparent lg:block hidden">
            <h1 className="text-center text-2xl mb-1 border border-l-transparent border-r-transparent border-t-transparent ">Trends</h1>
            <Trend articleObjects={articlesTest} tagObjects={tagTest} userObjects={usersTest}/>
          </div>

        </div>

      <div style={{height: '4rem'}}></div>

    </div>
  );
}

export default Articles;
