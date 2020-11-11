import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().required('Please enter your email address').email('Please enter a valid email address '),
  password: Yup.string().required('Please enter your password').min(8, 'Your password should be at least 8 characters in length')
})

const validateSingleField = (fieldName, value) => {
  try {
     return [false, Yup.reach(loginValidationSchema, fieldName).validateSync(value)]
   }
   catch(e) {
    return [true, e]
   }
 }

 function LoginForm () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailErrorMessage, setEmailErrorMessage] = useState('')
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('')
  const [touched, setTouched] = useState({email:false, password: false})  

  useEffect(()=> {
     let emailStatus = validateSingleField('email', email)
     if (!emailStatus[0]) {
       setEmailErrorMessage('')
     }
     else if (emailStatus[0]) {
       setEmailErrorMessage(emailStatus[1].message)
     }
  }, [email])

  useEffect(()=> {
    let passwordStatus = validateSingleField('password', password)
    if (!passwordStatus[0]) {
      setPasswordErrorMessage('')
    }
    else if (passwordStatus[0]) {
      setPasswordErrorMessage(passwordStatus[1].message)
    }
 }, [password])
  return (
    <form>
      <div className="login-input-elements-wrapper">
      <div>
        <label className="label" htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Email address" className={`input ${(emailErrorMessage !== '' && touched.email) ? 'is-danger': ''}`} onFocus={()=>setTouched({...touched, email:true})} onChange={ (e)=>setEmail(e.target.value)} value={email}/>
        { (emailErrorMessage !== '' && touched.email) ? (
         <div className="input-error">{emailErrorMessage}</div> ) : ''
      }
      </div>
      <div>
        <label className="label" htmlFor="password">Password</label>
        <input type="password" name="password" className={`input ${(passwordErrorMessage !== '' && touched.password) ? 'is-danger': ''}`}  placeholder="Password" onFocus={()=>setTouched({...touched, password:true})} onChange={ (e)=> { setPassword(e.target.value)}} value={password}/>
        { (passwordErrorMessage !== '' && touched.password) ? (
         <div className="input-error">{passwordErrorMessage}</div>
       ) : null}
      </div>
      </div>
    </form> 
  )
}

export default LoginForm