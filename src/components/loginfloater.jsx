//Component to create Login/Registration Floater
import { app, firestore} from "../../firebase.js";
import { doc, setDoc } from "firebase/firestore";
import { getAuth, signInWithPopup, TwitterAuthProvider, GoogleAuthProvider } from "firebase/auth";


function signInWithTwitter() {
  console.log('here')
  // Get the Firebase auth instance
  const auth = getAuth(app);

  // Create a new TwitterAuthProvider instance
  const provider = new TwitterAuthProvider();

  // Use the Firebase Auth SDK to sign in with Twitter
  signInWithPopup(auth, provider)
    .then((result) => {
      // The user is signed in
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      // Handle errors here
      console.log(error);
    });
}

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



function SignInWithButton({ company, companyFunction }){

  
  return (
  <div className="mt-4 border-2 border-black bg-gray-200 cursor-pointer h-14 justify-center flex items-center w-fit rounded-full p-4 hover:bg-gray-500 transition duration-200" onClick={() => companyFunction()}>
    <img className="h-8 bg-white rounded-full p-2" src = {company.logo} />
    <h1 className="ml-2">Sign in with {company.name}</h1>
  </div>
)
}

function AccountFloater() {

  const companies = [
    {name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"},
    {name: "Twitter", logo: "https://cdn-icons-png.flaticon.com/512/1384/1384065.png"}
  ]


    return (
        <div className="w-1/3 h-5/6 bg-white opacity-full overflow-hidden" onClick = {(e) => {e.stopPropagation()}}>
          <div className="flex text-center w-full">
            <h1 className="text-4xl my-16 w-full">
              Get on <span className="font-bold">your</span> SoapBox
            </h1>
          </div>

          <div class="flex flex-col items-center h-full">
            <SignInWithButton company = {companies[0]} companyFunction={signInWithGoogle} />
            <SignInWithButton company = {companies[1]} companyFunction={signInWithTwitter} />
          </div>
        </div>
    );
}

export default AccountFloater;
