//Component to create Login/Registration Floater
import { app, firestore} from "../../firebase.js";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { getAuth, signInWithPopup, TwitterAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { AiOutlineClose } from "react-icons/ai"


function signInWithApple(){
  console.log('Fill this out later');
  //FILL THIS IN LATER
}


function signInWithTwitter() {

  const auth = getAuth(app);
  const provider = new TwitterAuthProvider();
  
  signInWithPopupFunction(auth, provider);
}

function signInWithGoogle() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  signInWithPopupFunction(auth, provider);
}

function signInWithPopupFunction(auth, provider){
  
  signInWithPopup(auth, provider)
    .then((result) => {
      // Signed in
      const user = result.user;
      
      const userRef = doc(firestore, "users", user.uid);
      getDoc(userRef).then((docSnapshot) => {
        if (docSnapshot.exists()) {
          // Handle existing user
          console.log("User data already exists!"); // log a message if user data already exists
          const userData = docSnapshot.data();
          console.log("User data:", userData); // log the user data to the console
        } else {
          // Create a new user document with the user's information
          const userData = {
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          };
          setDoc(userRef, userData).then(() => {
            console.log("User data added successfully!"); // log a success message if the data was added successfully
          }).catch((error) => {
            console.error("Error adding user data:", error); // log an error message if there was an error adding the data
          });
        }
      }).catch((error) => {
        console.error("Error getting user document:", error); // log an error message if there was an error getting the user document
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
  <div className="mt-4 border-2 border-black bg-gray-200 cursor-pointer h-14 justify-center flex items-center w-20 md:w-56 rounded-full p-4 hover:bg-gray-500 transition duration-200" onClick={() => companyFunction()}>
    <img className="h-8 bg-white rounded-full p-2" src = {company.logo} />
    <h1 className="ml-2 hidden md:block">Sign in with {company.name}</h1>
  </div>
)
}

function AccountFloater() {

  const companies = [
    {name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"},
    {name: "Twitter", logo: "https://cdn-icons-png.flaticon.com/512/1384/1384065.png"},
    {name: "Apple", logo: "data:image/png;base64,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"}
  ]


    return (
        <div className="w-2/3 md:w-1/3 h-5/6 bg-white opacity-full overflow-hidden shadow-xl relative" onClick = {(e) => {e.stopPropagation()}}>
          <AiOutlineClose className="text-2xl absolute top-0 right-0 mt-5 mr-5 cursor-pointer" />
          <div className="flex text-center w-full">
            <h1 className="text-4xl my-16 w-full hidden md:block">
              Get on <span className="font-bold">your</span> SoapBox
            </h1>
            <h1 className="text-4xl my-16 w-full block md:hidden font-bold">
              SoapBox
            </h1>
          </div>

          <div class="flex flex-col items-center h-full">
            <SignInWithButton company = {companies[0]} companyFunction={signInWithGoogle} />
            <SignInWithButton company = {companies[1]} companyFunction={signInWithTwitter} />
            <SignInWithButton company = {companies[2]} companyFunction={signInWithApple} />
          </div>
        </div>
    );
}

export default AccountFloater;
