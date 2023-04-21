import {useState} from 'react';

import Validate from '../components/validate';
import AccountFloater from '../components/loginfloater';

function Write(){

    //Logged In statsu of page
    const [loggedIn, setLoggedIn] = useState(false);

    //Handles logged in/logged out state of page
    const [userDoc, SetUserDoc] = useState({});

    //Function to handle when user logs in
    const handleLogIn = (userdoc) => {
        SetUserDoc(userdoc);
        setLoggedIn(true);
    }

    return (
        <div>
            <Validate setUserDoc={setLoggedIn} />   
            {!loggedIn && (
                <div className="w-screen h-screen fixed bg-gray-200 bg-opacity-80 flex justify-center items-center" onClick = {(e) => {toggleFloater(false)}}>
                    <AccountFloater toggleLoginModal={handleLogIn}/>
                </div>
            )}
            <div>here</div>
        </div>
    )
}

export default Write;