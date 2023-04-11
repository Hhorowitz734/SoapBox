//Component to create Login/Registration Floater
import {app, firestore} from "../../firebase.js";
import { doc, setDoc } from "firebase/firestore";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function signInWithGoogle() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // Signed in
      const user = result.user;
      
      // Create a new user document in the Firestore 'users' collection
      const userRef = doc(firestore, "users", user.uid);
      const userData = {
        name: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
      };

      setDoc(userRef, userData).then(() => {
        console.log("User data added successfully!"); // log a success message if the data was added successfully
      })
      .catch((error) => {
        console.error("Error adding user data:", error); // log an error message if there was an error adding the data
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // Handle error
    });
}

function AccountFloater() {


    return (
        <div className="w-1/3 h-5/6 bg-white opacity-full overflow-hidden" onClick = {(e) => {e.stopPropagation()}}>
        <h1 className="text-4xl text-center mt-16 font-bold">Let's Talk Politics</h1>
        <div className="flex w-full justify-center items-center">
            <div className="mt-16 border bg-gray-200 cursor-pointer h-14 justify-center flex items-center w-fit rounded-full p-2 hover:bg-gray-500 transition duration-200" onClick={() => signInWithGoogle()}><h1>Sign in with Google</h1></div>
        </div>
        </div>
    );
}

export default AccountFloater;
