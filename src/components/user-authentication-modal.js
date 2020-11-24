import React from 'react'
import LoginForm from './login-form'
import SignupForm from './signup-form'

function UserAuthenticateModal (props)  {
  const handleBackgroundClick = ()=> {
        props.close()
  }

  const handleCardClick = (e)=> {
    e.stopPropagation() // stop bubbling
  }
  return (
    <div className={`modal ${props.open ? "is-active" : ""}`} onClick={ handleBackgroundClick } >
      <div className="modal-background"></div>
      <div className="modal-card" onClick={ (e)=> handleCardClick(e) }>
        <header className="modal-card-head">
          <p className="modal-card-title has-text-centered has-text-weight-semibold"> { props.type }</p>
          <button className="delete" onClick={props.close} aria-label="close"></button>
        </header>
        <section className="modal-card-body" >
          {props.type === 'login' ? (
              <LoginForm onSuccess={ props.onSuccess } changeModal={ props.changeModal }/>
            ) : props.type === 'signup' ? (
              <SignupForm onSuccess={ props.onSuccess } changeModal={ props.changeModal }/>
            ) : '' }
        </section>
      </div>
    </div>
  )
}
export default UserAuthenticateModal;