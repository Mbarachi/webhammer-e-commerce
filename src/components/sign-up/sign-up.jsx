import React from 'react'
import { useState } from 'react'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import './sign-up.styles.scss'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

const SignUp = () => {

    const [displayName, setdisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
 
    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("passwords don't match")
            return
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, {displayName})
            setdisplayName("")
            setEmail("")
            setPassword("")
            setConfirmPassword("")
        }
        catch(error){
            console.log(error)
        }
    };

    const handleChangeDisplayName = (event) => {
        const {value} = event.target
        setdisplayName(value)
    }

    const handleChangeEmail = (event) => {
        const {value} = event.target
        setEmail(value)
    }
    const handleChangePassword = (event) => {
        const {value} = event.target
        setPassword(value)
    }
    const handleChangeConfirmPassword= (event) => {
        const {value} = event.target
        setConfirmPassword(value)
    }

    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name='displayName'
                    value={displayName}
                    onChange={handleChangeDisplayName}
                    label="Display Name"
                    required
                />
                  <FormInput
                    type="text"
                    name='email'
                    value={email}
                    onChange={handleChangeEmail}
                    label="Email"
                    required
                />
                  <FormInput
                    type="password"
                    name='password'
                    value={password}
                    onChange={handleChangePassword}
                    label="password"
                    required
                />
                  <FormInput
                    type="password"
                    name='confirmpassword'
                    value={confirmPassword}
                    onChange={handleChangeConfirmPassword}
                    label="Confirm Password"
                    required
                />
                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </div>
    )
}

export default SignUp
