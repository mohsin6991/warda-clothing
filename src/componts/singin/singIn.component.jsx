import { useState } from 'react';
import {
    signInWithEmailAndPassword ,
    createUserDocumentFromAuth,
    signInWithGooglePopup,

} from "../../utilts/firebase/firebase-utlits";

import Button from "../button/button.compnent";

import FormInput from '../singup-component/form';
import '../singin/singin.style.scss'
const Sin=()=>{
    const defaultFormFields = {   
        email: '',
        password: '',
    };
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };
    const SinginwhitGoogle =async()=>{
        const {user} = await signInWithGooglePopup();
        //console.log(result);
        createUserDocumentFromAuth(user)
        
};
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const respose = await signInWithEmailAndPassword(email, password);
            console.log(respose);
            resetFormFields();
        } catch (error) {
                switch(error.code){
                    case 'auth/wrong-password':
                        alert('password is incorrect')
                        break;
                    case 'auth/user-not-found':
                        alert('no user associated with this email')
                        break;
                    case 'auth/invalid-credential':
                        alert('invalid email')
                        break;
                    default:
                            console.log(error);
                }     
        }
    };
    return(
        <div className="container">  
                <h1>Sign in</h1>
                <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    type="email"
                    name="email"
                   // placeholder="Enter Your Email"
                    required
                    onChange={handleChange}
                    value={email}
                />
                <FormInput
                    label='Password'
                    type="password"
                    name="password"
                   // placeholder="Enter Your Password"
                    required
                    onChange={handleChange}
                    value={password}
                />
                 <div className='buttons-container'>
                     <Button type="submit" >Sign In</Button>
                    <Button type='button' onClick={SinginwhitGoogle} buttonType='google'>Sing in With Google </Button>
                </div>
                </form>
            </div>
    );
}
export default Sin;