import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword , GoogleAuthProvider, signInWithPopup, GithubAuthProvider,  onAuthStateChanged, signOut, sendPasswordResetEmail, updateProfile} from 'firebase/auth';
import { getStorage , ref , uploadBytes, getDownloadURL} from 'firebase/storage'
import { getFirestore , collection , addDoc, getDocs} from 'firebase/firestore';
// import { getDatabase, set, ref} from "firebase/database";
import { getMessaging } from "firebase/messaging";



// ==================================================
const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyDbsszGsDxh8QnkBzEZFhfzrSSfXQSG324",
    authDomain: "react-ecommerce-contact-7eb3b.firebaseapp.com",
    databaseURL: "https://react-ecommerce-contact-7eb3b-default-rtdb.firebaseio.com",
    projectId: "react-ecommerce-contact-7eb3b",
    storageBucket: "react-ecommerce-contact-7eb3b.appspot.com",
    messagingSenderId: "73279323952",
    appId: "1:73279323952:web:985451ef8f64332d62d2f5",
    // databaseURL:"https://react-ecommerce-contact-7eb3b-default-rtdb.firebaseio.com",
  };
  
export const useFirebase = () => useContext(FirebaseContext);
// ===================================================
  const firebaseApp = initializeApp(firebaseConfig);
  const firebaseAuth = getAuth(firebaseApp);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const storage = getStorage(firebaseApp);
  const firestore = getFirestore(firebaseApp);
//   const messaging = getMessaging(firebaseApp);
//   const database = getDatabase(firebaseApp);

//   =================================================
export const messaging = getMessaging(firebaseApp);
export const FirebaseProvider = (props) => {

    const [user, setUser] = useState(null);
    const [ error , setError] = useState('');
    const [ registerErr , setRegisterErr] = useState('');
    const [msg, setMsg] = useState('Post Now');

    useEffect(()=>{
        onAuthStateChanged(firebaseAuth , (user) =>{
            if(user){
                setUser(user);
            }else{
                setUser(null);
            }
        })
    },[])
    // signup user
    const signupUserWithEmail = async (email, username,  password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(firebaseAuth , email ,  password);
            const user = userCredential.user;
             // Update the profile with the display name
          const res =  await updateProfile(user, {
              displayName: username,
           });

          setRegisterErr("Register Success");
        console.log("User display name set to:", username);
        } catch (error) {
            console.log(`Error Register ${error.message}`);
               setRegisterErr(`Register Failed`) 
        }
        
    };

    const loginWithEmailAndPassword = async(email , password) => {
        try {
            await signInWithEmailAndPassword(firebaseAuth , email , password)
            .then(()=> setError('Success'))
            .catch((err)=> setError('Wrong Password'))
              
        } catch (error) {
            setError(`Wrong Password`)
        }
    };

    // signin with google
    const siginWithGoogle = () => {
         signInWithPopup(firebaseAuth, googleProvider)
        .then(()=> alert(`Succeess`))
        .catch((err)=> alert(`Error Occured ${err.message}`))
    };

    // sigin with github
    const signinWithGithub = async () => {
        try{
         await signInWithPopup(firebaseAuth, githubProvider)
        }catch(err){
            console.log(`Error during github signin ${err}`)
        }
    };

    // forgrt password
    const forgetPassword = async (email) => {
        try{
          await sendPasswordResetEmail(firebaseAuth, email)
          alert('password reset link end to your email');
        }
     catch(err){
        console.log(`error in forget password ${err.message}`);
    }
}
    // isloggedin
    const isLoggedIn = user ? true : false

    // listing componets
    console.log(user);
    
    
    // sigout
    const logout = () => {
        return signOut(firebaseAuth);
    };


    const handlerCreateListing = async (brand, condition, title, description, location, price, nametext, mobileNumber, selectedImages) => {
        try {
            const uploadedImageURLs = []; // To store URLs of uploaded images
    
            for (const selectedImage of selectedImages) {
                const imageRef = ref(storage, `OLX/images/${Date.now()}-${selectedImage.name}`);
                const uploadRes = await uploadBytes(imageRef, selectedImage);
                const downloadURL = await getDownloadURL(uploadRes.ref); // Get download URL
                uploadedImageURLs.push(downloadURL); // Store the download URL
            }
    
            await addDoc(collection(firestore, `OLX Data`), {
                brand,
                condition,
                title,
                description,
                location,
                price,
                nametext,
                mobileNumber,
                imageURLs: uploadedImageURLs, // Save the array of image URLs
                userName: user.displayName,
                Email: user.email,
                userUID: user.uid,
                photoURL: user.photoURL,
            });
    
            setMsg(`Success`);
        } catch (error) {
            console.log(`Error listing ${error}`);
            setMsg(`Not Sent`);
        }
    };

    // List all data in website

    const listAllData = async () => {
        try {
            const querySnapshot = await getDocs(collection(firestore, "OLX Data"));
            const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            return data; // Return the fetched data
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

//     const listAllData = () => {
//         return getDocs(collection(firestore, "OLX Data"))
//  };

    const getImgUrl = (path) => {
        try {
            const imgSnapShop = getDownloadURL(ref(storage, path));
            console.log(imgSnapShop)
            return imgSnapShop
        } catch (error) {
            console.log(`Img error ${error}`)
        }
    // return getDownloadURL(ref(storage, path))
}

    
    // ======================================================================================================

    // const handlerCreateListing = async(brand, condition, title, description, location, price, nametext, mobileNumber, selectedImages) => {
    //       try {
    //         const imageRef = ref(storage, `OLX/images/${Date.now()}-${selectedImages.name}`)
    //         const uploadRes = await uploadBytes(imageRef, selectedImages)
            // await addDoc(collection(firestore, `OLX Data`),{
            //  brand,
            //  condition,
            //  title,
            //  description,
            //  location,
            //  price,
            //  nametext,
            //  mobileNumber,
            //  imageURL: uploadRes.ref.fullPath,
            //  userName: user.displayName,
            //  Email:user.email,
            //  userUID: user.uid,
            //  photoURL: user.photoURL,
            // });
            // setMsg(`Succeess`)

    //  }
    //         catch (error) {
    //           console.log(`Error listing ${error}`);
    //           setMsg(`Not Send`)
              
    //       }
    //     }

    return(
        <FirebaseContext.Provider value={{signupUserWithEmail, loginWithEmailAndPassword , siginWithGoogle, signinWithGithub , isLoggedIn, logout, forgetPassword, error, setError, setRegisterErr , registerErr, handlerCreateListing , msg, setMsg, listAllData, getImgUrl, messaging, user}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}
