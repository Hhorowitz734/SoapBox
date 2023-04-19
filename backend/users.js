import { getFirestore, collection, getDocs } from "firebase/firestore";

//Gets and returns all users
export async function getAllUsers(){
    const db = getFirestore();
    const usersCollection = collection(db, "users");
    const querySnapshot = await getDocs(usersCollection);

    const users = [];
    querySnapshot.forEach((doc) => {
        users.push(doc.data());
    });

    return users;
}