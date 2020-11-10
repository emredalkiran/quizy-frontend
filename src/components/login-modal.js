import React from "react";
import LoginForm from "./login-form";

function LoginModal (props)  {
  return (
    <div className={`modal ${props.open ? "is-active" : ""}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Modal title</p>
          <button className="delete" aria-label="close"></button>
        </header>
        <section className="modal-card-body">
          <LoginForm />
        </section>
      </div>
    </div>
  )
}
export default LoginModal;
