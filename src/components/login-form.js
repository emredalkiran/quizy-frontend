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
    console.log(passwordStatus)
    if (!passwordStatus[0]) {
      setPasswordErrorMessage('')
    }
    else if (passwordStatus[0]) {
      setPasswordErrorMessage(passwordStatus[1].message)
    }
 }, [password])
  return (
    <form>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" onFocus={()=>setTouched({...touched, email:true})} onChange={ (e)=>setEmail(e.target.value)} value={email}/>
        { (emailErrorMessage !== '' && touched.email) ? (
         <div>{emailErrorMessage}</div> ) : ''
      }
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input type="password" name="password" onFocus={()=>setTouched({...touched, password:true})} onChange={ (e)=> { setPassword(e.target.value)}} value={password}/>
        { (passwordErrorMessage !== '' && touched.password) ? (
         <div>{passwordErrorMessage}</div>
       ) : null}
      </div>
    </form> 
  )
}

export default LoginForm