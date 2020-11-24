import React, { useState } from 'react';
import { useDispatch} from 'react-redux'
import { signup } from '../features/auth/authSlice'
import { validateSingleField, signupValidationSchema} from '../utils/validation'
import FormInput from './form-input'

 export default function SignupForm (props) {
  const [inputs, setInputs] = useState({
    name:'',
    lastName:'',
    email: '',
    password: ''
  })
  const [errorMessages, setErrorMessages] = useState({
    name:'',
    lastName:'',
    email: '',
    password: '',
    passwordConfirmation: ''
  })
  const [touched, setTouched] = useState({
    name:'',
    lastName:'',
    email: '',
    password: ''
  })  

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const fieldName = e.target.name
    if (!touched[fieldName]) {
      setTouched({ ...touched, [fieldName]:true })
    }
    setInputs({ ...inputs, [fieldName]: e.target.value })
    let fieldErrorStatus = validateSingleField(fieldName, e.target.value, 'signup')
    if (!fieldErrorStatus[0]) {
      setErrorMessages({ ...errorMessages,[fieldName]: '' })
    }
    else if (fieldErrorStatus[0]) {
     setErrorMessages({ ...errorMessages,[fieldName]: fieldErrorStatus[1].message })
    }
  }

  const handleSubmit = async (e)=> {
    e.preventDefault()
    setTouched({
      name:true,
      lastName: true,
      email:true,
      password: true,
    }) 
    try {
      const credendtials = signupValidationSchema.validateSync(inputs, { abortEarly: false })
      await dispatch(signup(credendtials))
      props.onLogin()
      setTouched({ email:false, password: false })
    }
    catch (err) {
      //check err type to see if it is validation error or error with asnyc network request
      if (err.hasOwnProperty('name') && err.name === 'ValidationError') {
        let errorFields = []
        let errors = {}
        err.inner.forEach(error => {
          if (!errorFields.includes(error.path)) {
            console.log(error.path)
            errorFields.push(error.path)
            errors[error.path] = error.message
          }
        })
        setErrorMessages(errors)
      }
    }
  }
  return (
    <form>
      <div className="login-input-elements-wrapper">
        <span>Temporary</span>
        <FormInput fieldName="name" type="text" label="Name"  errorMessage={ errorMessages.name } touched={ touched.name } blur={ ()=>setTouched({...touched, name:true})} change={ e => handleChange(e) } inputValue={ inputs.name }/>
        <FormInput fieldName="lastName" type="text" label="Last name" errorMessage={ errorMessages.lastName } touched={ touched.lastName } blur={ ()=>setTouched({...touched, lastName:true})} change={ e => handleChange(e) } inputValue={ inputs.lastName }/>
        <FormInput fieldName="email" type="email" label="Email"  errorMessage={ errorMessages.email } touched={ touched.email } blur={ ()=>setTouched({...touched, email:true})} change={ e => handleChange(e) } inputValue={ inputs.email }/>
        <FormInput fieldName="password" type="password" label="Password"  errorMessage={ errorMessages.password } touched={ touched.password } blur={ ()=>setTouched({...touched, password:true})} change={ e => handleChange(e) } inputValue={ inputs.password }/>  
      <button type="submit" className="button is-primary is-fullwidth has-text-weight-medium" onClick={ e =>handleSubmit(e) }>Continue</button>
      <p className="mt-4">
        <span>Already a member? <span className="link-text" onClick={ props.changeModal }> Login</span></span>
      </p>
      </div>
    </form> 
  )
}
