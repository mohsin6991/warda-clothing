
import {signInWithGooglePopup ,createUserDocumentFromAuth}from '../../utilts/firebase/firebase-utlits'
import SingupForm from '../../componts/singup-component/singupForm';
import Button from "../button/button.compnent"
const singIn=()=>{
        const LogGoogleUser =async()=>{
            const {user} = await signInWithGooglePopup();
            //console.log(result);

            createUserDocumentFromAuth(user)
    };
    return(
        <div>
            <SingupForm/>
            <Button buttonType='google'  onClick={LogGoogleUser}>log in With GooGle </Button>
        </div>
    );};
export default singIn;