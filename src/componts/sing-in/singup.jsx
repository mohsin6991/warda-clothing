import {signInWithGooglePopup ,createUserDocumentFromAuth}from '../../utilts/firebase/firebase-utlits'
const singIn=()=>{
        const LogGoogleUser =async()=>{
            const {user} = await signInWithGooglePopup();
            console.log(result);

            createUserDocumentFromAuth(user)
    };
    return(
        <div>
            <h1>Sign In</h1>
            <button onClick={LogGoogleUser}>log in With GooGle </button>
        </div>
    );};
export default singIn;