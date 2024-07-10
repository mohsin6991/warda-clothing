import { useState } from "react";
import {createAuthUserWithEmailAndPassword ,createUserDocumentFromAuth} from "../../utilts/firebase/firebase-utlits";
import FormInput from "../singup-component/form";
import Button from "../button/button.compnent"
import './form-input.styles.scss'


const SignupForm = () => {
    const defaultFormFields = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const userCredential = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(userCredential.user, { displayName });
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.error('Error creating user', error);
            }
        }
    };

    return (
        <div className="signup-container">
            <h1>I do not have an account</h1>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Display Name'
                    type="text"
                    name="displayName"
                   // placeholder="Enter Your Display Name"
                    required
                    onChange={handleChange}
                    value={displayName}
                />
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
                <FormInput
                    label='Confirm Password'
                    type="password"
                    name="confirmPassword"
                  //  placeholder="Confirm Your Password"
                    required
                    onChange={handleChange}
                    value={confirmPassword}
                />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
};

export default SignupForm;
