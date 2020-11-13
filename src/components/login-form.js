import React, { useState } from 'react';
import * as Yup from 'yup';

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().required('Please enter your email address').email('Please enter a valid email address '),
  password: Yup.string().required('Please enter your password').min(8, 'Your password should be at least 8 characters in length')
})

const validateSingleField = (fieldName, value) => {
  try {
     return [false, Yup.reach(loginValidationSchema, fieldName).validateSync(value)]
   }
   catch(err) {
    return [true, err]
   }
 }

 function LoginForm (props) {
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  })
  const [errorMessages, setErrorMessages] = useState({
    email: '',
    password: '',
  })
  const [touched, setTouched] = useState({email:false, password: false})  

  const handleChange = (e) => {
    const fieldName = e.target.name
    if (!touched[fieldName]) {
      setTouched({...touched, [fieldName]:true})
    }
    setInputs({...inputs, [fieldName]: e.target.value})
    let fieldErrorStatus = validateSingleField(fieldName, inputs[fieldName])
    if (!fieldErrorStatus[0]) {
      setErrorMessages({...errorMessages,[fieldName]: ''})
    }
    else if (fieldErrorStatus[0]) {
     setErrorMessages({...errorMessages,[fieldName]: fieldErrorStatus[1].message})
    }
  }

  const handleSubmit = async (e)=> {
    e.preventDefault()
    setTouched({email:true, password: true}) 
    try {
      const loginData = loginValidationSchema.validateSync(inputs, { abortEarly: false })
      await props.login(loginData)
    }
    catch (err) {
      //check err type to see if it is validation error or error with asnyc network request
      let errorFields = []
      err.inner.forEach(error => {
        if (!errorFields.includes(error.path)) {
          errorFields.push(error.path)
          setErrorMessages({...errorMessages, [error.path]: error.message})
        }
      })
    }
  }
  return (
    <form>
      <div className="login-input-elements-wrapper">
      <div>
        <label className="label" htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Email address" className={`input ${(errorMessages.email !== '' && touched.email) ? 'is-danger': ''}`} onBlur={()=>setTouched({...touched, email:true})} onChange={ e => handleChange(e)} value={inputs.email}/>
        { (errorMessages.email !== '' && touched.email) ? (
         <div className="input-error">{errorMessages.email}</div> ) : ''
      }
      </div>
      <div>
        <label className="label" htmlFor="password">Password</label>
        <input type="password" name="password" className={`input ${(errorMessages.password !== '' && touched.password) ? 'is-danger': ''}`}  placeholder="Password" onBlur={()=>setTouched({...touched, password:true})} onChange={ e => handleChange(e)} value={inputs.password}/>
        { (errorMessages.password !== '' && touched.password) ? (
         <div className="input-error">{errorMessages.password}</div>
       ) : null}
      </div>
      <button type="submit" className="button is-primary is-fullwidth has-text-weight-medium" onClick={e=>handleSubmit(e)}>Continue</button>
      </div>
    </form> 
  )
}

export default LoginForm