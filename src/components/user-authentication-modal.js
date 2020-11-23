import React from "react";
import LoginForm from "./login-form";
import SignupForm from "./signup-form";

function LoginModal (props)  {
  return (
    <div className={`modal ${props.open ? "is-active" : ""}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title has-text-centered has-text-weight-semibold">Login</p>
          <button className="delete" onClick={props.close} aria-label="close"></button>
        </header>
        <section className="modal-card-body">
          {props.type === 'login' ? (
              <LoginForm onSuccess={props.onSuccess}/>
            ) : props.type === 'signup' ? (
              <SignupForm onSuccess={props.onSuccess}/>
            ) : '' }
        </section>
      </div>
    </div>
  )
}
export default LoginModal;