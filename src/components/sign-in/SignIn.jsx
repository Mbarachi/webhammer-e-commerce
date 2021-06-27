import {useState} from 'react'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import { signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'

const SignIn = () => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const handleSubmit = (e) => {
    e.preventDefault()
    setEmail('')
    setPassword('')
}

const handleChangeEmail = (event) => {
    const {value} = event.target
    setEmail(value)
}

const handleChangePassword = (event) => {
    const {value} = event.target
    setPassword(value)
}


    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    name='email' 
                    type='email' 
                    value={email} 
                    handleChange={handleChangeEmail}
                    label='email'
                    required
                />
                <FormInput 
                    name='password'
                    type='password' 
                    value={password} 
                    handleChange={handleChangePassword}
                    label='password'
                    required
                />
                <div className="buttons">
                    <CustomButton type='submit'>
                        Sign In
                    </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSigIn>
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn
