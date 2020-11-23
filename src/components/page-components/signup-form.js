import React, { useState } from 'react';
import { useDispatch} from 'react-redux'
import { logIn, loggedIn } from '../features/auth/authSlice'
import { validateSingleField, signupValidationSchema} from '../utils/validation'


 export default function SignupForm (props) {
  const [inputs, setInputs] = useState({
    name:'',
    lastName:'',
    email: '',
    password: '',
    passwordConfirmation: ''
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
    password: '',
    passwordConfirmation: ''
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
      passwordConfirmation: true
    }) 
    try {
      const credendtials = signupValidationSchema.validateSync(inputs, { abortEarly: false })
      await dispatch(logIn(credendtials))
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
      <div>
        <label className="label" htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Email address" className={ `input ${(errorMessages.email !== '' && touched.email) ? 'is-danger': ''}` } onBlur={ ()=>setTouched({...touched, email:true})} onChange={ e => handleChange(e) } value={ inputs.email }/>
        { (errorMessages.email !== '' && touched.email) ? (
         <div className="input-error">{ errorMessages.email }</div> ) : ''
      }
      </div>
      <div>
        <label className="label" htmlFor="password">Password</label>
        <input type="password" name="password" className={ `input ${(errorMessages.password !== '' && touched.password) ? 'is-danger': ''}` }  placeholder="Password" onBlur={ ()=>setTouched({...touched, password:true }) } onChange={ e => handleChange(e) }  value={ inputs.password }/>
        { (errorMessages.password !== '' && touched.password) ? (
         <div className="input-error">{ errorMessages.password }</div>
       ) : null}
      </div>
      <button type="submit" className="button is-primary is-fullwidth has-text-weight-medium" onClick={ e =>handleSubmit(e) }>Continue</button>
      </div>
    </form> 
  )
}
